var connection = require("./connect");
var inquirer = require("inquirer");
var department = require("./db/department"); 
var employee = require("./db/employee"); 
var role = require("./db/role"); 

  function init() {
    inquirer
      .prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
          "View all employees",
          "View departments",
          "View all roles",
          "Add employee",
          "Add department",
          "Add role", 
          "Update employee role",
          "Quit"
        ]
      })
      .then(function(answer) {
          
        switch (answer.action) {
        case "View all employees":
          employee.viewEmployees();
          break;
          // need to fix this one
        case "View departments":
          department.viewDepartments()
          break;

        case "View all roles":
          role.viewRoles();
          break;
          // need to fix how to assign an id that matches the employee's job title
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

          case "Quit":
            connection.end();
            break;
        }
      });
  }

init()

module.exports = {
  init: init
}
