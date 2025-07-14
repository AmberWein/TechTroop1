const fs = require('fs');
const path = require('path');

function readFileWithErrorHandling(filePath, callback) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        return callback(`File not found: ${filePath}`);
      } else if (err.code === 'EISDIR') {
        return callback(`Path is a directory, not a file: ${filePath}`);
      } else {
        return callback(`An unexpected error occurred: ${err.message}`);
      }
    }

    return callback(`File read successfully. Size: ${data.length} bytes`);
  });
}