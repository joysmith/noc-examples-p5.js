// Angles and Rotation
// The Nature of Code
// The Coding Train / Daniel Shiffman
// https://youtu.be/DMg-WRfNB60
// https://thecodingtrain.com/learning/nature-of-code/3.1-angles-rotation.html
// https://editor.p5js.org/codingtrain/sketches/y7ieDesyd

let angle = 0;

function setup() {
  createCanvas(600, 400);
  //1 set angle mode to radians
  angleMode(RADIANS);
}

function draw() {
  background(146, 83, 161);
  noStroke();
  fill(240, 99, 164);
  //2 shift anchor of rect to center
  rectMode(CENTER);
  //3 translate canvas space to center of screen
  translate(300, 200);
  //4 rotate
  rotate(angle);
  //5
  rect(0, 0, 128, 64);
  //6 increase radian every sec
  //- rect is moving clockwise because of p5 coordinate space
  //- 1 radian is a big step thats why we have to use small number
  angle += 0.05;
}
