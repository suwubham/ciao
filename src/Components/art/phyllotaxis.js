import React from "react";
import Sketch from "react-p5";

var n = 0;
var c = 4;

export default function phyllotaxis() {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(500, 400).parent(canvasParentRef);
    p5.angleMode(p5.DEGREES);
    p5.colorMode(p5.HSB);
    p5.background(0);
  };

  const draw = (p5) => {
    var a = n * 137.5;
    var r = c * p5.sqrt(n);
    var x = r * p5.cos(a) + p5.width / 2;
    var y = r * p5.sin(a) + p5.height / 2;
    p5.fill(n % 256, 255, 255);
    p5.noStroke();
    p5.ellipse(x, y, 4, 4);
    n++;
  };

  return <Sketch setup={setup} draw={draw} />;
}
