var birb;
var blocks = [];
var gameState = 0;

function setup() {
  createCanvas(500, 400);
  birb = new Birb(100, 200);
}


function draw() {

  // start menu
  if (gameState == 0) {
    background("white");
    fill("#007dad")
    text("press enter", width / 2, height / 2)
  }

  // play game
  if (gameState == 1) {
    playGame()
  }

  // game over
  if (gameState == 2) {
    gameOver()
  }
}

function gameOver() {
  // zet de birb weer in het midden    
  birb = new Birb(100, 200);

  // maak het lijstje met blocks lees
  blocks = [];

  background("red");
  fill("white")
   textSize(25);
  text("GAMEOVER, press enter to play again!", 25,height/2);
}

function playGame() {
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
  console.log(keyCode);
  if (keyCode == 32) {
    birb.vy -= 5;
  }

  if (keyCode == 13) {
    gameState = 1;
  }
}
