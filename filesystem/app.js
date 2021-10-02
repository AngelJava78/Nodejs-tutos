
const fs = require('fs');
console.log("Hello from filesystem folder");
let filename = "person.json";
let newfilename = "person_new.json"
console.log('Start');
fs.readFile(filename, 'utf-8', (error, data) => {
    if (error) {
        console.log(`Error at open the filename: ${filename}`);
        console.log(`Error: ${error}`);
    } else {
        console.log(`Content of filename: ${filename}`);
        console.log(data);
    }
});

console.log('End');
try {
    fs.copyFileSync(filename, newfilename);
    console.log(`The filename ${filename} was copied as: ${newfilename}`);
} catch (error) {
    console.log(`Error: ${error}`);
}



let newText = "\nEnd of file";
fs.appendFileSync(newfilename, newText, (error) => {
    if (error) console.log(`Error ${error}`);
    else console.log(`New text was append to file: ${newfilename}`);
});

try {
    console.log('Start Read Syncronized file');
    let data = fs.readFileSync(newfilename, 'utf-8');
    console.log(data);
    console.log('End Read Syncronized file');

    fs.unlinkSync(newfilename);
    console.log(`The filename: ${newfilename} was deleted`);
    fs.renameSync(filename, newfilename);
    console.log(`Filename: ${filename} was renamed to: ${newfilename}`);
    fs.renameSync(newfilename, filename);
    console.log(`Filename: ${newfilename} was renamed to: ${filename}`);
} catch (error) {
    console.log(`Error: ${error}`);
}


