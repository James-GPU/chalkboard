const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const mysql = require("mysql");
app.use(express.json());
app.use(express.urlencoded({extended: false}));
