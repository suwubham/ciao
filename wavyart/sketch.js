let minYchange = 0; //these two ranges determine line minYchange is overlap and maxYchange is width

let maxYchange = 90;//if we use positive then line are less overlaped and -ve they are more overlapped

let layers = 5;//adds the layers to waves created 

let rotStripe = 20; //rotation of each stripe, we can try for 10 to 90;

// try lines = true with high alph or lines = false with low alph (100)
let lines = true; // if false then there will be no outlines

let alph = 255; //out of 255, //see through if we decrease and these colours are from color pallet randomly picing colors

let colRand = false; //true =it pickes random color; false = picks the color from palette table
let filling = true; 
let colorLines = false; //false for black lines
let sw = 3; //line width
let extraBlack = 0; //1 for some black line and white fills; 0 for neither; -2 for pulls fewer colors;
let extraBlackAlph = 255; //out of 255 - used if extraBlack=1 & lines, filling, colorLines all true, low alph, high sw
let r, g, b;
let table;

function preload() {               //color display
  table = loadTable("colors.csv", "csv", "header");
}

function setup() {
  let canv = createCanvas(1000, 1000);
  canv.mousePressed(setup);
  if (lines == true) {
    stroke(0, 0, 0, extraBlackAlph);
    strokeWeight(sw);
  } else {
    noStroke();
  }
  angleMode(DEGREES);
  let end = height / 2 + 500; //where lines stop
  let palette = floor(random(676)); //colors to pick from pallet
  for (let i = 0; i < layers; i++) { //first layers starts from where and second layer from where determines by this loop
    let y1;
    if (i == 0) {
      y1 = -height / 2 - 300;
    } else {
      y1 = -height / 2 + (height / layers) * i;
    }
    //starting height for each layer
    let y2 = y1,
      y3 = y1,
      y4 = y1,
      y5 = y1,
      y6 = y1;
    let rotLayer = random(359); //layer rotation
    let rotThisStripe = 0; //rotation stripes increment
    //it keeps going until all the lines are at the bottom
    while (
      (y1 < end) &
      (y2 < end) &
      (y3 < end) &
      (y4 < end) &
      (y5 < end) &
      (y6 < end) &
      (-maxYchange < minYchange)     //this is why minY must not be minus -60 AND maxY positive
    ) {
      y1 += random(minYchange, maxYchange);
      y2 += random(minYchange, maxYchange);
      y3 += random(minYchange, maxYchange);
      y4 += random(minYchange, maxYchange);
      y5 += random(minYchange, maxYchange);
      y6 += random(minYchange, maxYchange);
      if (colRand == true) {//here we check whether random color is true or not if false we pick from color table
        r = random(256);
        g = random(256);
        b = random(256);
      } else {
        let col = floor(random(5 + extraBlack));
        r = table.get(palette, col * 3);
        g = table.get(palette, col * 3 + 1);
        b = table.get(palette, col * 3 + 2);
      }
      if (filling == true) {   //if filling is true then color from pallet else tehre is no fill 
        fill(r, g, b, alph);
      } else {
        noFill();
      }
	  
      if (colorLines == true) {
        stroke(r, g, b, alph);
      }
      push();
      translate(width / 2, height / 2);
      rotThisStripe += rotStripe; //rotating after each stripe
      rotate(rotThisStripe + rotLayer);
      let xStart = -width / 2;
      beginShape();
      curveVertex(xStart - 300, height / 2 + 500);
      curveVertex(xStart - 300, y1);
      curveVertex(xStart + (width / 5) * 1, y2);
      curveVertex(xStart + (width / 5) * 2, y3);
      curveVertex(xStart + (width / 5) * 3, y4);
      curveVertex(xStart + (width / 5) * 4, y5);
      curveVertex(width / 2 + 300, y6);
      curveVertex(width / 2 + 300, height / 2 + 500);
      endShape(CLOSE);
      pop();
    }
  }
}

function keyTyped() {
  if (key === "s") {
    save("myCanvas.jpg");
  }
}