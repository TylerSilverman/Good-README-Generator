const inquirer = require('inquirer');
const fs = require('fs');
const util = require ('util');
 

    inquirer.prompt([
    {
        // #3table of contents
        type: "list",
        message:"Table of Contents?",
        name: "contents",
        choices:["Description", "Installation", "Usage", "Contribution", "Tests", "License", "Questions/Comments"],
    },
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
        //#4installation of project
        type: "checkbox",
        message:"What did you use to install the project?",
        name: "installation",
        choices: ["javascript", "VS Code", "just installed all on its own"],
    },
    {
        //#5usage for the project- Done
        type: "input",
        message:"What usage did you use for the project?",
        name: "Usage used:",
    },
    {
        //#6any liceneses used for project - Done
        type: "checkbox",
        message:"What licenses did you install?",
        name: "licenses used:",
        choices:["MIT", "APACHE 2.0", "GitHub", "GPL 3.0", "None"],
    },
    {
        //#7any contributions used for project
        type: "checkbox",
        message:"Did you use any contributions to create the project?",
        name: "contributed to the project:",
        choices: ["Yes", "No"],
    },
    {
        //#8 types of package names 
        type: "checkbox",
        message:"What type of package names did you use for the project?",
        name: "Package Names used:",
        choices:["APM", "Bower", "CRAN/METACRAN", "PyPI"],
    },
    {
        //#9If you have Questions leave contact information- Done
        type: "input",
        message:"If you have questions, please leave your contact information and I will reach out to you.",
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
    //function to create the information saved on another filename
    ]).then((data)=>{
        
    const filename = "index.html";

    fs.writeFile(filename, JSON.stringify(data, null, "\t"), (err) =>
    err ? console.log(err) : console.log ("Information Saved")
        );
    })


//function to generate the fileName after all the questions have been asked:

function generateFileName (response) {
    return

    //title
    // ${reponse.title}

    // //description
    // ${response.description}

    // //installation 
    // ${response.installation}

    // //usage
    // ${response.usage}

    // //contribution 
    // ${response.contribution}

    // //test
    // ${response.test}

    // //questions and comments 
    // ${response.questions}

    // //license
    // ${response.license}


    //function init to create the program after questions are answered:
    async function init () {
        try {
            const response = await promptStart ();

            const fileName = generateFileName(response);

            await fs.writeFile ("index.html", index.html);
            console.log("completed");
        }catch (err) {
            console.log(err);
        }
    };

    //function call to start the program
    init ();
};



//function to check if the password is correct or not but can ont use both functions at the same time. 
// .then(function(answers){
//     answers.confirm === answers.password
//     ? console.log("Access Granted")
//     : console.log("Did you forget your password?");
//      console.log(answers)
// })
