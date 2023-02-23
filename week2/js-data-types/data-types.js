// data types
// 1. Primitives
// 2. Non-primitives

// 6 primitives - numbers, strings, booleans, undefined, null, symbols
// Numbers

// integers or floating points
const age = 29; // integer
const price = 12.99; // floating point

// addition
console.log(1 + 2);

// subtraction
console.log(5 - 3);

// multiplication
console.log(4 * 10);

// division
console.log(10 / 2);

// exponentiation 2^2
console.log(2 ** 2);

// modulo or remainder
// retuns either 0 or 1
// if I split this equally, what remains?
console.log(5 % 2);

let sum = 2 + 2;
sum = sum + 3;
console.log(sum);

sum += 3;
console.log(sum);

sum -= 5;
sum *= 2;
sum /= 2;
sum **= 4;
sum %= 2;

// grouping operator
let mathOperations = 2 + 3 * 4 - 1;
console.log(mathOperations); // 13
// 3 * 4 = 12
let withGrouping = (2 + 3) * (4 - 1);
console.log(withGrouping); // 15

// Strings
// double quotes, single quotes or backticks
const firstName = 'Lúcia';
const year = '2023';

// ${}
// backticks create template literals which allow interpolation
const greeting = `Hello there, ${firstName}!`;
console.log(greeting);
const greetingWithoutBackticks = 'Hello there, ' + firstName + '!';
console.log(greetingWithoutBackticks);

// we can do any type of operation inside the ${}
console.log(`I'll be there in ${10 + 5} minutes`);

const text = `This
is a
multiline
text`;

const bootcamp = 'Web Dev';
console.log(bootcamp.length);

let greet = 'Hello';
greet += ' student!';
console.log(greet);

// accessing the character at 0 position
console.log(bootcamp.charAt(0)); // bootcamp[0]

// finding a substring
const ironhackMotto = 'Trust the process';
console.log(ironhackMotto.includes('process')); // true
console.log(ironhackMotto.includes('ironhack')); // false

// finding the position
console.log(ironhackMotto.indexOf('process')); // 10
console.log(ironhackMotto.indexOf('ironhack')); // -1 because it doesn't exist

// getting a substring
console.log(ironhackMotto.substring(0, 5)); // Trust
console.log(ironhackMotto.slice(-7)); // accepts negative numbers, helpful to start from the end

// startsWith and endsWith
console.log(ironhackMotto.startsWith('Trust')); // true
console.log(ironhackMotto.startsWith('trust')); // false
console.log(ironhackMotto.startsWith('T')); // true
console.log(ironhackMotto.endsWith('Process')); // false
console.log(ironhackMotto.endsWith('ocess')); // true

// repeat
console.log('la'.repeat(3));

// uppercase and lowercase
console.log(ironhackMotto.toUpperCase());
console.log(ironhackMotto.toLowerCase());

// boolean
const isLoggedIn = false;
const isDeveloper = true;
const isHappy = true;
const isTired = false;

// the OR operator ||
// returns true if any of the values is true
// returns false if all are false
console.log(isLoggedIn || isDeveloper); // true
console.log(isLoggedIn || isTired); // false

// the AND operator &&
// returns true if all are true
console.log(isDeveloper && isHappy); // true
console.log(isDeveloper && isLoggedIn); // false

// the NOT !
// negates the expression
console.log(!isDeveloper); // false
console.log(!isTired); // true

// undefined
let time;
console.log(time);

// null
let lastName = 'Duarte';
lastName = null; // clearing the variable
console.log(lastName);

// truthy and falsy values

// truthy values
// true - boolean
// any string that is not empty
// '0' zero in a string
// 'false' in a string
// any number except 0 (including negative numbers!)

// falsy values
// false - boolean
// '' - empty string
// 0 the number
// undefined and null
// NaN - not a number
if (NaN) {
  console.log('This is a truthy value');
} else {
  console.log('This is a falsy value');
}

console.log(5 * 'Hi!');
console.log(typeof NaN);

// Immutability
let myAge = 5;
myAge = 10;

// primitive data types can never be changed, their values will always be the same
