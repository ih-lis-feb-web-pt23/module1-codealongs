// while
/* let i = 1;
while (i <= 50) {
  console.log(i);
  i++; // incrementing by one
} */

// do while
// do {
//   console.log(i);
//   i++;
// } while (i < 20);

// Create a while loop that prints from 1 to 30
// but 10 - ten, 20 - twenty, 30 - thirty
// 9
// ten
// 11
// while (i <= 30) {
//   switch (i) {
//     case 10:
//       console.log('ten');
//       break;
//     case 20:
//       console.log('twenty');
//       break;
//     case 30:
//       console.log('thirty');
//       break;
//     default:
//       console.log(i);
//   }
//   i++;
// }

// for loops
for (let i = 0; i <= 100; i++) {
  console.log(i);
}

for (let i = 50; i > 0; i--) {
  console.log(i);
}

// for of loop
// similar for loop, used for strings or arrays
const firstName = 'Lucia';

for (let letter of firstName) {
  console.log(letter);
}

for (let i = 0; i < firstName.length; i++) {
  console.log(`The index is ${i} for letter ${firstName[i]}`);
}

const number = 10;
for (let i = 0; i <= 20; i++) {
  if (number === i) {
    continue; // skips this iteration
    // break; // completely stops the loop
  }
  console.log(i);
}
