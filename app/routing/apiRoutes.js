// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friends = require("../data/friends.js");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------


  // Create New Characters - takes in JSON input
  app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newfriend = req.body;

    console.log(newfriend);

    friends.push(newfriend);

    res.json(newfriend);

    findMostCompat(newfriend);

  });
};

function findMostCompat(newfriend) {
  var lowestdiff = 41;
  var index = 0;

  // console.log(friend.name);
  // console.log(friend.photo);
  // console.log(friend.scores[1]);
  // console.log(friends[0].scores[0]);

  for (var i = 0; i < (friends.length-1); i++){
    var diff = 0
    for (var x = 0 ; x < 10 ; x++){
      diff += Math.abs(parseInt(newfriend.scores[x]) - parseInt(friends[i].scores[x]));
    }
    if (diff < lowestdiff) {
      lowestdiff = diff;
      index = i;
    }
  }
  console.log("Friends Array Length: " + friends.length);
  console.log("Lowest difference: " + lowestdiff);
  console.log("Index: " + index);
  console.log("Most compatible friend: " + friends[index].name);
}

