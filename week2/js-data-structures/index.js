// Data structures - arrays and objects
// we can form complex data structures by combining multiple data types
const students = [
  {
    name: 'Marcelo',
    course: 'Web Dev'
  },
  { name: 'Diogo', course: 'Data' },
  { name: 'Paula', course: 'UXUI' }
];

const newStudent = { name: 'André', course: 'Web Dev' };
students.push(newStudent);

// print the course Diogo is taking
console.log(students[1].course);

// two dimensional arrays
// arrays inside array
const classRoom = [
  ['Harieta', 'Koray', 'Henrique'],
  ['Diogo', 'Marcelo', 'Cátia', 'André', 'Simão'],
  ['Pedro', 'Miguel']
];

// print the first row
console.log(classRoom[0]);

// print the second person in the third row - Miguel
console.log(classRoom[2][1]);

// print Cátia's name
console.log(classRoom[1][2]);

const ironhackClassrooms = [
  [
    { name: 'Harieta', course: 'Web Dev' },
    { name: 'Koray', course: 'Web Dev' }
  ],
  [
    { name: 'Paula', course: 'UXUI' },
    { name: 'Mariana', course: 'UXUI' }
  ],
  [
    { name: 'Diogo', course: 'Data' },
    { name: 'Inês', course: 'Data' }
  ]
];

// print the data classroom
console.log(ironhackClassrooms[2]);

// print the name of the first person in the UXUI class
console.log(ironhackClassrooms[1][0].name);

// objects inside objects
const webDevClass = {
  teacher: {
    firstName: 'Lúcia',
    lastName: 'Duarte',
    age: 29,
    address: {
      city: 'Lisbon',
      country: 'Portugal'
    }
  },
  students: [
    { name: 'Simão', course: 'Web Dev' },
    { name: 'Miguel', course: 'Web Dev' }
  ]
};

// print the city the teacher lives in
console.log(webDevClass.teacher.address.city);

// print Miguel's name
console.log(webDevClass.students[1].name);

const ironhack = {
  lisbon: {
    classRooms: [
      {
        teacher: {
          firstName: 'Lúcia',
          lastName: 'Duarte',
          age: 29,
          address: {
            city: 'Lisbon',
            country: 'Portugal'
          }
        },
        students: [
          { name: 'Simão', course: 'Web Dev' },
          { name: 'Miguel', course: 'Web Dev' }
        ]
      },
      {
        teacher: {
          firstName: 'Luke',
          lastName: 'Smalley',
          age: 29,
          address: {
            city: 'Cascais',
            country: 'Portugal'
          }
        },
        students: [
          { name: 'Diogo', course: 'Data' },
          { name: 'Inês', course: 'Data' }
        ]
      }
    ]
  }
};

// print Diogo's name
console.log(ironhack.lisbon.classRooms[1].students[0].name);

// add a new student to the web dev class
const webDevStudent = { name: 'Marcelo', course: 'WebDev' };
ironhack.lisbon.classRooms[0].students.push(webDevStudent);
console.log(ironhack.lisbon.classRooms[0].students);
