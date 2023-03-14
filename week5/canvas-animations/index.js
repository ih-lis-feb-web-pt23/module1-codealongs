console.log('JS Loaded');

const canvas = document.getElementById('animations');
const ctx = canvas.getContext('2d');

// adding images to canvas
const img = new Image();
img.src = 'https://random.dog/56217498-0e6b-4c24-bdd1-cc5dbb2201bb.jpg';

// we need to make sure we only draw the image once it's loaded by the browser
img.addEventListener('load', () => {
  // drawImage receives the image, the x and y position, width and height
  // if we don't pass width and height the original values are used
  ctx.drawImage(img, 0, 0, img.width / 3, img.height / 3);
});

let x = 0;

const intervalId = setInterval(() => {
  // first we clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // draw the dog
  ctx.drawImage(img, x, 0, img.width / 3, img.height / 3);

  // increase the x variable
  x++;

  if (x > canvas.width - img.width / 3) {
    clearInterval(intervalId);
  }
}, 25);

// requestAnimationFrame
// randomly generating a color
const color = {
  red: Math.floor(Math.random() * 255),
  green: Math.floor(Math.random() * 255),
  blue: Math.floor(Math.random() * 255),
  rgb: function () {
    return `rgb(${this.red}, ${this.green}, ${this.blue})`;
  }
};

function updateCanvas() {
  // every time we update the canvas, we increase the values of the colors
  // up to 255, once there, we reset it back to 0 with the % operator
  color.red = (color.red + 1) % 255;
  color.green = (color.green + 1) % 255;
  color.blue = (color.blue + 1) % 255;

  // clear the canvas
  ctx.clearRect(0, 200, canvas.width, canvas.height);

  // set the color
  ctx.fillStyle = color.rgb();

  // draw the rectangle
  ctx.fillRect(0, 200, 150, 150);

  // if(randomColorToStop === color.rgb()) {
  //   cancelAnimationFrame(cancel)
  // }

  // calls the animation again
  requestAnimationFrame(updateCanvas);
}

updateCanvas();

// falling squares

let speed1 = 0;
let speed2 = 0;
let speed3 = 0;

function clearCanvas() {
  ctx.clearRect(0, 350, canvas.width, canvas.height);
}

function drawSquares(x, y, w, h, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

function fallingSquares() {
  speed1 += 1;
  speed2 += 2;
  speed3 += 3;

  clearCanvas();

  drawSquares(50, speed1, 50, 50, 'red');
  drawSquares(150, speed2, 50, 50, 'green');
  drawSquares(250, speed3, 50, 50, 'blue');

  requestAnimationFrame(fallingSquares);
}

fallingSquares();
