const inquirer = require("inquirer");
const Employee = require("Employee");
const Engineer = require("Engineer");
const Manager = require("Manager");
const Intern = require("Intern");

const managerQuestions = [
  { type: "input", name: "name", message: "What is your name?" },
  { type: "input", name: "name", message: "What is your ID"},
  {type: "input", name: "name", message: "What is your email address?"},
  {type: "input", name: "name", message: "What is your office number?"}
];

//manager’s name, employee ID, email address, and office number

const engineerQuestions = [
  { type: "input", name: "name", message: "What is your name?" },
  { type: "input", name: "name", message: "What is your ID"},
  {type: "input", name: "name", message: "What is your email address?"},
  {type: "input", name: "name", message: "What is your GitHub username?"}
];
//engineer’s name, ID, email, and GitHub username,

const internQuestions = [
  { type: "input", name: "name", message: "What is your name?" },
  { type: "input", name: "name", message: "What is your ID"},
  {type: "input", name: "name", message: "What is your email address?"},
  {type: "input", name: "name", message: "What is your School name?"}
];
