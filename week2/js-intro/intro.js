// printing something in the terminal
/* 
Block comment
here
and now we can 
write in
multiple lines
*/
console.log('Hello World!');

// variable declaration
let book;
console.log(book); // value is undefined
// variable assignment
book = 'Harry Potter';
console.log(book); // value is Harry Potter
let film = 'Titanic';

// reassigning values (only possible with let)
let age = 29;
console.log(age);
age = 30;
console.log(age);

// const variables need a value from the start
const bootcamp = 'Web Dev';

// not possible to reassign a value to const
bootcamp = 'Data';

// naming variables
// 1. camelCase
// 2. should be meaningful
// 3. variables are case sensitive: color vs Color
// 4. some words are reserved: let, const, function
// 5. Should be concise
// ✅
let firstName = 'Lúcia';
let email;
let username;

// ❌
let x;
let whyNot;
let variable1;

let isDeveloper = true;
let isMyUserASoftwareDeveloper = true;
