var birb;
var blocks = [];

function setup() {
  createCanvas(500, 400);

  birb = new Birb(100, 200);

}


function draw() {
  background(225);

  // elke 50 frames iets doen
  if (frameCount % 50 == 0) {
    blocks.push(new Block());
  }

  birb.drawBirb();

  blocks.forEach(b => {
    b.draw();
    b.hit(birb);
  });




}

function keyPressed() {
  if (keyCode == 32) {
    birb.vy -= 5;
  }
}