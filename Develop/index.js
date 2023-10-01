const fs = require('fs'); // Import the 'fs' module for file operations
const inquirer = require('inquirer');
const writeREADMEToFile = require('./writeREADMEToFile'); // Import the writeREADMEToFile function

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
      name: 'githubUsername',
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter the installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter the usage information:',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter the contribution guidelines:',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Enter the test instructions:',
    },
    {
      type: 'list', 
      name: 'license',
      message: 'Choose a license:',
      choices: ['MIT', 'Apache 2.0', 'GNU GPL 3.0', 'Other'],
    },
  ]);

  // Generate the README using the user input
  const readmeContent = generateREADME(userInput);

  // Write the README content to a file
  writeREADMEToFile(readmeContent); // Call the writeREADMEToFile function with the content
}

// Function call to initialize app
main();

// generateREADME.js

function generateREADME(userInput) {
   // Capture the chosen license from user input
   const chosenLicense = userInput.license;
   const licenseBadges = {
    MIT: 'https://img.shields.io/badge/license-MIT-blue.svg',
    Apache: 'https://img.shields.io/badge/license-Apache%202.0-blue.svg',
    GNU: 'https://www.gnu.org/graphics/gplv3-with-text-136x68.png',
    Other: ""
  };
    // Get the badge URL for the chosen license
  const licenseBadgeURL = licenseBadges[chosenLicense] || '';
  // Construct the README content based on userInput
  const readmeContent = `
  # ${userInput.title}

  ## Description
  ${userInput.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

  ## Installation
  ${userInput.installation}

  ## Usage
  ${userInput.usage}

  ## Contributing
  ${userInput.contributing}

  ## Test
  ${userInput.test}

  ## License
  [![License](${licenseBadgeURL})](#license)
  ${chosenLicense}

  ## Questions
  GitHub: [GitHub Profile](https://github.com/${userInput.githubUsername})
  Email: ${userInput.email}
  `;

  return readmeContent;

  // Write the content to a README.md file
  // Use file system operations like fs.writeFileSync() to create the README file

  fs.writeFileSync('README.md', readmeContent);
}

module.exports = generateREADME;
