const fs = require('fs');
console.log("Filesystem ");
let filename = 'test.txt';
let message = 'Welcome to Nodejs';

fs.appendFile(filename, message, function(error){
    if(error){
        console.log('Error on create the file: ' + filename);
    }
});
