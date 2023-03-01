// for each
// iterates over an array
const originalArray = ['Lúcia', 'Harieta', 'Koray', 'Henrique'];

// uses an anonymous function
// first parameter is always the single element its iterating
// second parameter is the index of the iteration
originalArray.forEach((element, index) => {
  console.log(`${index}: ${element}`);
});

// map, filter and reduce
// create a new array and don't change the original one

// map
// transforms the array into a new one
const upperCasedArray = originalArray.map(element => {
  return element.toUpperCase();
});
console.log(upperCasedArray);
console.log(originalArray);
// one liner map
const upperOneArray = originalArray.map(element => element.toUpperCase());

// filter
// returns an array with all the elements that match the filtering condition
const filteredNames = originalArray.filter(element => {
  return element.length > 5;
});
console.log(filteredNames);
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(number => {
  return number % 2 === 0;
});
console.log(evenNumbers);

const places = [
  {
    title: "Awesome Suite 20' away from la Rambla",
    price: 200,
    type: 'Private Room',
    pool: true,
    garage: false
  },
  {
    title: 'Private apartment',
    price: 190,
    type: 'Entire Place',
    pool: true,
    garage: true
  },
  {
    title: 'Apartment with awesome views',
    price: 400,
    type: 'Entire Place',
    pool: false,
    garage: false
  },
  {
    title: 'Apartment in la Rambla',
    price: 150,
    type: 'Private Room',
    pool: false,
    garage: true
  },
  {
    title: 'Comfortable place in Barcelona´s center',
    price: 390,
    type: 'Entire place',
    pool: true,
    garage: true
  },
  {
    title: 'Room near Sagrada Familia',
    price: 170,
    type: 'Private Room',
    pool: false,
    garage: false
  },
  {
    title: 'Great house next to Camp Nou',
    price: 140,
    type: 'Entire place',
    pool: true,
    garage: true
  },
  {
    title: 'New apartment with 2 beds',
    price: 2000,
    type: 'Entire place',
    pool: false,
    garage: true
  },
  {
    title: 'Awesome Suite',
    price: 230,
    type: 'Private Room',
    pool: false,
    garage: false
  },
  {
    title: "Apartment 10' from la Rambla",
    price: 930,
    type: 'Entire place',
    pool: true,
    garage: true
  }
];

// get an array of places with a pool where the price is below 300
const cheapWithPool = places.filter(place => {
  // return place.pool && place.price < 300;
  if (place.pool === true && place.price < 300) {
    return true;
  } else {
    return false;
  }
});
console.log(cheapWithPool.length);
const justNames = cheapWithPool.map(place => place.title);
console.log(justNames);

// reduce
// turns an array into one single element
const sumOfNumbers = numbers.reduce((accumulator, currentElement) => {
  console.log(
    `The accumulator is ${accumulator} and the currentElement is ${currentElement}`
  );
  return accumulator + currentElement;
}, 0);
console.log(sumOfNumbers);
const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum);

const koray = originalArray.find(el => {
  return el === 'Koray';
});
console.log(koray);

const korayIndex = originalArray.findIndex(el => el === 'Koray');
console.log(korayIndex);

const someLucia = originalArray.some(el => el === 'Lúcia');
console.log(someLucia);
const someMiguel = originalArray.some(el => el === 'Miguel');
console.log(someMiguel);

const allBigNames = originalArray.every(el => el.length > 5);
console.log(allBigNames);

// reverse
// changes the original array
const reversedNames = originalArray.reverse();
console.log(reversedNames);
console.log(originalArray);

// exercise
const students = [
  {
    fullName: 'Tony Parker',
    firstProject: 80,
    secondProject: 75,
    finalExam: 90
  },
  {
    fullName: 'Marc Barchini',
    firstProject: 84,
    secondProject: 65,
    finalExam: 65
  },
  {
    fullName: 'Claudia Lopez',
    firstProject: 45,
    secondProject: 95,
    finalExam: 99
  },
  {
    fullName: 'Alvaro Briattore',
    firstProject: 82,
    secondProject: 92,
    finalExam: 70
  },
  {
    fullName: 'Isabel Ortega',
    firstProject: 90,
    secondProject: 32,
    finalExam: 85
  },
  {
    fullName: 'Francisco Martinez',
    firstProject: 90,
    secondProject: 55,
    finalExam: 78
  },
  {
    fullName: 'Jorge Carrillo',
    firstProject: 83,
    secondProject: 77,
    finalExam: 90
  },
  {
    fullName: 'Miguel López',
    firstProject: 80,
    secondProject: 75,
    finalExam: 75
  },
  {
    fullName: 'Carolina Perez',
    firstProject: 85,
    secondProject: 72,
    finalExam: 67
  },
  {
    fullName: 'Ruben Pardo',
    firstProject: 89,
    secondProject: 72,
    finalExam: 65
  }
];

// grade this students based on two projects (40% of the final grade)
// and their final exam (60% of final grade)
// return and array with just name and final grade
// [{name: 'Lucia Duarte', finalGrade: 80},...]
// map

const finalGrades = students.map(student => {
  const projectsAvg = (student.firstProject + student.secondProject) / 2;
  const final = student.finalExam * 0.6 + projectsAvg * 0.4;
  return {
    name: student.fullName,
    finalGrade: Math.round(final) // Math.ceil, Math.floor
  };
});
console.log(finalGrades);

const product = {
  name: 'AmazonBasics Apple Certified Lightning to USB Cable',
  price: 7.99,
  manufacturer: 'Amazon',
  reviews: [
    {
      user: 'Pavel Nedved',
      comments: 'It was really useful, strongly recommended',
      rate: 4
    },
    { user: 'Alvaro Trezeguet', comments: 'It lasted 2 days', rate: 1 },
    { user: 'David Recoba', comments: 'Awesome', rate: 5 },
    { user: 'Jose Romero', comments: 'Good value for money', rate: 4 },
    { user: 'Antonio Cano', comments: 'It broked really fast', rate: 2 }
  ]
};

// get the average rating for this product
// reduce
const avgRate =
  product.reviews.reduce((acc, curr) => {
    return acc + curr.rate;
  }, 0) / product.reviews.length;

console.log(avgRate);

const randomNumbers = [25, 24, 99, 68, 1, 10, 122, 63, 6];

// sort
// mutates the original array
// did not sort the way we expected to
randomNumbers.sort();

// ordering in ascending
randomNumbers.sort((a, b) => a - b);
console.log(randomNumbers);

// sort receives a comparing function
function compare(a, b) {
  if (a - b > 0) {
    // a is greater than b
    // switch b to be before a
  }
  if (a - b < 0) {
    // b - a > 0
    // b is greater than a
    // switch a to the before b
  }
  if (a - b === 0) {
    // they are the same, keep in same place
  }
}

// sort in descending
randomNumbers.sort((a, b) => b - a);
console.log(randomNumbers);
