const a = "shivam";

console.log("length", a.length);
console.log(a.charAt(1));
console.log(a.toUpperCase());
console.log(a.toLowerCase());

const userName = "     shivam goyal   ";

console.log(userName.trim());
console.log(userName.trimStart());
console.log(userName.trimEnd());

const fullName = "I am John Cena";
let newName = fullName.substring(4, 8);
console.log(newName);

let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
console.log(part);
