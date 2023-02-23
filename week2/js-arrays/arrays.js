// Non primitives
// arrays

// can be declared with values
const names = ['Lúcia', 'Diogo', 'Harieta', 'Marcelo'];
// or empty
const emptyArray = [];
// can have mixed data types
const mixedArray = [true, 'Lisbon', 2023];

console.log(names[1]);

console.log(mixedArray.length);

// push
// adds element into an array in the last position
names.push('Henrique');

console.log(names);

// unshift
// adds a new element in the beginning
names.unshift('Cátia');
console.log(names);

// shift
// removes the first element
names.shift();
console.log(names);

// pop
// removes the last element
names.pop();
console.log(names);

// splice
// removing from the middle
// first argument is the starting point
// the second is how many elements we want to remove
names.splice(1, 1);
console.log(names);

// iterating arrays

// for loop
for (let i = 0; i < names.length; i++) {
  console.log(`Welcome to Ironhack, ${names[i]}!`);
}

// for of
for (let element of names) {
  console.log(`Hi, my name is ${element}`);
}

// for each
names.forEach(name => {
  console.log(`${name} is my name.`);
});

// split
const reallyLongText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
const wordsArray = reallyLongText.split(' ');
const phrasesArray = reallyLongText.split(',');

for (let word of wordsArray) {
  console.log(word);
}
for (let phrase of phrasesArray) {
  console.log(phrase);
}
