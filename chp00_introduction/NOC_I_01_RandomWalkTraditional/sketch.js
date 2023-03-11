// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let walker;

function setup() {
  createCanvas(windowWidth, windowHeight);
  walker = new Walker();
  background(150);
}

function draw() {
  walker.step();
  walker.render();
}

// --------CLASS Template---------
class Walker {
  constructor() {
    // set coordinate to center
    this.x = width / 2;
    this.y = height / 2;
  }

  render() {
    stroke(0);
    //point(this.x, this.y);
    circle(this.x, this.y, 5);
  }

  step() {
    var choice = floor(random(4)); // floor to convert float into integer

    // pick 1 direction out of 4, each frame
    if (choice === 0) {
      this.x++;
    } else if (choice == 1) {
      this.x--;
    } else if (choice == 2) {
      this.y++;
    } else {
      this.y--;
    }

    this.x = constrain(this.x, 0, width - 1);
    this.y = constrain(this.y, 0, height - 1);
  }
}
