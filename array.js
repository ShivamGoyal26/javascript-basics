const cars = ["volvo", "bmw", "audi"];

console.log(cars[0]);
console.log(cars[7]);

console.log(cars.length);

console.log(cars.shift()); // removes the first element and returns it
console.log(cars);

console.log(cars.unshift("toyota")); // add the element in the begining of an array and returns it
console.log(cars);

// map , filter, forEach, find, findIndex

// map returns us a new array

() => {}; // anonymus function

const add = () => {}; // named function

const numbers = [1, 2, 3, 4, 5];

const multipleOf2 = numbers.map((number, index) => {
  return number * 2 + index;
});

console.log(multipleOf2);

const arr = [1, 3, 4, 5, 7, 10];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i] * 2);
// }

// for each is just going to loop and returns nothing

arr.forEach((item) => {
  console.log(item);
});

const names = ["shivam", 2, "james", "king"];

names.forEach((name, index) => {
  console.log(name, index);
});

// find

const nameToBeFound = 2;
const nameFound = names.find((name) => {
  if (name === nameToBeFound) {
    return true;
  }
  return false;
});

const car = ["lambo", "nissan", "bugati", "rolls royce"];

const indexFound = car.findIndex((item) => {
  if (item === "nissan") return true;
  return false;
});

console.log("indexFound", indexFound);

const students = [
  {
    name: "shivam",
    age: 24,
  },
  {
    name: "james",
    age: 18,
  },
  {
    name: "king",
    age: 23,
  },
  {
    name: "David",
    age: 17,
  },
];

const filteredStudents = students.filter((student) => {
  if (student.age > 18) return true;
  return false;
});

console.log("filteredStudents", filteredStudents);

const temp = [27, 28, 30, 40, 42, 35, 30, 43, 12, 23];
let pos = temp.findLastIndex((x) => x > 40);

console.log(pos);
