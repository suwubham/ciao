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
      p5.createCanvas(img.width, img.height);
      for (let col = 0; col < img.width; col += 10) {
        for (let row = 0; row < img.height; row += 10) {
          let c = img.get(col, row);
          p5.stroke(p5.color(c));
          p5.strokeWeight(10);
          p5.point(col, row);
        }
      }
    };

    p5.draw = () => {};
  };

  useEffect(() => {
    let inst = new p5(Sketch, containerRef.current);
    return () => inst.remove();
  }, [props]);

  return <div ref={containerRef}></div>;
}
