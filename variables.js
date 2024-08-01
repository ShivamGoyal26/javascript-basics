// var , let , const

// var is global scope and var is hoisted / var can be un-initialize
// let is blocked scope and let is hoisted but it is in temporal dead zone / let can be un-initialize
// const is blocked scope and let is hoisted but it is in temporal dead zone / const must be initialize

// hoisted means it is concept in the js where all varaiables declearation moved to the top of the file

// access the variable A
console.log(a);
// declarations
var a;
// define / initialization
a = 15;

console.log("After initialization", a);

// console.log(b); // this will throw error
let b;
console.log("value of b", b);
b = 34;

// same with the const

// console.log("name", name);

const name = "shivam"; // immutable // which cannot be changed

let age = 45;
age = 18;

console.log("Age", age);
console.log("name", name);
