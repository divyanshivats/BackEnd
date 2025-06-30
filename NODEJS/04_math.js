function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

// module.exports = add;

// module.exports = sub; will over-write the function add
// thus use an object

// module.exports = {
//     add,
//     sub,
// }

// wee can also rename them 
// module.exports = {
//     addition: add,
//     subtraction: sub,
// }

// u can also use arrow function

exports.add1 = (a,b) => a+b;
exports.sub2 = (a,b) => a-b;