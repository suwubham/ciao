import React from "react";
import { useRef, useEffect } from "react";
import p5 from "p5";

export default function FromImage(props) {
  const containerRef = useRef();
  const density = "Ñ@#W$9876543210?!abc;:+=-,._ ";
  let gloria;

  const Sketch = (p5) => {
    p5.preload = () => {
      gloria = p5.loadImage(props.src);
    };

    p5.setup = () => {
      // p5.createCanvas(100,100);
      p5.noCanvas();
      gloria.resize(200,143);
      //gloria.resize(gloria.width, gloria.height);
      gloria.loadPixels();
      for (let j = 0; j < gloria.height; j++) {
        let row = "";
        for (let i = 0; i < gloria.width; i++) {
          const pixelIndex = (i + j * gloria.width) * 4;
          const r = gloria.pixels[pixelIndex + 0];
          const g = gloria.pixels[pixelIndex + 1];
          const b = gloria.pixels[pixelIndex + 2];

          const avg = (r + g + b) / 3;

          const len = density.length;
          const charIndex = p5.floor(p5.map(avg, 0, 255, len, 0));

          const c = density.charAt(charIndex);
          if (c === " ") row += "&nbsp;";
          else row += c;
        }
        p5.createDiv(row);
      }
    };
  };

  useEffect(() => {
    let inst = new p5(Sketch, containerRef.current);
    return () => inst.remove();
  });

  return <div ref={containerRef}></div>;
}
