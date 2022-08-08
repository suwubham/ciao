//using perlin noise randomness

let rez = 0.5;   //resolution number //how quickly perlin noise changes 
let t = 1;

function setup() {
  createCanvas(600,600);
  
  let saveButton = createButton("save jpg");
  saveButton.position(10, height+10);
  saveButton.mousePressed(saveArt);
  //noLoop();
}

function draw() {
  background(203);
  space = 20;//change in shape and size number results in star like pattern
  size = 20;

  for (i = 0; i < width; i += space) {
    for (j = 0; j < height; j += space) {
      n = noise(i * rez, j * rez, t);
      //n = random(1);      //creates randomness
      //stroke(n*255,n*255,n*255,255);
      stroke(200,55,11);    //color
      //fill(n*200,n*205,n*100,105);
      strokeWeight(3);   //how dark will the line be
      if (n < 0.5) {
        line(i, j, i + size, j + size); //one side line will dissaper 
      } else {
        line(i + size, j, i, j + size);
      }
    }
    t += 0.00002;     //moment
  }
}

function saveArt() {
  save("myCanvas.jpg");
}