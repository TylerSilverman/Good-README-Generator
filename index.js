const inquirer = require('inquirer');
const fs = require('fs');
const { generate } = require (`rxjs`);
// const util = require ('util');
 
inquirer.prompt([
    {
        //#1name of project
        type: "input",
        message:"What is the name of your project",
        name: "title",
    },
    {
        //#2decsription of project
        type: "input",
        message:"What is the description of your project",
        name: "description",
    },
    {
        //#4installation of project
        type: "input",
        message:"What install instructions were used? If None were used, write NONE.",
        name: "installation",
    },
    {
        //#5usage for the project- Done
        type: "input",
        message:"What usage did you use for the project?",
        name: "Usage",
    },
    {
        //#6any liceneses used for project - Done
        type: "checkbox",
        message:"What licenses did you install?",
        name: "licenses",
        choices:["MIT", "APACHE 2.0", "GitHub", "GPL 3.0"],
    },
    {
        //#7any contributions used for project
        type: "input",
        message:"Who contributed to create the project?",
        name: "contributor",
    },
    {
        //#8 types of package names 
        type: "checkbox",
        message:"What type of package names did you use for the project?",
        name: "Packages used:",
        choices:["APM", "Bower", "CRAN/METACRAN", "PyPI"],
    },
    {
        //#9If you have Questions leave contact information- Done
        type: "input",
        message:"If you have questions, please leave your contact information.",
        name: "input",
    },
    {
        //github username- Done
        type: "input",
        message:"What is your github username?",
        name: "username",
    },
    {
        //Github Email Address- Done
        type: "input",
        message:"What is your github email address?",
        name: "email-Address",
    },
    {
        // password is hidden - Done
        type: "password",
        message:"What is your password?",
        name: "password",
    },
    {
        // confirming the password is hidden- Done
        type: "password",
        message:"Re-enter the password to confirm?",
        name: "confirm",
    },
    {
        // #3table of contents
        type: "list",
        message:"Table of Contents?",
        name: "contents",
        choices:["Description", "Installation", "Usage", "Contribution", "Tests", "License", "Questions/Comments"],
    },
    //function to create the information saved on another filename
    ]).then(function(answers){
    console.log(answers)

        //line 93- shows what file is going to be made from the questions anaswered 
    const fileName = "log.txt";

    fs.writeFile(fileName, JSON.stringify(answers, null, "\t"), (err) =>
    err ? console.log(err) : console.log ("Information Saved")
        );
    })


//function to generate the fileName after all the questions have been asked:

// function generateFileName (response) {
//     return
// }

//function init to create the program after questions are answered:
// async function init () {
//         try {
//             const response = await promptUser ();

//             const writeFileAsync = generateFileName(response);

//             fs.writeFile ("index.html", `Information Content Saved`);
//             console.log("completed");
//         }catch (err) {
//             console.log(err);
//     }
// };

// //function call to start the program
// init ();
