const fs = require('fs'); // Import the 'fs' module for file operations

// Define the writeREADMEToFile function
function writeREADMEToFile(content) {
  try {
    fs.writeFileSync('README.md', content); // Write the content to a README.md file
    console.log('README.md has been successfully written.');
  } catch (err) {
    console.error('Error writing README.md:', err);
  }
}

// Export the writeREADMEToFile function
module.exports = writeREADMEToFile;
