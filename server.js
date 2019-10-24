// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var routes = require("./app/routing/htmlRoutes")
var api = require("./app/routing/apiRoutes")
var need = api.api;
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.static(path.join(__dirname, "./app/public/home.html")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
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
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


