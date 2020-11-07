const inquirer = require('inquirer');
const fs = require('fs');
 

inquirer.prompt([
    {
        //#1name of project
        type: "input",
        message:"What is the name of your project",
        name: "title of project",
    },
    {
        //#2decsription of project
        type: "input",
        message:"What is the description of your project",
        name: "description of project",
    },
    {
        // #3table of contents
        type: "list",
        message:"Table of Contents?",
        name: "contents",
        choices:["names", "examples", "questions", "feedback"],
    },
    {
        //#4installation of project
        type: "checkbox",
        message:"What did you use to install the project?",
        name: "installation",
        choices: ["Didnt need anything", "javascript", "VS Code", "just installed all on its own"],
    },
    {
        //#5usage for the project
        type: "input",
        message:"What usage did you use for the project?",
        name: "usage used:",
    },
    {
        //#6any liceneses used for project
        type: "checkbox",
        message:"What licenses did you use to create the project?",
        name: "licenses used:",
        choices:["Paython", "HTML/CSS", "Javascript", "Node"],
    },
    {
        //#7any contributions used for project
        type: "checkbox",
        message:"Did you use any contributions to create the project?",
        name: "contributed to the project:",
        choices: ["Yes", "No"],
    },
    {
        //#8testing procedures
        type: "checkbox",
        message:"What test procedures did you use for the project?",
        name: "testing Procedures used:",
        choices:["Procedure A", "Procedure B", "Procedure C", "Procedure D"],
    },
    {
        //#9Questions
        type: "checkbox",
        message:"Do you have any questions?",
        name: "questions",
        choices: ["Yes", "No"]
    },
    {
        //#9-1 Ask the question
        type: "input",
        message:"What is your question?",
        name: "Question:",
    },
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
        // password is hidden
        type: "password",
        message:"What is your password?",
        name: "password",
    },
    {
        // confirming the password is hidden
        type: "password",
        message:"Re-enter the password to confirm?",
        name: "confirm",
    },
    //function to create the information saved on another filename
]).then((data)=>{
    
const filename = "log.txt";

fs.writeFile(filename, JSON.stringify(data, null, "\t"), (err) =>
err ? console.log(err) : console.log ("Information Saved")
    );
})
//function to check if the password is correct or not but can ont use both functions at the same time. 
// .then(function(answers){
//     answers.confirm === answers.password
//     ? console.log("Access Granted")
//     : console.log("Did you forget your password?");
//      console.log(answers)
// })
