console.log('JS Loaded!');

// document is a special object that gives us access to all elements
// of the html page and some methods as well
// it's what allows DOM manipulation
console.log(document);

// getting an HTML element by its id (cat)
// gets the first element with the provided id
// id should be unique anyway
const catDiv = document.getElementById('cat');
console.log(catDiv);

// we just changed our HTML page with javascript!
catDiv.innerText = 'I am a cat!';

// we can also change the styles!
// CSS properties here follow the camelCase convention
catDiv.style.backgroundColor = 'red';

// getting elements with class name
// HTML collection -> getElements is plural so always returns a collection
// even if there is only one element with that class!
const dogDivs = document.getElementsByClassName('dog');
console.log(dogDivs);

// HTMLCollection is not an array but we can transform it!
// after the spread operator we can iterate over the array
const dogArray = [...dogDivs];

const dogNames = ['Benji', 'Pantufa', 'Uva'];

dogArray.forEach((dogDiv, index) => {
  dogDiv.innerText = `${index + 1}: ${dogNames[index]}`;
});

// getting by HTML element name (also known as tag name)
// also returns an HTML Collection
const allDivs = document.getElementsByTagName('div');
console.log(allDivs);

// querySelector
// returns the first element that matches the query
const firstDog = document.querySelector('.dog');
const catParagraph = document.querySelector('.cat p');
console.log(catParagraph);
const firstCat = document.querySelector('#cat');

// returns all elements that match the query
// retuns a NodeList that is iterable
const allDogs = document.querySelectorAll('.dog');
console.log(allDogs);

const title = document.querySelector('h1');
console.log('the class name for the h1 is:', title.className);
title.className = 'bigTitle';
console.log('the class name for the h1 is:', title.className);
