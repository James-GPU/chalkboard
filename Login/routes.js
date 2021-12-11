/*
const db = require("../server.js")
const express = require("express");
//var router = express.Router();
const PORT = process.env.PORT || 3000;
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine","ejs")
app.use(express.static("Login"));
app.use(express.static("./Images"));


router.post("/login", function(req, res, next) { 
res.render("Login"); 
});

router.post("/login", function(req, res, next) {
  // store all the user input data
  const userDetails=req.body;
  // insert user data into users table
  var sql = "INSERT INTO student SET ?";
  db.query(sql, userDetails,function (err, data) { 
      if (err) throw err;
         console.log("User dat is inserted successfully "); 
  });
 res.redirect("./StudentHomepage");  // redirect to user form page after inserting the data
}); 

module.exports = router;
*/