// arrow functions (most commonly used these days)

const add1 = () => {
  console.log("This is the add1 function");
};
add1();

// functions declare with function keyword

function add2() {
  console.log("This is the add2 function");
}
add2();

// examples with arguments/parameters
// parameters are those which we pass to function

const printName = (firstName, lastName) => {
  console.log(firstName, lastName);
};
printName("shivam", "goyal");

// Rest Paramters

const rest = (...params) => {
  console.log(params);
};

rest("74", 274, "shivam", "hello");
