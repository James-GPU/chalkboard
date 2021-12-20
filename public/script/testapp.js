console.log("YEEHAW TESTINGGGGG!");
const express = require("express");
const mysql = require("mysql");

/*
const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
*/

app.use(express.static("./Login"));
app.use(express.static("./Images"));

// With middleware
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
  console.log("Middleware");
});

db.connect((err) => {
 //connects to the database and if successful, logs it into the console
 if (err) console.log(err);
 else console.log("MySQL connected");
});

const app = express();

//works if sendFile is not present after the first time
//inserts into database
/*
app.post("/login", function (req, res) {
 let user = { username: "user", password: "name" };
 let sql = "INSERT INTO Student SET ?";
 db.query(sql, user, function(err, result) {
  if (err) console.log(err);
  console.log(res);
  res.send("Student added...");
 });
});
*/

//view instructors
app.get("/dbinst", (req, res) => {
  console.log("...");
  const sql = `select instructorFirstName, instructorLastName from myapp.instructors WHERE enrolled ="" `;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);

    res.sendFile(__dirname + "/SearchForClasses.html");
  });
});

//view courses
app.get("/dbcourses", (req, res) => {
  console.log("...");
  const sql = `select courseNumber from myapp.courses WHERE available ="" `;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);

    res.sendFile(__dirname + "/SearchForClasses.html");
  });
});

//Create an account
app.get("/account", (req, res) => {
  console.log("testing");
  let user = {
    username: "lalisa@gmail.com",
    password: "123456",
  };
  let sql = "INSERT INTO myapp.account";
  let query = db.query(sql, user, (err, result) => {
    if (err)throw err;
    console.log(result);
    res.send("New account made");
  });
  const sql = `select from myapp.courses WHERE available ="Y" `;
  db.query(sql1, (err,result) => {
    if (err) throw err;
    console.log(result);

    res.sendFile(__dirname + "");
  });
});

app.listen("3000", () => {
  console.log("Server started on port 3000");
});