import React from "react";
import { useRef, useEffect } from "react";
import p5 from "p5";

export default function FromImage(props) {
  const containerRef = useRef();

  const Sketch = (p5) => {
    let img;
    p5.preload = () => {
      img = p5.loadImage(props.src);
    };

    p5.setup = () => {
        img.resize(p5.windowWidth/3,0)
        p5.createCanvas(img.width,img.height);
        p5.textSize(40);
        p5.textStyle(p5.BOLD);
        p5.fill(255);
        p5.stroke(0);
        p5.strokeWeight(8);
        p5.noLoop();
    };

    p5.draw = () => {
        
     p5.background(255, 224, 130);
     p5.image(p5.imageLines(img,100,1), 0, 0);
    };
    p5.imageLines = (img, lines, thickness = 1) => {
      let imgIn = img.get();
      imgIn.resize(0, lines);
      imgIn.filter(p5.GRAY);
      imgIn.loadPixels();
      let path = [];
      let imgOut = p5.createGraphics(img.width, img.height);
      for (let y = 0; y < imgIn.height; y++) {
        path[y] = [];
        for (let x = 0; x < imgIn.width; x++) {
          let i = 4 * (x + y * imgIn.width);
          let v = 1 - imgIn.pixels[i] / 255;// eslint-disable-next-line
          if (x == 0) {
            path[y].push(p5.createVector(x - 2, y + 0.5 - thickness * (v / 2)));
            path[y].unshift(p5.createVector(x - 2, y + 0.5 + thickness * (v / 2)));
            path[y].push(p5.createVector(x, y + 0.5 - thickness * (v / 2)));
            path[y].unshift(p5.createVector(x, y + 0.5 + thickness * (v / 2)));
          }
          path[y].push(p5.createVector(x + 0.5, y + 0.5 - thickness * (v / 2)));
          path[y].unshift(p5.createVector(x + 0.5, y + 0.5 + thickness * (v / 2)));// eslint-disable-next-line
          if (x == imgIn.width - 1) {
            path[y].push(p5.createVector(x + 1, y + 0.5 - thickness * (v / 2)));
            path[y].unshift(p5.createVector(x + 1, y + 0.5 + thickness * (v / 2)));
            path[y].push(p5.createVector(x + 3, y + 0.5 - thickness * (v / 2)));
            path[y].unshift(p5.createVector(x + 2, y + 0.5 + thickness * (v / 2)));
          }
        }
      }
      imgOut.noStroke();
      imgOut.fill(0);
      let s = img.height / lines;
      for (let sh of path) {
        imgOut.beginShape();
        for (let p of sh) {
          imgOut.curveVertex(p.x * s, p.y * s);
        }
        imgOut.endShape(p5.CLOSE);
      }
      return imgOut;
    };
      


    p5.keyPressed = () => {// eslint-disable-next-line
      if (p5.key === "d") {
        p5.saveCanvas("myCanvas", "jpg");
      }
    };
  };

  useEffect(() => {
    let inst = new p5(Sketch, containerRef.current);
    return () => inst.remove();// eslint-disable-next-line
  }, [props.src]);

  return <div ref={containerRef}></div>;
}
