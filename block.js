class Block {
  constructor() {
    this.x = random(width);
    this.y = 0;
    this.w = 55;
    this.h = 10;
    this.vy = 2;
  }

  draw() {
    fill(0)
    rect(this.x, this.y, this.w, this.h);
    this.y += this.vy;
  }
  

  hit(myBirb) {
    if (myBirb.vy > 0) {
      if (this.x < myBirb.x + myBirb.w && this.x + this.w > myBirb.x) {
        if (this.y < myBirb.y + myBirb.h && this.y + this.h > myBirb.y) {
          myBirb.vy = this.vy;
          console.log("hit");
        }
      }
    }
  }
}