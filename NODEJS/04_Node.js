/*          MODULES

breaking things into  modules
you can split your files 
example- for this function add

function add(a,b){
    return a+b;
}
console.log(add(2,5));

making a separate file named as => math.js

thus to use the function created in math.js you must have to require it
we must add "./" which means - current directory 
otherwise the node will start searching for them in their own packaages


*/

// const math = require("./04_math.js")
// console.log(math); // this will give you an empty object we must export the function add(math.js)
                  // in order to use it
                

// console.log(math(2,5));

// console.log(math.add(2,4));
// console.log(math.sub(9,7));


// console.log(math.addition(2,4));
// console.log(math.subtraction(9,7));

// we can also de-structure 
// const {add, sub} = require("./04_math"); // make sure you are {Add, sub} are same as u used in math.exports

// console.log(add(2,3));


// for exports.add1(a,b) => a+b;

// const math = require('./04_math');

const { add1, sub1} = require('./04_math')

console.log(add1(4,3));
