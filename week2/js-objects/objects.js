// objects
// non primitive data type

// key value pair inside {}
const object = {
  key: 'value'
};

// objects group information together
const user = {
  username: 'luciaduarte',
  email: 'lucia@me.com',
  firstName: 'Lúcia',
  lastName: 'Duarte'
};

// they can hold any data type inside
const ironhackPortugal = {
  city: 'Lisbon',
  courses: ['Web Dev', 'Data', 'UXUI'],
  numberOfStudents: 60,
  isOpen: true
  // user: user
};

console.log(ironhackPortugal);

// accessing values inside the object
console.log(ironhackPortugal.numberOfStudents);
console.log(ironhackPortugal['city']);

// adding values to the object
ironhackPortugal.country = 'Portugal';
ironhackPortugal['numberOfClassrooms'] = 5;
// ironhackPortugal.user = user;
console.log(ironhackPortugal);

const myComputer = {
  brand: 'Apple',
  model: 'Macbook Air',
  year: 2015
};

// checking if property exists
console.log('brand' in myComputer); // true
console.log('owner' in myComputer); // false

// update values
myComputer.year = 2014;
myComputer['model'] = 'Macbook Pro';
console.log(myComputer);

// iterating over an object

// get all the keys
// returns an array with all the keys
const allKeys = Object.keys(ironhackPortugal);
console.log(allKeys);

// for in
for (let key in ironhackPortugal) {
  console.log(key); // all the keys
  console.log(ironhackPortugal[key]); // all the values
}

// get all the values
const allValues = Object.values(ironhackPortugal);
console.log(allValues);

// Organizing the public library
// 1. Create 2 book objects with title, author and category each
const book1 = {
  title: 'JavaScript for Dummies',
  author: 'Lúcia',
  category: 'Technical books'
};
const book2 = {
  title: '1984',
  author: 'George Orwell',
  category: 'Distopian Fiction'
};

// 2. Create 1 client object with fullName and id (number)
const client = {
  fullName: 'Lúcia Duarte',
  id: 5
};

// 3. Connect the books to the client.
// Hint: add a property to the client that can hold multiple books
client.rentedBooks = [book1, book2];

// 4. create an empty library array
// 4.1 add the client to it
const library = [];

library.push(client);

// 5. Create a new book3, add it to the client but make sure the whole library gets updated
// Hint: don't forget your client is now inside an array!
const book3 = {
  title: 'Harry Potter',
  author: 'J.K. Rowling',
  category: 'Fantasy'
};

library[0].rentedBooks.push(book3);
console.log(library[0]);

// 6. Iterate over the client books and print:
// XXXXX's books:
// - YYYYYY, written by ZZZZ
// - YYYYYY, written by ZZZZ

for (let i = 0; i < library.length; i++) {
  console.log(`${library[i].fullName}'s books:`);

  for (let book of library[i].rentedBooks) {
    console.log(`- ${book.title}, written by ${book.author}`);
  }
}
