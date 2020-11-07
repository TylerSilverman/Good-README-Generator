const inquirer = require('inquirer');
const fs = require('fs');
 

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
        type: "checkbox",
        message:"What licenses did you use to create the project?",
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
    {
        // password
        type: "password",
        message:"What is your password?",
        name: "password",
    },
    {
        // confirming the password
        type: "password",
        message:"Re-enter the password to confirm?",
        name: "confirm",
    },
]).then((data)=>{
    
const filename = "log.txt";

fs.writeFile(filename, JSON.stringify(data, null, "\t"), (err) =>
err ? console.log(err) : console.log ("Information Saved")
    );
});
// .then(function(answers){
//     answers.confirm === answers.password
//     ? console.log("Access Granted")
//     : console.log("Did you forget your password?");
    //  console.log(answers)
