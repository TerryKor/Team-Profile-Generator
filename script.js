const inquirer = require("inquirer");
const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Manager = require("./lib/Manager.js");
const Intern = require("./lib/Intern.js");

const managerQuestions = [
  { type: "input", name: "name", message: "What is Manager's name?" },
  { type: "input", name: "id", message: "What is Manager's ID?" },
  { type: "input", name: "email", message: "What is Manager's email address?" },
  {
    type: "input",
    name: "officeNumber",
    message: "What is Manager's office number?",
  },
];

//manager’s name, employee ID, email address, and office number

const engineerQuestions = [
  { type: "input", name: "name", message: "What is Engineer's name?" },
  { type: "input", name: "id", message: "What is Engineer's ID?" },
  { type: "input", name: "email", message: "What is Engineer's email address?" },
  { type: "input", name: "github", message: "What is Engineer's GitHub username?" },
];
//engineer’s name, ID, email, and GitHub username,

const internQuestions = [
  { type: "input", name: "name", message: "What is Intern's name?" },
  { type: "input", name: "id", message: "What is Intern's ID?" },
  { type: "input", name: "email", message: "What is Intern's email address?" },
  { type: "input", name: "school", message: "What is Intern's School name?" },
];

const menuQuestions = [
  {
    type: "input",
    name: "choose an option",
    message: "Would you like to add another team member?",
    choices: [
      "Would you like to add engineer?",
      "Would you like to add intern?",
      "Would you like to finish your team building?",
    ],
  },
];

async function init() {
  const managerData = await inquirer.prompt(managerQuestions);
  const engineerData = await inquirer.prompt(engineerQuestions);
  const internData = await inquirer.prompt(internQuestions);
  const menuData = await inquirer.prompt(menuQuestions);

  console.log(managerData);
  console.log(engineerData);
  console.log(internData);
  console.log(menuData);
}
init();
