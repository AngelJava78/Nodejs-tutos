const math = require('./math-modules.js');

math.sayHello();
console.log(`Pi = ${math.pi}`);
let number1 = 5;
let number2 = 3;
console.log(`Sum of: ${number1} and ${number2} = ${math.add(5,3)}`);
console.log(`Subtract of: ${number1} and ${number2} = ${math.subtract(5,3)}`);
math.sayGoodBye();