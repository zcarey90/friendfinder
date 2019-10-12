var express = require("express");
var app = express();
var path = require("path");

var PORT = process.env.PORT || 1000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static("public"));

require("./routing/apiRoutes.js")(app);
require("./routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
  console.log("The app is listening to PORT: " + PORT);
});
