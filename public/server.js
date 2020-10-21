// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var fs = require("fs");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// const dataBase = require(path.join(__dirname, "db/db.json"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('assets'))

// Middle stuff

// html paths

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/index.html"));
  });

  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/notes.html"));
  });

//   api endpints

  app.get("/api/notes", function(req, res) {
    res.sendFile(path.join("C:/Users/skirk/develoupment/Note_Taker/db/", "db.json"))
  });

  app.post("/api/notes", function(req, res) {

    let newNote = req.body;

    console.log(newNote);

    // dataBase.push(newNote);

    // console.log(dataBase)

    res.json(newNote);

  })
  

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("http://localhost:" + PORT);
    console.log(__dirname);
  });
  