const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const mysql = require("mysql");
/*
app.listen(PORT, () => {
 console.log(`Server started on port ${PORT}`);
});*/
//Create connection
const db = mysql.createConnection({
 host       : 'us-cdbr-east-04.cleardb.com',
 user       : 'b69d32883bf511',
 password   : 'a28ca1ec',//apparently pw causes issue
 //database: 'heroku_bc4f1d8046a1fa8',
 //port: '3306',
});

//mysql://b69d32883bf511:a28ca1ec@us-cdbr-east-04.cleardb.com/heroku_bc4f1d8046a1fa8?reconnect=true
db.connect((err) => {
 if (err) console.log(err);
 console.log("MySQL connected");
});
//creates Database
app.get("/createdb", (req, res) => {
 let sql = 'CREATE DATABASE chalkboard';
 db.query(sql, (err, result) => {
  //if (err) console.log(err);
  console.log(result);
  res.send("database created ...");
 });
});
//creates table
app.get('/createstudenttable',(req,res) =>{
    let sql = 'CREATE TABLE Student(id INT AUTO_INCREMENT,firstName VARCHAR(50),lastName VARCHAR(50),PRIMARY KEY(id))';
    db.query(sql,(err,result)=>{
    //if (err) console.log(err);
    console.log(result);
    res.send('Student table created ...')
    })
})

//Insert INTO
app.get('/addstudent',(req,res) => {
    let user = {firstName:'Ash', lastName:'Ketchum'};
    let sql = 'INSERT INTO Student SET ?';
    let query = db.query(sql,user,(err,result) => {
    if(err)console.log(err);
console.log(result);
res.send('Student added...');
    });
});
