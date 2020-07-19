var mysql = require("mysql");
var inquirer = require("inquirer");
var consoletable = require("console.table"); 
var department = require("./db/department"); 
var employee = require("./db/employee"); 
var role = require("./db/role"); 

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

  function init() {
    inquirer
      .prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
          "View all employees",
          "View all employees by department",
          "View all employees by manager",
          "View all roles",
          "Add employee",
          "Add department",
          "Add role", 
          "Remove employee",
          "Update employee role",
          "Update employee manager"
        ]
      })
      .then(function(answer) {
          
        switch (answer.action) {
        case "View all employees":
          employee.viewEmployees();
          break;
  
        case "View all employees by department":
          department.viewDepartments();
          break;
  
        case "View all employees by manager":
          employee.viewManagers();
          break;

        case "View all roles":
          role.viewRoles();
          break;

        case "Add employee":
          employee.addEmployee();
          break;

        case "Add department":
          department.addDepartment();
          break;

        case "Add role":
          role.addRole();
          break;

        case "Remove employee":
          employee.deleteEmployee();
          break;
  
        case "Update employee role":
          employee.updateEmployee();
          break;

        case "Update employee manager":
          employee.updateManager();
          break;
        }
      });
  }

  init()
