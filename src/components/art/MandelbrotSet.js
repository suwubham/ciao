import React from "react";
import Sketch from "react-p5";

export default function Mandelbrot() {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(1000, 1000).parent(canvasParentRef);
    p5.pixelDensity(1);
    p5.noLoop();
  };

  const draw = (p5) => {
    p5.background(0);
    p5.loadPixels();
    const maxiterations = 100;
    for (let x = 0; x < p5.width; x++) {
      for (let y = 0; y < p5.height; y++) {
        let a = p5.map(x, 0, p5.width, -2, 2);
        let b = p5.map(y, 0, p5.height, -2, 2);
        let n = 0;
        let ca = a;
        let cb = b;
        while (n < maxiterations) {
          const aa = a * a - b * b;
          const bb = 2 * a * b;
          a = aa + ca;
          b = bb + cb;
          if (p5.abs(a + b) > 16) {
            break;
          }
          n++;
        }

        let bright = p5.map(n, 0, 100, 0, 255);
        let pix = (x + y * p5.width) * 4;
        if (n == maxiterations) {
          bright = 0;
        } else {
          p5.pixels[pix + 0] = bright;
          p5.pixels[pix + 1] = p5.map(bright, 10, 100, 0, 255);
          p5.pixels[pix + 2] = bright;
          p5.pixels[pix + 3] = 255;
        }
      }
    }
    p5.updatePixels();
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
