const inquirer = require('inquirer');
const fs = require('fs');

const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username:',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter your GitHub Username!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address:',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter your email address!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of the project?',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter a project name!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description of the project:',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter a project description');
                  return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license does this project have',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter the installation instructions:',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter project installation requirements');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'Enter testing instructions:',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter a testing instructions');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'userInfo',
            message: 'Enter information about using the Repo:',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter user instructions for Repo or "none"');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'userInfo',
            message: 'Enter information about using the Repo:',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter user instructions for Repo or "none"');
                  return false;
                }
            }
        },
        {
          type: 'input',
          name: 'contribute',
          message: 'Enter information about contributing to the Repo:',
          validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter contributing instructions');
                return false;
              }
          }
      },
         
    ]);
};

questions().then(readMeData =>{
  console.log(readMeData)
})
;


// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
