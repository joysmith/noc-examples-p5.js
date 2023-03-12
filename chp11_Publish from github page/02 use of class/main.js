// P5 sketch in instance mode

// the base of the sketch where our setup and draw functions now live
let sketch = function (p) {
  let b;
  let d;

  p.setup = function () {
    p.createCanvas(500, 500);
    p.background(0);
    b = new Box(p, 0, 0, 20, 20);
    d = new Box(p, 20, 20, 20, 20);
  };
  p.draw = function () {
    p.background(0);
    b.display();
    d.display();
  };
};

// the Box class being used in instance mode
class Box {
  constructor(_p, _x, _y, _w, _h) {
    // this p is our p5 instance object
    this.p = _p;
    this.x = _x;
    this.y = _y;
    this.w = _w;
    this.h = _h;
  }

  display() {
    this.p.fill(255);
    this.p.rect(this.x, this.y, this.w, this.h);
  }
}

new p5(sketch, "container");
