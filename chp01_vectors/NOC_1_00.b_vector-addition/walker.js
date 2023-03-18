// Random Vector
// The Nature of Code
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/learning/nature-of-code/1.3-random-vector.html

// Random Vector: https://editor.p5js.org/codingtrain/sketches/qHKMdpRR
// Walker: https://editor.p5js.org/codingtrain/sketches/_HHLfcGx

class Walker {
  constructor(x, y) {
    // create position-vector
    this.pos = createVector(x, y);

    /**** 4 diagonal direction ****/
    // go NE
    // this.vel = createVector(1, -1);
    // go SE
    // this.vel = createVector(1, 1);
    // go SW
    // this.vel = createVector(-1, 1);
    // go NW
    // this.vel = createVector(-1, -1);

    /**** 4 Cardinal directions ****/
    // go right
    // this.vel = createVector(1, 0);
    // go left
    // this.vel = createVector(-1, 0);
    // go down
    // this.vel = createVector(0, 1);
    // go up
    // this.vel = createVector(0, -1);

    // generate random velocity-unit-vector
    this.vel = p5.Vector.random2D();

    // perform vector multiplication on velocity-vector
    this.vel.mult(random(3));
  }

  update() {
    // add this obj velocity to this obj position
    // add vel to pos
    this.pos.add(this.vel);
  }

  show() {
    stroke(255);
    strokeWeight(2);
    fill(255, 100);
    ellipse(this.pos.x, this.pos.y, 32);
  }
}
