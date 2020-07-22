var connection = require("../connect"); 
const inquirer = require("inquirer");

function viewRoles() {
    connection.query("SELECT * FROM role", function(err, res) {
        if (err) throw err;
        console.table(res);
      });
}; 

function addRole() {
    inquirer.prompt([
        {
            name: "new_role", 
            type: "input", 
            message: "What role would you like to add?"
        }, 

        {
            name: "salary", 
            type: "input", 
            message: "What is the salary for this role?"
        }, 

        {
            name: "department_id", 
            type: "list", 
            message: "What department is this role under?", 
            choices: [
                "Sales", 
                "Engineering", 
                "Finance", 
                "Legal"
              ]
        }, 

    ]).then(function(answer) {

        let departmentID;
        if (answer.department_id === "Sales") {
            departmentID = 1
            return departmentID
        }

        console.log(departmentID)
        connection.query("INSERT INTO role SET ?", {name: answer.new_role, salary: answer.salary, department_id: departmentID}); 
        connection.query("SELECT * FROM department", function (err, res){
            if (err) throw err; 
            console.table(res); 
        })
    })
}


module.exports = {
    viewRoles: viewRoles, 
    addRole: addRole
  }