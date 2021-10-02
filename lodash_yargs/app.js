const _ = require('lodash');

let x = { "firstname": "Angel" };
let y = { "lastname": "Javier" };
let z = [
    { firstname: "Zuly", lastname: "Hernández", age: 44 },
    { firstname: "Rubi", lastname: "Javier", age: 19 }
];

var result = _.assign(x, y);
console.log(result);

var i = 0;
_.times(3, () => {
    i++;
    console.log(`i: ${i}`);
});

console.log("Find Zuly in variable z");
result = _.find(z, { firstname: "Zuly" });
console.log(result);

console.log("Find Perla in variable z");
result = _.find(z, { firstname: "Perla" });
console.log(result);

console.log("Find Zuly and age 44 in variable z");
result = _.find(z, { firstname: "Zuly", age: 44 });
console.log(result);

console.log("Find Zuly and age 40 in variable z");
result = _.find(z, { firstname: "Zuly", age: 40 });
console.log(result);