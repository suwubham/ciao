import React from "react";
import { useRef, useEffect } from "react";
import p5 from "p5";

export default function FromImage(props) {
  const containerRef = useRef();
  let smallPoint, largePoint;
  const Sketch = (p5) => {
    let img;
    p5.preload = () => {
      img = p5.loadImage(props.src);
    };

    p5.keyPressed = () => {
      if (p5.key === "d") {
        p5.saveCanvas("myCanvas", "jpg");
      }
    };

    p5.setup = () => {
      p5.createCanvas(img.width, img.height);
      smallPoint = 10;
      largePoint = 20;
      p5.imageMode(p5.CENTER);
      p5.noStroke();
      p5.background(255);
      img.loadPixels();
      p5.noLoop();
    };

    p5.draw = () => {
      p5.background(225, 27, 10, 100);
      for (let i = 0; i < 100000; i++) {
        let pointillize = p5.map(
          p5.mouseX,
          0,
          p5.width,
          smallPoint,
          largePoint
        );
        let x = p5.floor(p5.random(img.width));
        let y = p5.floor(p5.random(img.height));
        let pix = img.get(x, y);
        p5.fill(pix, 128);
        p5.ellipse(x, y, pointillize, pointillize);
      }
    };
    p5.keyPressed = () => {
      if (p5.key === "d") {
        p5.saveCanvas("myCanvas", "jpg");
      }
    };
  };

  useEffect(() => {
    let inst = new p5(Sketch, containerRef.current);
    return () => inst.remove();
  }, [props]);

  return <div ref={containerRef}></div>;
}
