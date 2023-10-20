const fs = require('fs');

function readTextFile(filePath, callback) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      
      callback(err, null);
      return;
    }
    
    callback(null, data);
  });
}

const filePath = 'C:\Users\Student\Desktop\Book1.txt';

readTextFile(filePath, (err, content) => {
  if (err) {
    console.error(`Error reading file: ${err.message}`);
    return;
  }
  console.log(`File content:\n${content}`);
});