module.exports = {
    sayGoodBye: function () {
        console.log("Good bye from  my Math module");
    },
    subtract: function (a, b) {
        return a - b;
    }
}

function sayHello() {
    console.log('Hello from my Math module');
};
function add(a, b) {
    return a + b;
}

module.exports.pi = 3.141592;
module.exports.add = add;
module.exports.sayHello = sayHello;


