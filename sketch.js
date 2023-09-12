let inc = 0.40;
let start = 0


function setup() {
  createCanvas(800, 800);
}

function keyPressed() {
  if (key === 's') {
    saveGif('pulsing_pink', 6);
  }
}

function draw() {
  background(0);

  stroke(255, 105, 180)
  noFill()
  
  beginShape();
  let xoff = start;
  
  for (let y = 0; y < height; y++) {
    let x = noise(xoff) * width;
    vertex(x, y);
    xoff += inc;
  }
  endShape()
  
  start += 0.01  
}