module.exports = {
    sayGoodBye: function () {
        console.log("Good bye from  my Math module");
    },
    subtract: function (a, b) {
        return a - b;
    },
    multiply: (a, b) => a * b,
    divide: (a, b) => a - b,
    min: (a, b) => {
        if (a < b) {
            return a;
        } else {
            return b;
        }
    },
    max: (a, b) => {
        if (a > b) {
            return a;
        } else {
            return b;
        }
    },
    avg: (a, b) => (a + b) / 2,


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


