// Javascript is single-threaded: files run line by line from top to bottom
// Synchronous: only one thing can happen at the time

// Synchronicity
// 1. I'm hungry
// 2. My house is mess
// 3. I have a party I want to go

// in a sync world
// 1. Cook food
// 2. Eat food
// 3. Clean my house
// 4. Arrive late at the party

// in a async world where things can happen at the same time
// 1. Order some food
// 2. Clean my house
// 3. Eat the food
// 4. Leave for the party

// setTimeout
// sets a timer and executes the code once the timer is over
// takes a function as the first argument - callback!
// and the timer in ms as the second argument
setTimeout(() => {
  console.log('Hello after 3 seconds');
}, 3000);

console.log('Hi from before the timeout');

const timeoutId = setTimeout(() => {
  console.log('I will cancel this callback');
}, 2000);

setTimeout(() => {
  clearTimeout(timeoutId);
  console.log('Cleared the previous timeout');
}, 1500);

// setInterval
// similar to the setTimeout but executes the code multiple times at an interval
// we need a stopping condition!
// setInterval(() => {
//   console.log('Hi from the interval!');
// }, 2000);

let i = 0;
const intervalId = setInterval(() => {
  i++;
  console.log(`${i} seconds from the beginning of this!`);

  if (i >= 10) {
    clearInterval(intervalId);
  }
}, 1000);

// Exercise: Let's create a countdowm to enter the new year! From 10 to Happy New Year!
let countdown = 10;
const intervalCountdownId = setInterval(() => {
  // console.log(`${countdown}`);
  console.log(countdown);
  countdown--;

  if (countdown < 0) {
    clearInterval(intervalCountdownId);
    console.log('Happy New Year!');
  }
}, 1000);
