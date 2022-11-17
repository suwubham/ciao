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
      img.resize(p5.windowWidth / 2, 0);
      p5.createCanvas(img.width, img.height);
      p5.fill(255);
      p5.noLoop();
    };

    p5.draw = () => {
      p5.image(p5.imageNoise(img, 1), 0, 0);
    };
    p5.imageNoise = (img, quantity = 0.5) => {
      let imgOut = img.get();
      imgOut.loadPixels();
      for (let i = 0; i < 20000000; i += 3) {
        imgOut.pixels[i] += p5.round(quantity * 255 * (p5.random(1) - 0.5));
        imgOut.pixels[i + 1] += p5.round(quantity * 255 * (p5.random(1) - 0.5));
        imgOut.pixels[i + 2] += p5.round(quantity * 255 * (p5.random(1) - 0.5));
        imgOut.pixels[i + 3] += p5.round(quantity * 255 * (p5.random(1) - 0.5));
      }
      imgOut.updatePixels();
      return imgOut;
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
