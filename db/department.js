var connection = require("../connect"); 
const inquirer = require("inquirer");
var init = require("../server");
// need to fix this one
function viewDepartments() {
    connection.query("SELECT * FROM department", function (err, res){
        if (err) throw err; 
        console.table(res); 
      });
    // init.init()
}; 

function addDepartment() {
    inquirer.prompt([
        {
            name: "new_department", 
            type: "input", 
            message: "What is the name of the department you'd like to add?"
        }
    ]).then(function(answer) {
        connection.query("INSERT INTO department SET ?", {name: answer.new_department}); 
        connection.query("SELECT * FROM department", function (err, res){
            if (err) throw err; 
            console.table(res); 
        })
    })
    // init.init()
}

module.exports = {
    viewDepartments: viewDepartments, 
    addDepartment: addDepartment,
}