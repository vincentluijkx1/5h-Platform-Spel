class Birb {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vy = 0;
    this.gravity = 0.2;
  }

  // hoi

  drawBirb() {
    fill("red");
    circle(this.x, this.y, 10)

    this.vy += this.gravity;

    this.y += this.vy;

    if (this.y > 380) {
      this.vy = 0;
      this.y = 380;
    }

    if (this.y < 0) {
      this.vy = 0;
      this.y = 0;
    }
  }
}


var birb, block;

function setup() {
  createCanvas(500, 400);

  birb = new Birb(100, 200);
  block = new Block(75);

}


function draw() {
  background(225);
  
  block.draw();
  
  birb.drawBirb();

}

function keyPressed() {
  if (keyCode == 32) {
    birb.vy -= 5;
  }
}

