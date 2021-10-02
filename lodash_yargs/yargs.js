const argv = require('yargs').argv;
console.log(argv);
if (argv.User === "Angel") {
    console.log("Hello: " + argv.User);
} else {
    console.log("Incorrect username");
}