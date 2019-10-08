var friends = require("../friendfinder/friends.js");

module.exports = function(app) {
app.get("/api/friends", function(req, res) {
  connection.query("SELECT * FROM tasks;", function(err, data) {
    if (err) throw err;

    res.render("index", { tasks: data });
  });

app.post("/api/friends",  function(req, res) {
    var difference =0;
    var match = {
        name: "",
        photo: "",
        friends: ""});
