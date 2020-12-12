const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// empty arrays to store data
const fullTeam = [];
const emptyId = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// Manager setup section
const managerSetup = [
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
    }
];  

// function utilizing Inquirer to prompt user on how they want to use the app
function manager() {
    console.log("let's get started with building your team!");
    inquirer.prompt(managerSetup).then(function(data) {
        const manager = new Manager(data.managerName, data.managerId, data.managerEmail,data.managerOfficeNumber);
        fullTeam.push(manager);
        emptyId.push(data.managerId);

        
        team();
    });
};

// team function which is a prompt asking what 
// role of member you want to add and what their information is
function team() {
    inquirer.prompt([
        {
            type: "list",
            name: "memberType",
            message: "What type of employee would you like to add?",
            choices: [
                "Engineer",
                "Intern",
                "I don't require any new employees."
            ]
        }
    ]).then(function(data) {
        if (data.memberType === "Engineer") {
            engineer();
        } else if (data.memberType === "Intern") {
            intern();
        } else (outputTeam());
        
    });
};

// Roles Functions Section //

// Engineer function which takes in the users inputs and pushes it to fullTeam array
function engineer() {
    inquirer.prompt([
        
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
        }
    ])
        .then(function(data) {
            const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail,data.engineerGithub);
            fullTeam.push(engineer);
            emptyId.push(data.engineerId);
            team();
        });
};

// Intern function which takes in the users inputs and pushes it to fullTeam array
function intern() {
    inquirer.prompt([
        
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
            message: "Please enter the School of the Intern."
        }
])
    .then(function(data) {
        const intern = new Intern(data.internName, data.internId, data.internEmail,data.internSchool);
        fullTeam.push(intern);
        emptyId.push(data.internId);
        team();
    });
};



        


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
  


function outputTeam() {
    // if output dir doesnt exist, create one
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    // write fullteam array to outputPath variable
    fs.writeFileSync(outputPath, render(fullTeam), "utf-8");
}

// manager function kicks off the app
manager();
