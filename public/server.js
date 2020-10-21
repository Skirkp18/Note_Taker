// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var fs = require("fs");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('assets'))

// Middle stuff
const dataBase = require(path.join("../db", "db.json"));
let dataBaseObj = dataBase

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

    id = dataBaseObj.length + 1;

    console.log(id);

    newNote.id = id;

    console.log(newNote);

    dataBase.push(newNote);

    const dataBaseJSON = JSON.stringify(dataBase)

    fs.writeFile("../db/db.json", dataBaseJSON, function (err) {
      if (err) throw err;
      console.log('Note Added!');
    });

    // console.log(dataBase)

    res.json(dataBase);

  })

  app.delete("/api/notes/:id", function(req, res) {
    console.log(req)
  })
  

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("http://localhost:" + PORT);
  });
  