const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
//app.set("view engine","ejs")
app.use(express.static("./Login"));
app.use(express.static("./Images"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname+ '/Login'));
// With middleware
/*
app.use("/", function(req, res, next){
    res.sendFile("Login/index.html" ,{root: __dirname});
});
*/
//Create connection to database
const db = mysql.createConnection({
 host: "us-cdbr-east-04.cleardb.com",
 user: "b69d32883bf511",
 password: "a28ca1ec",
 database: "heroku_bc4f1d8046a1fa8",
 //port: "3306",
});

db.connect((err) => {
 //connects to the database and if successful, logs it into the console
 if (err) console.log(err);
 console.log("MySQL connected");
});

//works if sendFile is not present after the first time
//inserts into database

/*
app.post("/login", function (req, res) {
 let user = { username: "test@gmail.com", password: "password" };
 let sql = "INSERT INTO Student SET ?";
 db.query(sql, user, function(err, result) {
  if (err) console.log(err);
  console.log(res);
  res.send("Student added...");
 });
});
*/

app.post("/login", function(req, res) {//when sent a post message,  the following will start
let user = JSON.stringify(req.body.user);
let pass = JSON.stringify(req.body.pass);
let usercheck = false;
let passcheck = false;


  res.json({//so far this just puts the code onto the screen
    "username": req.body.user,
    "password": req.body.pass
  });
  /*
  let username = db.query(`SELECT username FROM student WHERE username = ${mysql.escape(user)}`,(err,result)=>{//queries the database for info
  if(err){
    throw err//throws error if error
  }
  //if (user == result[0])usercheck = true;
  });
  let password = db.query(`SELECT password FROM student WHERE password =${mysql.escape(pass)}`,(err,result)=>{//queries the database for info
  if(err){
    throw err//throws error if error
  }
  //if(pass == result[0])passcheck = true;
  });

  //if (user == true && pass == true)res.json({"user" : "True",
  //"pass" : "True"});
  */
});

app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
//ps aux | grep node
//kill -9 PID
module.exports = db;