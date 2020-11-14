function generateFile (answers) {
    return  `

## Table of Contents:
${answers.Contents}

## Title: 
${answers.Title}
    
## Description
${answers.Description}

## Installation 
${answers.Installation}

## Usage
${answers.Usage}

## Contributor
${answers.Contributor}

## Test
${answers.Test}

## Questions 
${answers.Questions}

## License
${answers.Licenses}

`;
}

module.exports = generateFile;