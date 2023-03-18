var canvas;

// 5 using windowResized-event to resize window
function windowResized() {
  //console.log('resized');
  // 6 resizeCanvas
  resizeCanvas(windowWidth, windowHeight);
  // 7 background(175);
}

function setup() {
  // 1 create canvas
  canvas = createCanvas(windowWidth, windowHeight);
  // 2 position canvas using absolute positioning
  canvas.position(0, 0);
  // 3 use css z-index rule to put layer in background
  canvas.style("z-index", "-1");
  // 4 paint background
  background(175);
}

function draw() {
  ellipse(width / 2, height / 2, 1000);
}
