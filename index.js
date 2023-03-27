const inquirer = require('inquirer');
const mysql = require('mysql2');
require('dotenv').config()
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: process.env.DB_PW,
    database: 'employees_db'
  },
  console.log(`Connected to the employees_db database.`)
);


function promptUser () {
  inquirer.prompt ([
    {
      type: 'list',
      name: 'option',
      message: 'what would you like to do?',
      choices: ['view department', 'view role', 'view employee', 'add department', 'add role', 'add employee', 'update employee role']
    }
  ]) .then (function(data){
    console.log(data)
    // use conditionals to choose what to run. use data to know what they picked.
    //db.query & console.table the results. insert their answers & or viewing the departments
  })
};

promptUser();