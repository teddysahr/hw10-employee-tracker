//console.log("HEY");
const mysql = require("mysql2");
const cTable = require("console.table");
const inquirer = require("inquirer");

const addDepartmentPrompt = [
  {
    type: "input",
    message: "What is the name of the department?",
    name: "add_department",
  },
];

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Winter98",
  database: "employee_tracker_db",
});

function getDepartments() {
  return db.promise().query("SELECT * FROM departments ORDER BY id");
}

function getRoles() {
  return db
    .promise()
    .query(
      "SELECT title, salary, Department_Name FROM departments JOIN roles ON roles.department_id = departments.id"
    );
}

function getEmployees() {
  return db
    .promise()
    .query(
      "SELECT firstName, lastName, title, Department_Name, salary FROM employees JOIN roles ON employees.role_id = roles.id JOIN departments ON roles.department_id = departments.id"
    );
}

function createNewDepartment() {
  inquirer.prompt(addDepartmentPrompt).then((addDepartmentAnswer) => {
    db.promise().query(
      `INSERT INTO departments (Department_Name) VALUES ("${addDepartmentAnswer.add_department}")`
    );
  });
}

module.exports = {
  getDepartments,
  getRoles,
  getEmployees,
  createNewDepartment,
};
