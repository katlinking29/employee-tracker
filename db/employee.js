var connection = require("../connect"); 
const inquirer = require("inquirer");
const mysql = require("mysql");

function viewEmployees() {
    connection.query("SELECT first_name, last_name, title, salary FROM employee LEFT JOIN role ON employee.role_id = role.id", function(err, res) {
        if (err) throw err;
        console.table(res);
      });
}; 

function addEmployee() {
  connection.query("Select * FROM role", function (err, res) {
    if (err) throw err; 
  
    inquirer.prompt([
      {
        name: "first_name", 
        type: "input", 
        message: "What is the employee's first name?"
      }, 

      {
        name: "last_name", 
        type: "input", 
        message: "What is the employee's last name?"
      }, 

      {
        name: "title", 
        type: "list", 
        message: "What is the employee's job title?", 
        choices: [
          "Sales Lead", 
          "Salesperson", 
          "Lead Engineer", 
          "Software Engineer", 
          "Accountant", 
          "Legal Team Lead", 
          "Lawyer"
        ]
      },
      // need to fix so a role id is generated
    ]).then(function (answer) {
        let roleID = []; 
        var roleIndex = roleID[roleID.length - 1]

        for (i = 0; i < answer.title.length; i ++) {
          roleID.push(i)
        }
      // if (answer.title === "Sales Lead") {
      //   roleID = 1
      //   return roleID
      // }; 
      console.log(roleID)
      console.log(roleIndex)

      // connection.query("INSERT INTO employee SET ?", {first_name: answer.first_name, last_name: answer.last_name, role_id: roleIndex}, function (err){
      //   if (err) throw err; 
      //   console.log("This employee has been added!");
      // })
    })
  })
}; 

function deleteEmployee() {
  let currentEmployees = []; 
  connection.query("SELECT employee.first_name, employee.last_name FROM employee", function(err, res){
    for (let i = 0; i < res.length; i++){
      currentEmployees.push(res[i].first_name + res[i].last_name)
    };

    inquirer.prompt([
      {
        name: "employee", 
        type: "list", 
        message: "Which employee would you like to remove?", 
        choices: currentEmployees
      }
    ]); 
  }).then(function(answer){
    connection.query("DELETE FROM employee WHERE (first_name, last_name) = ${answer.employee})", function (err, res){
      if (err) throw err; 
      console.log("This employee has been removed"); 
    }
  )});
}; 

module.exports = {
  viewEmployees: viewEmployees,
  addEmployee: addEmployee,
  deleteEmployee: deleteEmployee
}

