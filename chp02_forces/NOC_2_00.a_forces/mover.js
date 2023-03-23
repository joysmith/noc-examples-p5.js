// Simulating Forces
// The Nature of Code
// The Coding Train / Daniel Shiffman
// https://youtu.be/Uibl0UE4VH8
// https://thecodingtrain.com/learning/nature-of-code/2.1-simulating-forces.html
// https://editor.p5js.org/codingtrain/sketches/kYWcOmch

class Mover {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.r = 20;
  }

  // add external force Newton 2 law of motion
  applyForce(force) {
    this.acc.add(force);
  }

  // boundaries
  edges() {
    // possibility when ball move to bottom, tune it with offset
    if (this.pos.y >= height - this.r) {
      // reset ball at bottom edge
      this.pos.y = height - this.r;
      // invert velocity
      this.vel.y *= -1;
    }

    // possibility when ball move to right, tune it with offset
    if (this.pos.x >= width - this.r) {
      // reset ball at right edge
      this.pos.x = width - this.r;
      // invert velocity
      this.vel.x *= -1;
    }
    // possibility when ball move to left, tune it with offset
    else if (this.pos.x <= this.r) {
      // reset ball at left edge
      this.pos.x = this.r;
      // invert velocity
      this.vel.x *= -1;
    }
  }

  update() {
    // let mouse = createVector(mouseX, mouseY);
    // this.acc = p5.Vector.sub(mouse, this.pos);
    // this.acc.setMag(0.1);

    // euler integration algo
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    // reset acc every frame
    this.acc.set(0, 0);
  }

  show() {
    stroke(255);
    strokeWeight(2);
    fill(255, 100);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
}
