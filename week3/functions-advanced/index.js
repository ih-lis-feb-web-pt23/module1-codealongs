// function declaration
function calculateSum(x, y) {
  return x + y;
}

// function expression
const greetPeople = function () {
  console.log('Hi everyone!');
};

greetPeople();

// arrow function
const simpleWelcome = () => {
  console.log('Welcome!');
};

const personalizedWelcome = name => {
  console.log(`Welcome to Ironhack, ${name}!`);
};
personalizedWelcome('Lúcia');

// one liner
// we don't need the curly brackets or the return
const multiplyValues = (x, y) => x * y;
console.log(multiplyValues(2, 2));

const sayHello = () => console.log('Hello!');

// callbacks
// function that can be passed as parameter for another function
const eatDinner = callback => {
  console.log('Eating dinner...');
  callback();
};

const eatDessert = () => {
  console.log('Eating my dessert!');
};
eatDinner(eatDessert);
