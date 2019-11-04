var friends = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    var totalDifference = 0;

    var bestOfficeMatch = {
      name: "",
      photo: "",
      friendDifference: 100
    };

    var userData = req.body;
    var userName = userData.name;
    var userScores = userData.scores;

    var b = userScores.map(function(item) {
      return parseInt(item, 10);
    });
    userData = {
      name: req.body.name,
      photo: req.body.photo,
      scores: b
    };

    console.log("Name: " + userName);
    console.log("User Score " + userScores);

    var sum = b.reduce((a, b) => a + b, 0);

    console.log("Sum of users score " + sum);
    console.log("Best match friend diff " + bestOfficeMatch.friendDifference);

    for (var i = 0; i < friends.length; i++) {
      console.log(friends[i].name);
      totalDifference = 0;
      console.log("The total difference " + totalDifference);
      console.log("The Office total difference " + bestOfficeMatch.friendDifference);

      var bfriendScore = friends[i].scores.reduce((a, b) => a + b, 0);
      console.log("Total friend score " + bfriendScore);
      totalDifference += Math.abs(sum - bfriendScore);
      console.log("-------------------------> " + totalDifference);

      if (totalDifference <= bestMatch.friendDifference) {
        bestOfficeMatch.name = friends[i].name;
        bestOfficeMatch.photo = friends[i].photo;
        bestOfficeMatch.friendDifference = totalDifference;
      }
      console.log(totalDifference + " Total Difference");
    }
    console.log(bestMatch);

    friends.push(userData);
    console.log("There has been a new friend added");
    console.log(userData);
    res.json(bestMatch);
  });
};