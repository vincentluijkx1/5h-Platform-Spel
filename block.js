class Block {
  constructor() {
    this.x = random(width);
    this.y = 0;
  }

  draw() {
    fill(0)
    rect(this.x, this.y, 55, 10);
    this.y += 5;
  }
}