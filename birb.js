class Birb {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 10;
    this.h = 10;
    this.vy = 0;
    this.gravity = 0.2;
  }
  
  drawBirb() {
    fill("red");
    rect(this.x, this.y, this.w, this.h)

    this.vy += this.gravity;

    this.y += this.vy;

    if (this.y > 380) {
      this.vy = 0;
      this.y = 380;
      gameState = 2;
      //console.log("DOOD")
    }

    if (this.y < 0) {
      this.vy = 0;
      this.y = 0;
    }

    if (keyIsDown(LEFT_ARROW)) {
      this.x -= 5;
    }

    if (keyIsDown(RIGHT_ARROW)) {
      this.x += 5;
    }
  }
}