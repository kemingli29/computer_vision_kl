
let w = 320;
let h = 225;
let capture;

function setup() {
  let c = createCanvas(w, h);
  c.parent("#sketch-parent");
  pixelDensity(1);
  capture = createCapture(VIDEO);
  capture.size(w, h);
  capture.hide();
}

function draw() {
  background(255);
  let stepSize = 3;
  capture.loadPixels();
  
  for(let y = 0; y < capture.height; y+=stepSize) {
    for(let x = 0; x < capture.width; x+=stepSize) {
      const index = (x + y * capture.width) * 4;
      
      let r = capture.pixels[index+mouseX];
      let g = capture.pixels[index+mouseY];
      let b = capture.pixels[index+2];
      let c = color(r, g, b);
      
      let totalBrightness = r + g + b;
      
      let brightness = totalBrightness/5;
      
      let size = map(brightness, 0, 255, stepSize/6, stepSize*3);
      noStroke();
      
      fill(c);
      
      // RECTANGLES
      
     // push();
      //  translate(capture.width, 0);
     //   scale(-1, 1);
     //   rect(x, y, size, size);
    //  pop();
      
      // ELLIPSES
       push();
        translate(width, 0);
         scale(-1, 1);
         translate(stepSize/2, stepSize/2);
         ellipse(x, y, size, size);
       pop();
      
    }
  }  
}