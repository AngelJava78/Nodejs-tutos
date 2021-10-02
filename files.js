const os = require('os');
const fs = require('fs');

console.log("Filesystem ");
let filename = 'test.txt';
let message = 'Welcome to Nodejs';
let cpu = os.cpus();

fs.appendFile(filename, message, function (error) {
    if (error) {
        console.log('Error on create the file: ' + filename);
    }
});

fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(data)
});


fs.unlink(filename, function (err) {
    if (err) throw err;
    console.log('File: ' + filename + ' deleted!');
});


filename = 'cpu.txt';
let cpu_string = JSON.stringify(cpu);
message = `CPU Information: \n + ${cpu_string}`;
fs.appendFile(filename, message, function (error) {
    if (error) {
        console.log('Error on create the file: ' + filename);
    }
});
fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(data)
});


fs.unlink(filename, function (err) {
    if (err) throw err;
    console.log('File: ' + filename + ' deleted!');
});
