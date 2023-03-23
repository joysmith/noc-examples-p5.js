// Unit Vector (Normalize)
// The Nature of Code
// The Coding Train / Daniel Shiffman
// https://youtu.be/ttz05d8DSOs
// https://thecodingtrain.com/learning/nature-of-code/1.2-vector-math.html
// https://editor.p5js.org/codingtrain/sketches/U4ezFLIZ

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  //1 create position vector from origin
  let pos = createVector(200, 200);
  //2 create mouse vector from origin
  let mouse = createVector(mouseX, mouseY);

  //3 perform subtraction and get distance vector
  let v = p5.Vector.sub(mouse, pos);

  //4 ------various way to do normalization----------
  // let m = v.mag();
  // v.div(m);
  v.normalize();

  //5 scale unit vector
  v.mult(50);

  //method chaning, doing in 1 step
  // v.normalize().mult(50);

  // v.setMag(50);

  translate(width / 2, height / 2);
  strokeWeight(4);
  stroke(255);
  line(0, 0, v.x, v.y);
}
