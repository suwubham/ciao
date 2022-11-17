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
      //p5.createCanvas(300, 300);

      //img.resize(100, 100);

      img.loadPixels();
      // Loop over every pixel in the image
      for (let y = 0; y < img.height; y++) {
        for (let x = 0; x < img.width; x++) {
          // Read the pixel's color
          let originalColor = img.get(x, y);

          // Inverse the color

          const r = p5.blue(originalColor);
          const g = p5.green(originalColor);
          const b = p5.red(originalColor);
          let outputColor = p5.color(r, g, b);
          // filter(POSTERIZE,2);
          // Set the pixel's color
          img.set(x, y, outputColor);
        }
      }
      img.updatePixels();
    };

    p5.draw = () => {
      p5.image(img, 0, 0, p5.width, p5.height);
      p5.filter(p5.INVERT);
      p5.filter(p5.POSTERIZE, 9);
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
