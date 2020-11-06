const inquirer = require('inquirer');
const { generate } = require('rxjs');
 

inquirer.prompt([
    {
        //github username
        type: "input",
        message:"What is your github username?",
        name: "username",
    },
    {
        //Github Email Address
        type: "input",
        message:"What is your github email address?",
        name: "email-Address",
    },
    {
        //name of project
        type: "input",
        message:"What is the name of your project",
        name: "title",
    },
    {
        //decsription of project
        type: "input",
        message:"What is the description of your project",
        name: "description",
    },
    {
        //installation of project
        type: "input",
        message:"How did you install the project?",
        name: "installation",
    },
    {
        //testing procedures
        type: "list",
        message:"What test procedures did you use for the project?",
        name: "testing",
        choices:["Procedure A", "Procedure B", "Procedure C", "Procedure D"],
    },
    {
        //any liceneses used for project
        type: "list",
        message:"Did you use any licenses to create the project?",
        name: "license",
        choices:["License A", "License B", "License C", "License D"],
    },
    {
        //any liceneses used for project
        type: "input",
        message:"Did you use any contributions to create the project?",
        name: "contribute",
    },
    {
        //usage for the project
        type: "input",
        message:"Did you have any usage for the project?",
        name: "usage",
    },
    {
        //Contents and Questions
        type: "input",
        message:"Do you have any contents and or questions?",
        name: "questions",
    },
    {
        // table of contents
        type: "list",
        message:"Table of Contents?",
        name: "contents",
        choices:["names", "examples", "questions", "feedback"],
    },
])
.then(function(answers){
    console.log(answers)




// generateAnswers(answers)

})
// need to create a readme file to generate answers and be sent to the readme.md file 
// function generateAnswers (){
//     console.log(generateAnswers)
// }