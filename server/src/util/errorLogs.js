const fs = require('fs');

async function logErrorToFile(error, category = 'General') {
  const logMessage = `${new Date().toISOString()} - Status: ${error.code}, ${error.file}, function ${error.function}: ${error.message}\n`;

 await fs.appendFile('errorlogs.txt', logMessage, (err) => {
    if (err) {
      console.error('Error writing to error log:', err);
    }
  });
}

module.exports = { 
  logErrorToFile
};
