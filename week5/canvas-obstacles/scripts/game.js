class Game {
  // this class will receive the player that gets created in the component class
  constructor(player) {
    this.player = player;
    // this will hold the intervalId from the setInterval that controls the game
    this.interval = undefined;
    // this will be used to control time and the frequency of elements appearing on the canvas
    this.frames = 0;
    // this will hold all the obstacles that appear on the canvas
    this.obstacles = [];
  }

  start = () => {
    // we'll use setInterval to create the loop that makes our game work
    this.interval = setInterval(this.updateGameArea, 20);
  };

  stop = () => {
    // cancels the interval that loops the game
    clearInterval(this.interval);
  };

  clear = () => {
    // clears the canvas
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  };

  score = () => {
    // this will have the score based on the time that has passed and print it
    // on the top of our canvas
    const points = Math.floor(this.frames / 5);
    ctx.font = '10px Arial';
    ctx.fillStyle = 'black';
    // we pass the text, the x and y positions
    ctx.fillText(`Score: ${points}`, 200, 50);
  };

  // this calls all the neccessary methods to display evertyhing we need for the game
  updateGameArea = () => {
    // first we clear the canvas
    this.clear();

    // move the player
    this.player.move();

    // draw the new position of the player
    this.player.draw();

    // drawing the obstacles
    this.drawObstacles();

    // check for collision and stop the game
    this.checkGameOver();

    // draw the score
    this.score();
  };

  drawObstacles = () => {
    this.obstacles.forEach(obstacle => {
      obstacle.x -= 1;
      obstacle.draw();
    });

    // based on this value, we'll add more obstacles
    this.frames += 1;

    // every time the value % 120 is 0, we create a new obstacle
    // this is true for 120, 240, 360,...
    if (this.frames % 120 === 0) {
      // creating top obstacle

      const minHeight = 20;
      const maxHeight = 160;
      const randomHeight = Math.floor(
        // generates random number from 0 to max value
        // since the minHeight is 20, we need to add that do the generated number
        // and remove the minHeight it from the max to balance it
        Math.random() * (maxHeight - minHeight) + minHeight
      );

      const obstacleTop = new Component(
        // fixed width for the obstacle
        10,
        randomHeight,
        'green',
        // initial position is at the right of the canvas
        canvas.clientWidth,
        0
      );

      // we add the new obstacle to the array of obstacles
      this.obstacles.push(obstacleTop);

      // in order to garantee it's possible to pass between the top and bottom
      // obstacle, we generate a randomGap
      const minGap = 50;
      const maxGap = 80;
      const randomGap = Math.floor(Math.random() * (maxGap - minGap) + minGap);

      const obstacleBottom = new Component(
        10,
        // we'll use the height of the top obstacle + randomGap
        // to define the height of the bottom obstacle based on the canvas height
        canvas.clientHeight - (randomHeight + randomGap),
        'green',
        canvas.clientWidth,
        // we'll use the height of the top obstacle + the gap
        // to define the Y position of the bottom obstacle
        randomHeight + randomGap
      );

      this.obstacles.push(obstacleBottom);
    }
  };

  checkGameOver = () => {
    const crashed = this.obstacles.some(obstacle => {
      if (this.player.collisionWith(obstacle)) {
        return true;
      } else {
        return false;
      }
    });

    if (crashed) {
      this.stop();
    }
  };
}
