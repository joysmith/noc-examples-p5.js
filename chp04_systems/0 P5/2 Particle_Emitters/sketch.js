// Many Particle Systems (Emitters!)
// The Nature of Code
// The Coding Train / Daniel Shiffman
// https://youtu.be/wDYD3JVtOys
// https://thecodingtrain.com/learning/nature-of-code/4.1-particle-emitters.html

// Particle Emitters: https://editor.p5js.org/codingtrain/sketches/YqAxA5CYy
// Particle Emitters with Movers Exercise: https://editor.p5js.org/codingtrain/sketches/UXmqwcpRL
// Particles Following Mouse Exercise: https://editor.p5js.org/codingtrain/sketches/1zTN6PYJg
// Particle Emitters Color Exercise: https://editor.p5js.org/codingtrain/sketches/IYisp9xmJ

// 1 array to hold emitter
let emitters = [];

// 2 click to instiantiate particle
function mousePressed() {
  emitters.push(new Emitter(mouseX, mouseY));
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  // 3 draw every particle in array
  for (let emitter of emitters) {
    emitter.emit(2);
    emitter.show();
    emitter.update();
  }
}
