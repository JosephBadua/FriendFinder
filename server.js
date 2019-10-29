// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.static(path.join("./app")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var routes = require("./app/routing/htmlRoutes")
var api = require("./app/routing/apiRoutes")
var friends = api.friends;

// Routes
require("./app/routing/htmlRoutes.js")(app);

app.get("/api/friends", function(req, res) {
  return res.json(friends)
});   

app.post("/api/friends", function(req, res) {
  var newFriend = req.body;
  console.log(newFriend);
  friends.push(newFriend);
  res.json(friends);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


