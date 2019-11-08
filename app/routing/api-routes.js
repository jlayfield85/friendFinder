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

// This is the math to help partner up the user with The Office 

    var sum = b.reduce((a, b) => a + b, 0);

    console.log("Sum of users score " + sum);
    console.log("Best match The Office differential " + bestOfficeMatch.friendDifference);

    for (var i = 0; i < friends.length; i++) {
      console.log(friends[i].name);
      totalDifference = 0;
      console.log("The total difference " + totalDifference);
      console.log("The Office total difference " + bestOfficeMatch.friendDifference);

      // This code below uses absolute values to help match up with The Office Character in the friends.json array.

      var bfriendScore = friends[i].scores.reduce((a, b) => a + b, 0);
      console.log("Total The Office Score " + bfriendScore);
      totalDifference += Math.abs(sum - bfriendScore);
      console.log(" " + totalDifference);
// This will take the total difference and get you to The Office Character

      if (totalDifference <= bestMatch.friendDifference) {
        bestOfficeMatch.name = friends[i].name;
        bestOfficeMatch.photo = friends[i].photo;
        bestOfficeMatch.friendDifference = totalDifference;
      }
      console.log(totalDifference + " Total Difference");
    }
    console.log(bestMatch);

    friends.push(userData);
    console.log("A new The Office Friend has been created.");
    console.log(userData);
    res.json(bestMatch);
  });
};