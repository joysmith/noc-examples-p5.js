// Acceleration Vector
// The Nature of Code
// The Coding Train / Daniel Shiffman
// https://youtu.be/T84AWnntxZA
// https://thecodingtrain.com/learning/nature-of-code/1.6-acceleration-vector.html
// https://editor.p5js.org/codingtrain/sketches/OjCfrdWX

class Mover {
  constructor(x, y) {
    // 1 create ellipse position-vector from origin
    this.pos = createVector(x, y);
    // this.vel = createVector(1, -1);
    // 2 generate radom velocity-vector
    this.vel = p5.Vector.random2D();
    // 3 scale velocity-vector randomly
    this.vel.mult(random(3));
  }

  update() {
    // 4 get mouse position-vector from origin
    let mouse = createVector(mouseX, mouseY);
    // 5 calculate distance-vector b/w mouse and object (naming:accleration)
    this.acc = p5.Vector.sub(mouse, this.pos);
    // 6 perform normzlization and scale it
    this.acc.setMag(1);
    // 7 adding accleration-vector to velocity-vector
    this.vel.add(this.acc);
    // 8 limit velocity-vector to 5
    this.vel.limit(5);
    // 9 adding velocity-vector to position-vector
    this.pos.add(this.vel);
  }

  show() {
    stroke(255);
    strokeWeight(2);
    fill(255, 100);
    ellipse(this.pos.x, this.pos.y, 32);
  }
}
