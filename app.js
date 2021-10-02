const os = require('os');

//let cpu = os.cpus();
let hostname = os.hostname();
let version = os.version();
let homedir = os.homedir();
let platform = os.platform();
console.log("Hello world!");

//console.log("CPUs:")
//console.log(cpu);
console.log("Hostname: " + hostname );
console.log("Platform: " + platform);
//console.log(hostname);
console.log("Version: " + version);
//console.log(version);
console.log("Home directory:" + homedir);
//console.log(homedir);