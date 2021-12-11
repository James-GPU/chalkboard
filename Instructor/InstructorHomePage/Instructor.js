//window.addEventListener("DOMContentLoaded", studentlogin); //loads the create button
const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("./Login"));
app.use(express.static("./Images"));
app.get("/", function (req, res) {//checks the database and retrieves information.
  if(err){
    throw err
  }
  res.sendFile("/Instructor/InstructorHomePage/InstructorHomePage.html")
});
});
