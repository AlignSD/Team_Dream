const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function userPrompt() {
    return inquirer.promp([
        {
            type: "input",
            name: "managerName",
            message: "Please enter the name of the Manager."
        },
        {
            type: "input",
            name: "managerId",
            message: "Please enter the ID of the Manager."
        },
        {
            type: "input",
            name: "managerEmail",
            message: "Please enter the Email of the Manager."
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "Please enter the office number of the Manager."
        },
        {
            type: "input",
            name: "engineerName",
            message: "Please enter the name of the Engineer."
        },
        {
            type: "input",
            name: "engineerId",
            message: "Please enter the ID of the Engineer."
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "Please enter the Email of the Engineer."
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "Please enter the Github url of the Engineer."
        },
        {
            type: "input",
            name: "internName",
            message: "Please enter the name of the Intern."
        },
        {
            type: "input",
            name: "internId",
            message: "Please enter the ID of the Intern."
        },
        {
            type: "input",
            name: "internEmail",
            message: "Please enter the Email of the Intern."
        },
        {
            type: "input",
            name: "internSchool",
            message: "Please enter the School the Intern is from."
        },
        
    ])
}
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
async function init() {
    
    try {
        const answers = await userPrompt();
  
        const html = render(answers);
      //writeFile will creat html page with the answers
        await writeFileAsync("index.html", html);
  // After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
        console.log("Successfully wrote to index.html");
    } catch (err) {
        console.log(err);
    }
  }
  init();


// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
