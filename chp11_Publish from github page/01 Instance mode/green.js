var sketch = function (p) {
  p.setup = function () {
    p.createCanvas(200, 200);
    p.background(51);
  };

  p.draw = function () {
    p.fill(34, 139, 34);
    p.noStroke();
    p.ellipse(100, 100, 50, 40);
  };
};

var myp4 = new p5(sketch, "green");
