var sketch = function (p) {
  p.setup = function () {
    p.createCanvas(200, 200);
    p.background(51);
  };

  p.draw = function () {
    p.fill(255, 0, 200);
    p.noStroke();
    p.ellipse(100, 100, 50, 40);
  };
};

var myp3 = new p5(sketch, "blue");
