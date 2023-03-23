// Simulating Forces
// The Nature of Code
// The Coding Train / Daniel Shiffman
// https://youtu.be/Uibl0UE4VH8
// https://thecodingtrain.com/learning/nature-of-code/2.1-simulating-forces.html
// https://editor.p5js.org/codingtrain/sketches/kYWcOmch

let mover;

function setup() {
  createCanvas(600, 400);
  mover = new Mover(200, 200);
}

function draw() {
  background(0);

  if (mouseIsPressed) {
    // wind-force direction -->
    let wind = createVector(0.1, 0);
    mover.applyForce(wind);
  }

  // gravity-force down
  let gravity = createVector(0, 0.2);
  mover.applyForce(gravity);

  mover.update();
  mover.edges();
  mover.show();
}
