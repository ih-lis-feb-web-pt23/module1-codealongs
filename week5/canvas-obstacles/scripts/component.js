class Component {
  // the width, height, color and position will be decided when the element is created
  constructor(width, height, color, x, y) {
    this.color = color;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    // this will control the velocity the elements have
    this.speedX = 0;
    this.speedY = 0;
  }

  draw = () => {
    // assigns the color the element has to fillStyle before it gets drawn
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };

  move = () => {
    this.x += this.speedX;
    this.y += this.speedY;
  };

  // left border is at x position
  left = () => {
    return this.x;
  };

  // right border is the x position plus the width of the element
  right = () => {
    return this.x + this.width;
  };

  // top border is the y position
  top = () => {
    return this.y;
  };

  // bottom border is at y position plus the height of the element
  bottom = () => {
    return this.y + this.height;
  };

  collisionWith = component => {
    return !(
      this.bottom() < component.top() ||
      this.top() > component.bottom() ||
      this.right() < component.left() ||
      this.left() > component.right()
    );
  };
}
