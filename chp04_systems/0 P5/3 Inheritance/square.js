// Inheritance in JavaScript
// The Coding Train / Daniel Shiffman
// https://youtu.be/MfxBfRD0FVU
// https://thecodingtrain.com/Tutorials/16-javascript-es6/16.17-inheritance.html
// https://editor.p5js.org/codingtrain/sketches/52LIIRRCa

class Confetti extends Particle {
  constructor(x, y) {
    //1 call parent constructor
    super(x, y);

    //2 adding new props
    this.bright = random(255);
    this.r = 10;
  }

  update() {
    //3 first do whatever you do in parent class
    // means run code inside update() from parent class
    super.update();

    //4 adding new line of instruction
    this.r += random(-2, 2);
  }

  show() {
    strokeWeight(1);
    stroke(255);
    fill(this.bright);
    square(this.x, this.y, this.r);
  }
}
