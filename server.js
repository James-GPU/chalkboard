const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
//app.set("view engine","ejs")
app.use(express.static("./Login"));
app.use(express.static("./Images"));
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname+ "./Login"));
// With middleware
/*
app.use("/", function(req, res, next){
    res.sendFile("Login/index.html" ,{root: __dirname});
});
*/
const hostnameinfo = process.env['host'];
const usernameinfo = process.env['user'];
const passwordinfo = process.env['password']
const databaseinfo = process.env['database']
//Create connection to database
const db = mysql.createPool({
host:hostnameinfo,
user:usernameinfo,
password:passwordinfo,
database:databaseinfo
});
db.getConnection((err) => {
 //connects to the database and if successful, logs it into the console
 if (err) console.log(err);
 console.log("MySQL connected");
});

//inserts into database via POST
app.post("/createStudent", function(req, res) {//when sent a post message,  the following will start
let email = JSON.parse(JSON.stringify(req.body.email));
let pass = JSON.parse(JSON.stringify(req.body.pass));
  //code to get the password and username from db
db.query(`INSERT INTO student (username,password) VALUES (${mysql.escape(email)},${mysql.escape(pass)})`,(err)=>{
  if(err){
    throw err;
    return;
  }
})
  res.redirect("/");
});
app.post("/login", function(req, res) {//when sent a post message,  the following will start
let user = JSON.parse(JSON.stringify(req.body.user));
let pass = JSON.parse(JSON.stringify(req.body.pass));
  //code to get the password and username from db
 db.query(`SELECT username, password FROM student WHERE username = ${mysql.escape(user)} AND password = ${mysql.escape(pass)}`,function(err, result){
    //if I were to type a password that is not in the database, it gives me undefined or []
    if(err){
      console.log(err);
    }
    let compare = JSON.parse(JSON.stringify(result));
    console.log(compare)
if(compare == null || compare.length == 0) {
  console.log(user);
  res.redirect("/");
}
    else{
      res.redirect("/StudentHomepage");
    } 
  });
});

//Instructor Login
app.post("/instruct", function(req, res) {//when sent a post message,  the following will start
let user = JSON.parse(JSON.stringify(req.body.user));
 // console.log(user);
let pass = JSON.parse(JSON.stringify(req.body.pass));
  //code to get the password and username from db
  //console.log(pass);
 db.query(`SELECT username, password FROM instructor WHERE username = ${mysql.escape(user)} AND password = ${mysql.escape(pass)}`,function(err, result){
    //if I were to type a password that is not in the database, it gives me undefined or []
    if(err){
      console.log(err);
    }
    let compare = JSON.parse(JSON.stringify(result));
    //console.log(compare)
if(compare == null || compare.length == 0) {
  //console.log(user);
  res.redirect("/");
}
    else{
      res.redirect("/InstructorHomePage");
    } 
  });
});
//Admin Login
app.post("/admin", function(req, res) {//when sent a post message,  the following will start
let user = JSON.parse(JSON.stringify(req.body.user));
let pass = JSON.parse(JSON.stringify(req.body.pass));
  //code to get the password and username from db
 db.query(`SELECT username, password FROM admin WHERE username = ${mysql.escape(user)} AND password = ${mysql.escape(pass)}`,function(err, result){
    //if I were to type a password that is not in the database, it gives me undefined or []
    if(err){
      console.log(err);
    }
    let compare = JSON.parse(JSON.stringify(result));
    console.log(compare)
if(compare == null || compare.length == 0) {
  console.log(user);
  res.redirect("/");
}
    else{
      res.redirect("/AdminView");
    } 
  });
});
app.get("/AdminView", function(req, res) {
  res.sendFile(__dirname + "/public/html/adminview.html");
});
app.get("/CourseInformation", function(req, res) {
  res.sendFile(__dirname + "/public/html/courseinformation.html");
});
app.get("/CourseMaterials", function(req, res) {
  res.sendFile(__dirname + "/public/html/coursematerials.html");
});
app.get("/CreateACourse", function(req, res) {
  res.sendFile(__dirname + "/public/html/createacourse.html");
});
app.get("/CreateAnAccount", function(req, res) {
  res.sendFile(__dirname + "/public/html/createanaccount.html");
});
app.get("/CRUD", function(req, res) {
  res.sendFile(__dirname + "/public/html/crud.html");
});
app.get("/CRUD", function(req, res) {
  res.sendFile(__dirname + "/public/html/crud.html");
});
app.get("/DeleteACourse", function(req, res) {
  res.sendFile(__dirname + "/public/html/deleteacourse.html");
});
app.get("/ForgotUsernameAndPassword", function(req, res) {
  res.sendFile(__dirname + "/public/html/forgotusernameandpassword.html");
});
app.get("/InstructorAssignmentsPage", function(req, res) {
  res.sendFile(__dirname + "/public/html/instructorassignmentspage.html");
});
app.get("/InstructorAssignmentsXPage", function(req, res) {
  res.sendFile(__dirname + "/public/html/instructorassignmentsxpage.html");
});
app.get("/InstructorCoursePage", function(req, res) {
  res.sendFile(__dirname + "/public/html/instructorcoursepage.html");
});
app.get("/InstructorHomePage", function(req, res) {
  res.sendFile(__dirname + "/public/html/instructorhomepage.html");
});
app.get("/InstructorLectureSlidesPage", function(req, res) {
  res.sendFile(__dirname + "/public/html/instructorlectureslidespage.html");
});
app.get("/InstructorMaterialsPage", function(req, res) {
  res.sendFile(__dirname + "/public/html/instructormaterialspage.html");
});
app.get("/InstructorOnlineLecturesPage", function(req, res) {
  res.sendFile(__dirname + "/public/html/instructoronlinelecturespage.html");
});
app.get("/LeaveACourse", function(req, res) {
  res.sendFile(__dirname + "/public/html/leaveacourse.html");
});
app.get("/SearchForClasses", function(req, res) {
  res.sendFile(__dirname + "/public/html/searchforclasses.html");
});
app.get("/StudentAssignmentsPage", function(req, res) {
  res.sendFile(__dirname + "/public/html/studentassignmentspage.html");
});
app.get("/StudentAssignmentsXPage", function(req, res) {
  res.sendFile(__dirname + "/public/html/studentassignmentsxpage.html");
});
app.get("/StudentCoursePage", function(req, res) {
  res.sendFile(__dirname + "/public/html/studentcoursepage.html");
});
app.get("/StudentHomepage", function(req, res) {
  res.sendFile(__dirname + "/public/html/studenthomepage.html");
});
app.get("/StudentLectureSlidesPage", function(req, res) {
  res.sendFile(__dirname + "/public/html/studentlectureslidespage.html");
});
app.get("/StudentMaterialsPage", function(req, res) {
  res.sendFile(__dirname + "/public/html/studentmaterialspage.html");
});
app.get("/StudentOnlineLecturesPage", function(req, res) {
  res.sendFile(__dirname + "/public/html/studentonlinelecturespage.html");
});
app.get("/StudentRoster", function(req, res) {
  res.sendFile(__dirname + "/public/html/studentroster.html");
});
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});