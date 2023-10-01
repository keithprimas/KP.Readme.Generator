const inquirer = require('inquirer');
const generateREADME = require('./generateREADME');
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
  // Add the chosen license badge and notice

  ## Questions
  GitHub: [GitHub Profile](https://github.com/${userInput.githubUsername})
  Email: ${userInput.email}
  `;

  // Write the content to a README.md file
  // Use file system operations like fs.writeFileSync() to create the README file
}

module.exports = generateREADME;

