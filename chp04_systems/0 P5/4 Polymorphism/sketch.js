// Polymorphism in JavaScript
// The Coding Train / Daniel Shiffman
// https://youtu.be/8a5BkwuZRK0
// https://thecodingtrain.com/Tutorials/16-javascript-es6/16.18-polymorphism.html
// https://editor.p5js.org/codingtrain/sketches/7MhdISflX

/*
Notes
1 we only modify this sketch, and didnt do anything with particle, square
2 polymorphism
*/

//1 create array to store obj
let particles = [];

function setup() {
  createCanvas(600, 600);

  //2 create 10 obj
  for (let i = 0; i < 10; i++) {
    //3 chance 50%
    if (random(1) < 0.5) {
      //4 instantiate circle
      particles[i] = new Particle(300, 300);
    } else {
      //5 instantiate aquare
      particles[i] = new Confetti(300, 300);
    }
  }
}

function draw() {
  background(0);

  //6 accessing array obj
  for (let p of particles) {
    p.update();
    p.show();
  }
}
