// P5 sketch in instance mode

// the base of the sketch where our setup and draw functions now live
let canvas = function (sketch) {
  let box1;
  let box2;

  sketch.setup = function () {
    sketch.createCanvas(500, 500);
    sketch.background(0);
    box1 = new Box(sketch, 0, 0, 20, 20);
    box2 = new Box(sketch, 20, 20, 20, 20);
  };

  sketch.draw = function () {
    sketch.background(0);
    box1.display();
    box2.display();
  };
};

// the Box class being used in instance mode
class Box {
  constructor(_p, _x, _y, _w, _h) {
    // this p is our p5 instance object
    this.sketch = _p;
    this.x = _x;
    this.y = _y;
    this.w = _w;
    this.h = _h;
  }

  display() {
    this.sketch.fill(255);
    this.sketch.rect(this.x, this.y, this.w, this.h);
  }
}

new p5(canvas, "container");
