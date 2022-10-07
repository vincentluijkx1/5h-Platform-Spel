class Block{ 
constructor(){
    this.x = random(width);
    this.y = 0;
  }

  draw(){
    fill(0)
    rect(this.x, this.y, 55,10);
    this.y += 5;
  }
}

var Blocks = [];

  
function draw(){ 

  if(frameCount % 50 == 0){
    Blocks.push(new Block());
  }


  Blocks.forEach((b) => {
    b.draw();
  });
}