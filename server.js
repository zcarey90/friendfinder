var express = require("express");
var app = express();
var path = require("path");


var PORT = process.env.PORT 8080;


var jsonParser = bodyParser.json()

app.use(path.urlencoded({ extended: true}));
app.use(path.json());

app.use(bodyParser.text({ type: 'text/html'}));



require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);





app.listen(PORT, function() {
  console.log("The app is listening to PORT: " + PORT);
});
