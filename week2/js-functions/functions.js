// 2 step process

// 1. declare the function
// we first create the function
// creating the function DOES NOT run the code inside

function sayHelloWorld() {
  return 'Hello World';
}

// 2. Calling the function
// sayHelloWorld(); // to call the function we pass its name and ()
const greeting = sayHelloWorld();
console.log(greeting);
console.log(sayHelloWorld());

// our functions can receive parameters, which are variables!
function sayHello(name) {
  return `Hello, ${name}!`;
}

console.log(sayHello('Lúcia'));
const names = ['Lúcia', 'Marcelo', 'Diogo', 'Simão'];

for (let element of names) {
  console.log(sayHello(element));
}

function sum(firstValue, secondValue) {
  return firstValue + secondValue;
}
console.log(sum(5, 10));

// create a function called greetingPeople that receives a name and a city
// and returns: Hello, my name is XXXX and I'm from YYYY.
function greetingPeople(name, city, age) {
  return `Hello, my name is ${name}, I'm ${age} years old and I'm from ${city}.`;
}

console.log(greetingPeople('Lúcia', 'Lisbon', 29));

// returning values
// anything below our return will not run
function multiplication(first, second) {
  return first * second;
  console.log('Done');
}
console.log(multiplication(2, 5));

function isEvenOrOdd(number) {
  if (number % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
}
