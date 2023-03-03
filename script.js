// importing modules
const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Manager = require("./lib/Manager.js");
const Intern = require("./lib/Intern.js");

// let mainDataContainerEl = document.getElementById("mainDataContainer");

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

  var draftofWholeData = draftOfManager(manager);

  var flag = true;
  while (flag) {
    // while loop added to promt user infenetly to creat another team memebr until user dideced to finish team building
    const menuData = await inquirer.prompt(menuQuestions);
    if (menuData.chosenOption == choicesArray[0]) {
      const engineerData = await inquirer.prompt(engineerQuestions);
      const engineer = new Engineer(
        engineerData.name,
        engineerData.id,
        engineerData.email,
        engineerData.github
      );
      //saving all data and appending to engineer variable
      draftofWholeData += draftOfEngineer(engineer);
    } else if (menuData.chosenOption == choicesArray[1]) {
      const internData = await inquirer.prompt(internQuestions);
      const intern = new Intern(
        internData.name,
        internData.id,
        internData.email,
        internData.school
      );
      //saving all data and appending to intern variable
      draftofWholeData += draftOfIntern(intern);
    } else {
      //end the program
      flag = false;
    }
  }

  addData(draftofWholeData);
}
init();

// fs.writeFile("sampleOfGeneratedREADME.md", readmeCallBack, (err) =>
//       err ? console.log(err) : console.log("Success!")
//);


function draftOfManager(manager) {
  let managerHTML = `
  <div class="manager memberTile">
  <div class="tileHeader">
    <div class="name">${manager.getName()}</div>
    <div class="position">
      <img
        src="./images/icons8-coffee-48 (1).png"
        alt="coffee cup image"
      />
      ${manager.getRole()}
    </div>
  </div>
  <div class="dataInfo">
    <div class="information">ID: ${manager.getId()}</div>
    <div class="information">Email: ${manager.getEmail()}</div>
    <div class="information">Office No.: ${manager.getOfficeNumber()}</div>
  </div>
</div>
  `;

  return managerHTML;
}

function draftOfEngineer(engineer) {
  let engineerHTML = `
 <div class="engineer memberTile">
 <div class="tileHeader">
   <div class="name">${engineer.getName()}</div>
   <div class="position">
     <img src="./images/icons8-glasses-48.png" alt="glasses image" />
     ${engineer.getRole()}
   </div>
 </div>
 <div class="dataInfo">
   <div class="information">ID: ${engineer.getId()}</div>
   <div class="information">Email: ${engineer.getEmail()}</div>
   <div class="information">GitHub: ${engineer.getGithub()}</div>
 </div>
</div>
  `;

  return engineerHTML;
}

function draftOfIntern(intern) {
  let internHTML = `
<div class="intern memberTile">
        <div class="tileHeader">
          <div class="name">${intern.getName()}</div>
          <div class="position">
            <img
              src="./images/icons8-graduation-cap-48.png"
              alt="graduate image"
            />
            ${intern.getRole()}
          </div>
        </div>

        <div class="dataInfo">
          <div class="information">ID:${intern.getId()}</div>
          <div class="information">Email:${intern.getEmail()}</div>
          <div class="information">School:${intern.getSchool()}</div>
        </div>
      </div>
`;
  return internHTML;
}

function addData(draftofWholeData) {
  let draftOfHTML = `

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./style.css" />
    <title>Team Builder</title>
  </head>
  <body>
    <header class="topContainer">
      <h1>My Team</h1>
    </header>

    <div class="container" id="mainDataContainer">
${draftofWholeData}
    </div>
  </body>
</html>
`;

  fs.writeFile("index.html", draftOfHTML, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("done");
    }
  });
}
