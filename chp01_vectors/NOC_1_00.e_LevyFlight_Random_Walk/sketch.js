// Daniel Shiffman
// http://codingtra.in
// https://youtu.be/bqF9w9TTfeo
// https://thecodingtrain.com/CodingChallenges/053-random-walk-levy.html

let pos;
let prev;

function setup() {
  createCanvas(400, 400);
  // position-vector at center
  pos = createVector(width / 2, height / 2);
  prev = pos.copy();
  background(51);
}

function draw() {
  stroke(255);
  strokeWeight(2);
  line(pos.x, pos.y, prev.x, prev.y);

  prev.set(pos);

  // generate random velocity-unit-vector
  var step = p5.Vector.random2D();

  //implementing Probability feature
  var r = random(100);
  // 1% chance then flight
  if (r < 1) {
    // perform multiplication on velocity-unit-vector
    step.mult(random(25, 100));
  } else {
    step.setMag(2);
  }

  pos.add(step);
}
