import React from "react";
import Sketch from "react-p5";

const branch = (p5, len) => {
  p5.push();
  if (len > 10) {
    p5.strokeWeight(p5.map(len, 10, 100, 1, 15));
    p5.stroke(70, 40, 20);
    p5.line(0, 0, 0, -len);
    p5.translate(0, -len);
    p5.rotate(30);
    branch(p5, len * p5.random(0.7, 0.9));
    p5.rotate(p5.random(-50, -50));
    branch(p5, len * p5.random(0.7, 0.9));
  } else {
    p5.noStroke();
    p5.fill(p5.random(60, 100), p5.random(100, 140), p5.random(20, 80), 200);
    p5.beginShape();
    for (let i = 45; i < 135; i++) {
      var rad = 15;
      var x = rad * p5.cos(i);
      var y = rad * p5.sin(i);
      p5.vertex(x, y);
    }
    p5.endShape(p5.CLOSE);
  }
  p5.pop();
};

export default function Tree() {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(500, 500).parent(canvasParentRef);
    p5.angleMode(p5.DEGREES);
    p5.noLoop();
  };

  const draw = (p5) => {
    p5.background(100);
    p5.translate(p5.width / 2, p5.height / 2 + 200);
    branch(p5, 100);
  };

  return (
    <Sketch
      setup={setup}
      draw={draw}
      branch={branch}
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    />
  );
}
