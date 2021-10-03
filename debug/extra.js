let message = "Hello from extra module and sayHello method";

function sayHello() {
    debugger;
    console.log(message);
}

module.exports = {
    sayHello: sayHello
};
