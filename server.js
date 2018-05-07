const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var htmlRoutes = require('./app/routing/htmlRoutes');
// functions are invoked using the invocation operator ()
htmlRoutes(app);
// a route is nothing but a url


var apiRoutes = require('./app/routing/apiRoutes');
apiRoutes(app);


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
