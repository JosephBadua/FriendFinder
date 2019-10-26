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
var need = api.api;
var friends = api.friends;

// Routes
app.get("/", function(req, res) {
  res.sendFile(routes.home)
});   
app.get("/survey", function(req, res) {
    res.sendFile(routes.survey)
  });  
app.get("/api/friends", function(req, res) {
  return res.json(need)
});   

app.post("/api/friends", function(req, res) {
  var newReservation = req.body;
  newReservation.routeName = newReservation.customerName
    .replace(/\s+/g, "")
    .toLowerCase();
     friends.push(newReservation);
     res.json(friends);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


