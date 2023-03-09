const fs = require("fs");
class Template {
  //creating draft of html code for manager
  draftOfManager(manager) {
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
      <div class="information">Email: 
     <a href="mailto:${manager.getEmail()}">
     ${manager.getEmail()}</a></div>
      <div class="information">Office No.: ${manager.getOfficeNumber()}</div>
    </div>
  </div>
    `;

    return managerHTML;
  }
//creating draft of html code for engineer
  draftOfEngineer(engineer) {
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
     <div class="information">Email: 
     <a href="mailto:${engineer.getEmail()}">
     ${engineer.getEmail()}</a></div>
     <div class="information">GitHub: 
      <a href="https://www.github.com/${engineer.getGithub()}" target="_blank">
      ${engineer.getGithub()}
      </a>
      </div>
   </div>
  </div>
    `;

    return engineerHTML;
  }
//creating draft of html code for intern
  draftOfIntern(intern) {
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
            <div class="information">Email: 
     <a href="mailto:${intern.getEmail()}">
     ${intern.getEmail()}</a></div>
            <div class="information">School:${intern.getSchool()}</div>
          </div>
        </div>
  `;
    return internHTML;
  }
  // function that creates whole HTML file
  addData(draftofWholeData) {
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
// tamplate function to write to index.html file in dist folder
    fs.writeFile("./dist/index.html", draftOfHTML, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Team has been scuccesfully generated, please refer to index.html in `dist` folder");
      }
    });
  }
}

module.exports = Template;
