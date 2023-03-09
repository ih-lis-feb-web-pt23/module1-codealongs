console.log('JS loaded!');

const canvas = document.getElementById('intro');
const ctx = canvas.getContext('2d');

// Drawing Rectangles

// fillRect draws a filled rectangle
// receives x position, y position, width and height
ctx.fillRect(0, 0, 50, 50);
ctx.fillRect(100, 0, 80, 70);

// strokeRect draws just the borders of the rectangle
// receives the same values
ctx.strokeRect(0, 100, 40, 90);

// clears the specified area
// receives the same values
ctx.clearRect(90, 20, 50, 50);

// changes the filling color
ctx.fillStyle = 'purple';
// changes the line color
ctx.strokeStyle = 'purple';

// Drawing paths

// to use paths we need to specify a beginning and an end
// starting the path
ctx.beginPath();

// we need to say the starting position
ctx.moveTo(100, 100);

// draw a line to here
// x, y
ctx.lineTo(200, 200);

// we can continue from the last position to this new one
ctx.lineTo(200, 250);

// actually draw the line
ctx.stroke();

// once we are done, we close the path
ctx.closePath();

// draw a triangle and fill it

ctx.beginPath();

// coordenates you want to start from
ctx.moveTo(100, 200);

// coordinates you want to go next
ctx.lineTo(120, 220);

ctx.lineTo(100, 240);

ctx.fill();

ctx.closePath();

// Drawing circles

ctx.beginPath();

// draw receives an x and y position that will be the center of the arc
// receives a radius starting at startAngle and ending at endAngle
// the angles it receives are in radians and not degrees
// we can convert radians to degrees with a formula:
// const radians = (Math.PI / 180) * 360
ctx.arc(280, 280, 20, 0, (Math.PI / 180) * 360);

ctx.stroke();
// ctx.fill();
ctx.closePath();

ctx.fillStyle = 'green';
ctx.strokeStyle = 'green';

ctx.beginPath();

ctx.arc(200, 200, 40, 0, (Math.PI / 180) * 360);

ctx.fill();

ctx.closePath();

// we can change the colors of our elements
// for every need element with a new color, we need to reassign the color
// we can pass HEX values
ctx.fillStyle = '#FAA100';
ctx.fillRect(200, 100, 30, 30);

// we can define the width of the line
ctx.lineWidth = 5;
ctx.strokeStyle = 'red';
ctx.strokeRect(250, 100, 30, 30);

ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
ctx.fillRect(160, 30, 30, 30);

ctx.globalAlpha = 0.7;
ctx.fillStyle = 'orange';
ctx.fillRect(200, 180, 50, 50);

// Writing text

ctx.font = '36px serif';
// receives the text, the x and the y
ctx.fillText('Hi class!', 20, 280);

ctx.font = '36 Arial';
ctx.lineWidth = 1;
ctx.strokeText('Hey!', 20, 150);
