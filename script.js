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

    if (keyIsDown(LEFT_ARROW)) {
      this.x -= 5;
    }

    if (keyIsDown(RIGHT_ARROW)) {
      this.x += 5;
    }
  }
}

var birb;
var blocks = [];

function setup() {
  createCanvas(500, 400);

  birb = new Birb(100, 200);  

}


function draw() {
  background(225);

  // elke 50 frames iets doen
  if(frameCount % 50 == 0){
    blocks.push(new Block());
  }

  blocks.forEach(b => {
    b.draw();
  });
  
  
  birb.drawBirb();

}

function keyPressed() {
  if (keyCode == 32) {
    birb.vy -= 5;
  }
}