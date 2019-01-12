// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/reservation", function(req, res) {
  res.sendFile(path.join(__dirname, "reservation.html"));
});

// Displays all characters
app.get("/api/table", function(req, res) {
  return res.json(characters);
});

// Displays a single character, or returns false
app.get("/api/table/:table", function(req, res) {
  var reserve = req.params.table;

  console.log(reserve);

  for (var i = 0; i < table.length; i++) {
    if (reserve === table[i].routeName) {
      return res.json(table[i]);
    }
  }

  return res.json(false);
});

app.get("api/reservations/:reservation", function(req, res) {
  var table = req.params.reservation;

  console.log(table);

  
  for (var i = 0; i < tables.length; i++) {
    if (chosen === tables[i].routeName) {
      return res.json(tables[i]);
    }
  }

  return res.json(false);
})

// Create New Characters - takes in JSON input
app.post("/api/table", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newReservation = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

  console.log(newReservation);

  characters.push(newReservation);

  res.json(newReservation);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

var tables = [
  {
    uuid: 1,
    name: "Joe Blow",
    phoneNumber: "555-555-5555",
    email: "joeblow@aol.com"
  },
  {
    uuid: 2,
    name: "Mary Jane",
    phoneNumber: "555-420-5555",
    email: "MJ@aol.com"
  }
]