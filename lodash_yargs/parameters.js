let command = process.argv;
console.log(command);

var firstCommand = process.argv[2];
var secondCommand = process.argv[3];
if (firstCommand === "User") {
    if (secondCommand === "Angel") {
        console.log("Wellcome Angel");
    } else {
        console.log("The user doesn't exists");
    }
} else {
    console.log("The first parameter should be User");
}