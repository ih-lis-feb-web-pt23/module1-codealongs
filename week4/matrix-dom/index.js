console.log('JS loaded!');

// get all the elements in my page
const startButton = document.getElementById('start-game');
// because we are using querySelector, we need the . to specify its a class
const gameDiv = document.querySelector('.game');
const matrix = document.querySelector('.matrix');
const body = document.querySelector('body');
// gets all buttons inside the matrix div
const matrixButtons = document.querySelectorAll('.matrix button');
const feedback = document.querySelector('.get-feedback');
const liTags = document.querySelectorAll('li');
const userRate = document.getElementById('user-rate');
const sendButton = document.getElementById('send-review');
const questionDiv = document.querySelector('.question');
const reviewsDiv = document.querySelector('.display-feedback');

// addEventListener let us define what event we want to react to
// and then pass the code that should run when the event happens
startButton.addEventListener('click', () => {
  // lets present a popup for the user to input the name
  const name = window.prompt('What is your name?');
  // this holds whatever the user inputed
  console.log(name);

  // create a new paragraph to hold the welcome
  const welcomeParagraph = document.createElement('p');

  // we assign the text to the paragraph
  welcomeParagraph.innerText = `Welcome to the matrix, ${name}`;

  // we add the paragraph to the game div as a child to have it inside
  gameDiv.appendChild(welcomeParagraph);

  matrix.style.display = 'inline';
});

// adding the click listeners on the matrix buttons
// querySelectorAll returnds a Nodelist we can iterate
matrixButtons.forEach(button => {
  button.addEventListener('click', () => {
    // get the class value from the button
    // const classValue = button.getAttribute('class');

    // set the value from the button in the body
    body.setAttribute('class', button.getAttribute('class'));

    // if (classValue === 'white') {
    if (button.getAttribute('class') === 'white') {
      // display the form if the button clicked is the exit game button
      feedback.style.display = 'inline';
    }
  });
});

// iterating over the list items to know which one was clicked
liTags.forEach(item => {
  // we can have access to the event object and the properties it has
  item.addEventListener('click', event => {
    // console.log(event.currentTarget.innerText);
    userRate.innerText = `You rated us: ${event.currentTarget.innerText}`;
  });
});

sendButton.addEventListener('click', () => {
  // returns a list of inputs, we only have one, so we get the first
  const input = document.getElementsByTagName('input')[0];
  console.log(input.value);

  // create a new element h3 to display the review
  const reviewH3 = document.createElement('h3');
  reviewH3.innerText = input.value;

  // add the review to the reviews div
  reviewsDiv.appendChild(reviewH3);

  // display the reviews and hide the question
  reviewsDiv.style.display = 'inline';
  questionDiv.style.display = 'none';
});
