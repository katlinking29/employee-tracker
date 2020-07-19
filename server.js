var mysql = require("mysql");
var inquirer = require("inquirer");
var consoletable = require("console.table"); 

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Queens0723",
  database: "employee_db"
});


connection.connect(function(err) {
    if (err) throw err;
    console.log("Connection Established"); 
  });