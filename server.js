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
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/table", function(req, res) {
  res.sendFile(path.join(__dirname, "table.html"));
});


app.get("/reservation", function(req, res) {
  res.sendFile(path.join(__dirname, "reservation.html"));
});


// Displays all table JSON data
app.get("/api/tables", function(req, res) {
  return res.json(tables);
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