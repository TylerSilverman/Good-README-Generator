function generateFile (answers) {
    return  `

## Table of Contents:
## Description
##Installation
## Usage
## Contributor
## Test 
## License 
## Questions

# Table of Contents:
${answers.Contents}

## ReadMe Title: 
${answers.Title}
    
## Description ReadMe:
${answers.Description}

## Installation 
${answers.Installation}

## Usage that were used:
${answers.Usage}

## Contributors: Tyler Silverman /  
${answers.Contributor}

## Test Used:
${answers.Test}

## Questions and Comments:
${answers.Questions}

## A least of Licenses:
${answers.Licenses}

`;
}

module.exports = generateFile;