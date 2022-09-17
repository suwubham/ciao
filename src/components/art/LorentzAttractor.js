import React from "react";
import Sketch from "react-p5";

export default function LorentzAttractor(props) {
  console.log(props.bgcolor);
  let x = 0.01;
  let y = 0;
  let z = 0;

  let a = 10;
  let b = 28;
  let c = 8.0 / 3.0;

  let points = new Array();

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(500, 400, p5.WEBGL).parent(canvasParentRef);
    p5.colorMode(p5.HSB);
  };

  const draw = (p5) => {
    p5.background(0);
    let dt = 0.01;
    let dx = a * (y - x) * dt;
    let dy = (x * (b - z) - y) * dt;
    let dz = (x * y - c * z) * dt;
    x += dx;
    y += dy;
    z += dz;
    points.push(p5.createVector(x, y, z));
    p5.translate(0, 0, -80);
    p5.scale(5);
    p5.stroke(255);
    p5.noFill();
    let hu = 0;
    p5.beginShape();
    for (let v of points) {
      p5.stroke(hu, 255, 255);
      p5.vertex(v.x, v.y, v.z);
      hu += 1;
      if (hu > 255) {
        hu = 0;
      }
    }
    p5.endShape();
  };

  return (
    <Sketch
      setup={setup}
      draw={draw}
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    />
  );
}
