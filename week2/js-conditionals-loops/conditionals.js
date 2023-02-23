// equality operators

// double equals is a loose equality check
// values get converted to the same data type

// triple equals is a strict equality check
// no type conversion is done
const number = 10;
console.log(number == '10'); // true
console.log(number === '10'); // false
console.log(true == 1); // true

// if else
const city = 'Lisbon';
const isHappy = true;
if (isHappy === true) {
  console.log('This block will run if the condition is true');
} else {
  console.log('This block will run if the condition is false');
}

// else if
const yearsOfExperience = 3;
if (yearsOfExperience <= 3) {
  if (yearsOfExperience === 3) {
    console.log('You are a junior but you are almost a mid dev!');
  } else {
    console.log('You are a junior software developer');
  }
} else if (yearsOfExperience > 3 && yearsOfExperience <= 5) {
  console.log('You are a mid software developer');
} else if (yearsOfExperience > 5) {
  console.log('You are a senior software developer');
} else {
  console.log('Are you even a developer?');
}

// Hogwarts Houses
const character = 'Draco Malfoy';
let house;

if (
  character === 'Dumbledore' ||
  character === 'Harry Potter' ||
  character === 'Hermione Granger'
) {
  house = 'Gryffindor';
} else if (
  character === 'Cedric Diggory' ||
  character === 'Nymphadora Tonks' ||
  character === 'Teddy Lupin'
) {
  house = 'Hufflepuf';
} else if (
  character === 'Luna Lovegood' ||
  character === 'Cho Chang' ||
  character === 'Fillus Flitwick'
) {
  house = 'Ravenclaw';
} else if (
  character === 'Severus Snape' ||
  character === 'Draco Malfoy' ||
  character === 'Dolores Umbridge'
) {
  house = 'Slytherin';
} else {
  house = 'unknown';
}

console.log(`This character is from ${house} house`);

// Switch statements

switch (character) {
  case 'Dumbledore':
  case 'Harry Potter':
  case 'Hermione Granger':
    house = 'Gryffindor';
    break;
  case 'Cedric Diggory':
  case 'Nymphadora Tonks':
  case 'Teddy Lupin':
    house = 'Hufflepuf';
    break;
  case 'Luna Lovegood':
  case 'Cho Chang':
  case 'Fillius Flitwick':
    house = 'Ravenclaw';
    break;
  case 'Severus Snape':
  case 'Draco Malfoy':
  case 'Dolores Umbridge':
    house = 'Slytherin';
    break;
  default:
    house = 'unknown';
}
