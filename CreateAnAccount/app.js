//window.addEventListener("DOMContentLoaded", studentlogin); //loads the create button
const express = require("express");
const PORT = process.env.PORT || 5500;
const app = express();
const mysql = require("mysql");

//Create connection to database
const db = mysql.createConnection({
 host: "us-cdbr-east-04.cleardb.com",
 user: "b69d32883bf511",
 password: "a28ca1ec",
 database: "heroku_bc4f1d8046a1fa8",
 //port: '3306',
});

app.listen(PORT, () => {
 //DO NOT PUT THIS IN REPLIT
 console.log(`Server started on port ${PORT}`);
});

//inserts the data into the database
app.post("/login", function (req, res) {
 let user = { username: "Mark.Abramov@qc.cuny.edu", password: "vomarbA.kraM" };
 let sql = "INSERT INTO Student SET ?";
 db.query(sql, user, (err, result) => {
  if (err) console.log(err);
  console.log(result);
  res.send("Student added...");
 });
});
//Gets the info if you send a post request to user
app.post("/user", function (req, res) {
 db.query(
  `SELECT * FROM student WHERE username = ${mysql.escape(
   "Mark.Abramov@qc.cuny.edu"
  )}`, //change the name if you want to look for another name
  (err, result) => {
   if (err) {
    throw err;
   }
   console.log(result);
  }
 );
});
