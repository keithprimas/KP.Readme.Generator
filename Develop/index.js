const inquirer = require('inquirer');
const generateREADME = require('./generateREADME');

// TODO: Create an array of questions for user input
async function main() {
    const userInput = await inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Enter your project title:',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a description:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Enter the installation instructions',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter the usage information',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Enter the contribution guidelines',
      },
      {
        type: 'input',
        name: 'test',
        message: 'Enter the test instructions',
      },
    
    ]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function main() {}

// Function call to initialize app
main();
