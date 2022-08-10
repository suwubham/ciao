//mandala art
//first petel outside and then petels of the inside

let x1, x2, y2, x3, y3, x4; //variables
//let pedals=30;

function setup() {
  createCanvas(500, 500);
  background(0); //add background(black)
  angleMode(DEGREES); //angle mode to degree
  colorMode(HSB, 360, 100, 100, 100);
  translate(width / 2, height / 2); //we are drawing from center so translate
  let pedals = random(8, 40);
  let layers = random(4, 40);
  let ang = 360 / pedals;

  // creating each layer with different variables
  for (let j = layers; j > 0; j--) {
    let ly = j / layers;
    x1 = random(185 * ly, 205 * ly); //giving variables some numbers
    x4 = random(230 * ly, 245 * ly); //numb for respecive pedels
    x2 = random(190 * ly, 215 * ly); //creating randomness too
    let maxX2 = x2 * tan(ang) * 0.9;
    y2 = random(15 * ly, maxX2 * ly);
    x3 = random(210 * ly, 230 * ly);
    y3 = random(15 * ly, maxX2);
    let hue = random(256);
    let sat = random(70, 100);
    let brt = random(70, 100);
    let alph = random(40, 100);
    fill(hue, sat, brt, alph);
    //curvevertex has starting point to ending point and middle
    // draw the pedals for one layer
    for (let i = 0; i < pedals; i++) {
      //360 for round and pedals dived by 2
      noStroke();
      //stroke(0,250,250);//blue color outer
      //synatx for curveVerex
      beginShape();
      curveVertex(x1, 0); //y1 is always 0 as begening and end of the curve must be on y axis
      curveVertex(x1, 0);
      curveVertex(x2, y2);
      curveVertex(x3, y3);
      curveVertex(x4, 0);
      curveVertex(x4, 0);
      endShape();
      beginShape();
      curveVertex(x1, 0);
      curveVertex(x1, 0);
      curveVertex(x2, -y2);
      curveVertex(x3, -y3);
      curveVertex(x4, 0);
      curveVertex(x4, 0);
      endShape();
      //stroke(hue,sat,brt,alph);//  that line to have stroke
      strokeWeight(5);
      //line(x1,0,x4,0);  //adding line
      rotate(ang);
    }
    rotate(ang / 2); //for the circle
  }
}
