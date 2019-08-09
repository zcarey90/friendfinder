var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT 8080;
app.use(path.urlencoded({ extended: true}));
app.use(path.json());

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);





app.listen(PORT, function() {
  console.log("The app is listening to PORT: " + PORT);
});
