var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Queens0723",
  database: "employee_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
  }
});

module.exports = connection;
