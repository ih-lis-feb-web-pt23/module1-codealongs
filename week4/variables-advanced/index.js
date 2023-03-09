// scope
// global scope
const message = 'This is the global scope and can be accessed from anywhere!';

const getMessage = () => {
  console.log(message);
};
getMessage();

// function/local scope
function sayHello() {
  const hello =
    'This is in local scope and can only be accessed inside this function!';

  console.log(hello); // here I have access
}

// console.log(hello); // here I don't

// block level scope
for (let i = 0; i < 20; i++) {
  console.log(i); // only have access to the i varible inside this block
}
// console.log(i); // no access here

// hoisting
// Javascript feature where the variables and function declarations
// are moved to the top of their scope

// JS knows the variable exists but does not let you use it
// console.log(firstName); // variable is not defined
// console.log(lastName); // cannot access variable before initialization
const lastName = 'Duarte';

// functions can be used before the declaration
sayHi();

function sayHi() {
  console.log('hi!');
}

// sayGoodbye();

const sayGoodbye = () => {
  console.log('goodbye');
};

// shadowing
// should be avoided, giving the same variable name to diferent scoped variables
const bootcamp = 'Web dev';

function printBootcamp() {
  const bootcamp = 'Data';
  console.log(bootcamp);
}
printBootcamp();
console.log(bootcamp);

// const lastName = 'Ribeiro';
