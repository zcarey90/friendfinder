var friends = require("../app/data/friends.js");

module.exports = function(app) {
  app.post("/api/friends", function(req, res) {
    var newfriend = req.body;
    var greatestDifference = 25;
    var greatestDiffPosition = 0;
    var match = {
      name: "",
      photo: "",
      friends: ""
    };

    var scores = req.body.scores;
    console.log("player", scores);

    for (var i = 0; i < friends.length; i++) {
      totalDifference = 0;

      for (var z = 0; z < friends[i].scores.length; z++) {
        totalDifference += Math.abs(
          parseInt(scores[z]) - parseInt(friends[i].scores[z])
        );
      }
      console.log("totalDifference");
      if (totalDifference < greatestDifference) {
        greatestDifference = totalDifference;
        console.log("new great");
        greatestDiffPosition = i;
      }
    }
    res.json({ match: friends[greatestDiffPosition] });
  });
};
