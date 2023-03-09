// recap data types
// primitives: boolean, string, number, undefined, null, symbol, bigint
// non-primitives (or reference): object, (we said arrays but they are objects)
const myArray = ['Lisbon', 123, true];
console.log(typeof myArray);
console.log(Array.isArray(myArray)); // true

// primitives
// if we assign two different variables with the same primitive value, they will be the same
let price1 = 10.99;
let price2 = 10.99;
console.log(price1 === price2); // true

let price3 = price1; // copying the value
console.log(price1 === price3); // true

// if we reassign price1, price3 will still hold the first value
price1 = 5.99;
console.log(price3); // 10.99

// when primitives are copied, they are copied by the value itself and that never changes

// non primitives (reference)
// if we assign two different variables to the same non primitive value, they won't be the same
// because non primitives don't have a specific value, the variables hold the reference to them
// in memory and not the value ifself
const coursesArray1 = ['WebDev', 'Data', 'UXUI'];
const coursesArray2 = ['WebDev', 'Data', 'UXUI'];
console.log(coursesArray1 === coursesArray2); // false

const book1 = {
  title: '1984'
};
const book2 = {
  title: '1984'
};
console.log(book1 === book2); // false

const book3 = book1; // we are copying the reference
console.log(book3 === book1); // true

// if we change book1, what happens to book3?
// both change because the variables hold reference to the same object
book1.title = 'Harry Potter';
console.log(book3);

// how can we copy non primitive values then?

const movie1 = {
  title: 'Titanic',
  cast: [
    { character: 'Rose', playedBy: 'Kate Winslet' },
    { character: 'Jack', playedBy: 'DiCaprio' }
  ]
};

const movie2 = Object.assign({}, movie1); // shallow copy?
movie1.title = 'Harry Potter';
console.log(movie2); // title did not change

movie1.cast = [
  { character: 'Harry', playedBy: 'Daniel' },
  { character: 'Hermione', playedBy: 'Emma' }
];
console.log(movie2.cast);

// spread operator
const movie3 = { ...movie1 }; // shallow copy, nested properties will still hold the reference
console.log(movie3);
movie1.title = 'Titanic';
console.log(movie3);
movie1.cast[0] = { character: 'Rose', playedBy: 'Kate' };
console.log(movie3);

const students = [
  ['Lucia', 'Henrique', 'Diogo'],
  ['Harieta', 'Pedro', 'Simão']
];
const people = JSON.parse(JSON.stringify(students)); // deep copy
students[0].push('Koray');
console.log(people);

const cities = ['Lisbon', 'Berlin', 'Madrid'];
const cities2 = [...cities]; // spreading an array, shallow copy
console.log(cities2);
cities.push('Barcelona');
console.log(cities2);

// mutability
// making an change in the original element when manipulating it
// should try to avoid changing the original value

const animals = ['dog', 'cat', 'horse'];
const scaryAnimals = ['spider', 'snake'];
const allAnimals = animals.concat(scaryAnimals);
console.log(allAnimals);

// const firstOne = animals[0]

// spread
const evenMoreAnimals = [
  'elephant',
  ...animals,
  'bear',
  ...scaryAnimals,
  'mouse'
];
console.log(evenMoreAnimals);

// slice
// returns just part of the array
const firstThreeAnimals = evenMoreAnimals.slice(0, 3);
console.log(firstThreeAnimals);

const user = {
  username: 'luciaduarte',
  email: 'lucia@me.com'
};
const userWithPassword = { ...user, password: '1234' };
console.log(userWithPassword);
