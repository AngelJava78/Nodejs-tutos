const math = require('./math-modules.js');

math.sayHello();
console.log(`Pi = ${math.pi}`);
let number1 = 5;
let number2 = 3;
console.log(`Sum of: ${number1} and ${number2} = ${math.add(number1, number2)}`);
console.log(`Subtract of: ${number1} and ${number2} = ${math.subtract(number1, number2)}`);
console.log(`Multiply of: ${number1} and ${number2} = ${math.multiply(number1, number2)}`);
console.log(`Division of: ${number1} and ${number2} = ${math.divide(number1, number2)}`);
console.log(`Min of: ${number1} and ${number2} = ${math.min(number1, number2)}`);
console.log(`Max of: ${number1} and ${number2} = ${math.min(number1, number2)}`);
console.log(`Average of: ${number1} and ${number2}: ${math.avg(number1, number2)}`);
setTimeout(() => {
    console.log("Wait for three seconds");
}, 3000);
math.sayGoodBye();