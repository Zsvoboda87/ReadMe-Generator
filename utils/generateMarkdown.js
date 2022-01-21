// TODO: Create a function that returns a license badge based on which license is passed in

const { Console } = require("console");

// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string

const renderLicenseSection = (license) =>  {
  switch (license) {
    case 'MIT': console.log("MIT");
      break;
    case 'APACHE_2.0': console.log("Apache 2.0")
      break;
    case 'GPL_3.0': console.log("GPL_3.0")
      break;
    case 'BSD3': console.log("BSD3")
      break;
    case 'None': console.log("none")
      break;  
  }
}

// TODO: Create a function to generate markdown for README

module.exports = data => {
  return `
  
# ${data.title}

![badmath](https://img.shields.io/badge/License-${data.license}-<green>)
## Description 


${data.description}

## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
${data.installation}

## Usage 
${data.userInfo}

## Contributing
${data.contribute}

## Tests
${data.test}

## Questions
https://github.com/${data.github}

Email Me @ ${data.email}

## License
${renderLicenseSection(data.license)}
`;
}
