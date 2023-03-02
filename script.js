// importing modules
const inquirer = require("inquirer");
const fs = require("fs");
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
  {
    type: "input",
    name: "email",
    message: "What is Engineer's email address?",
  },
  {
    type: "input",
    name: "github",
    message: "What is Engineer's GitHub username?",
  },
];
//engineer’s name, ID, email, and GitHub username,

const internQuestions = [
  { type: "input", name: "name", message: "What is Intern's name?" },
  { type: "input", name: "id", message: "What is Intern's ID?" },
  { type: "input", name: "email", message: "What is Intern's email address?" },
  { type: "input", name: "school", message: "What is Intern's School name?" },
];

const choicesArray = [
  "Would you like to add engineer?",
  "Would you like to add intern?",
  "Would you like to finish your team building?",
];

const menuQuestions = [
  {
    type: "list",
    name: "chosenOption",
    message: "Would you like to add another team member?",
    choices: choicesArray,
  },
];

async function init() {
  const managerData = await inquirer.prompt(managerQuestions);
  const manager = new Manager(
    managerData.name,
    managerData.id,
    managerData.email,
    managerData.officeNumber
  );







  while (true) // while loop added to promt user infenetly to creat another team memebr until user dideced to finish team building 
  {
    const menuData = await inquirer.prompt(menuQuestions);
    if (menuData.chosenOption == choicesArray[0]) {
      const engineerData = await inquirer.prompt(engineerQuestions);
      const engineer = new Engineer(
        engineerData.name,
        engineerData.id,
        engineerData.email,
        engineerData.officeNumber
      );
    } else if (menuData.chosenOption == choicesArray[1]) {
      const internData = await inquirer.prompt(internQuestions);
      const intern = new Intern(
        internData.name,
        internData.id,
        internData.email,
        internData.officeNumber
      );
    } else {
      //end the program
      return;
    }
  }
}
init();

// fs.writeFile("sampleOfGeneratedREADME.md", readmeCallBack, (err) =>
//       err ? console.log(err) : console.log("Success!")
//);




function addManagerToHTML(manager){
  let draftOFHTML  = ""













  // fs.writeFile("index.html", )
}