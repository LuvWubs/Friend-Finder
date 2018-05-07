//Your htmlRoutes.js file should include two routes:

//A GET Route to /survey which should display the survey page.
//A default, catch-all route that leads to home.html which displays the home page

// Basic route that sends the user first to the AJAX Page
const path = require('path');
var friends = require('../data/friends.json');

module.exports = function(app) {
  // get is to GET data from the back end
  app.get('/api/friends', function(req, res) {
    res.json(friends);
  });

  // post is to SEND data to the back end
  app.post('/api/friends.json', function(req, res) {

    var newFriend = req.body;
    console.log('newFriend', newFriend);

    // placeholder best match (will be replaced by first person in friends array)
    var bestMatch = {
      difference: Infinity
    };

    // compare newFriend with all friends
    // loop over friends
    for (var i = 0; i < friends.length; i++) {
      var friend = friends[i];
      console.log('friend', friend);
      // loop over friends' answers
      var difference = 0;
      for (var j = 0; j < friend.answers.length; j++) {
        var answer = friend.answers[j];
        var newFriendAnswer = newFriend.answers[j];
        // compare answers and add difference to totalDifference
        //console.log('answer', typeof answer); // number
        //console.log('newFriendAnswer', typeof newFriendAnswer); // string
        difference += Math.abs(answer - parseInt(newFriendAnswer));
      }

      // check if the current friend is the best match
      if (bestMatch.difference > difference) {
        console.log('new best friend!');
        friend.difference = difference;
        bestMatch = friend;
      }

    }

    // add newFriend to friends array
    friends.push(newFriend);

    // return best match
    res.json(bestMatch);

  });
}

/*
API - Application Programming Interface
An API is how data gets passed from the back end to the front end
An API is how data gets passed to and from the database and the front end
*/
