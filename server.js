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
/*
app.listen(PORT, () => {
 //DO NOT PUT THIS IN REPLIT
 console.log(`Server started on port ${PORT}`);
});*/
db.connect((err) => {
 //connects to the database and if successful, logs it into the console
 if (err) console.log(err);
 console.log("MySQL connected");
});

app.post("/post", function (req, res) {
 let user = { username: "Jim", password: "Gordon" };
 let sql = "INSERT INTO Student SET ?";
 db.query(sql, user, (err, result) => {
  if (err) console.log(err);
  console.log(result);
  res.send("Student added...");
 });
});
