console.log('JS loaded');

const canvas = document.getElementById('obstacles');
const ctx = canvas.getContext('2d');

const player = new Component(30, 30, 'red', 0, 100);

document.addEventListener('keydown', event => {
  event.preventDefault();

  switch (event.key) {
    case 'ArrowUp':
      player.speedY -= 1;
      break;
    case 'ArrowDown':
      player.speedY += 1;
      break;
    case 'ArrowLeft':
      player.speedX -= 1;
      break;
    case 'ArrowRight':
      player.speedX += 1;
      break;
  }
});

document.addEventListener('keyup', () => {
  player.speedX = 0;
  player.speedY = 0;
});

const game = new Game(player);
game.start();
