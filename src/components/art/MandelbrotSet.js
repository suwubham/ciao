import { useRef, useEffect } from "react";
import p5 from "p5";

export default function Mdraw(props) {
  const containerRef = useRef();
  const Sketch = (p5) => {
    p5.keyPressed = () => {
      if (p5.key === "a") {
        p5.saveCanvas("myCanvas", "jpg");
      }
    };

    p5.setup = () => {
      p5.createCanvas(props.resolution.x,props.resolution.y);
      p5.pixelDensity(1);
      p5.noLoop();
    };

    p5.draw = () => {
      p5.background(
        props.background.rgb.r,
        props.background.rgb.g,
        props.background.rgb.b
      );
      p5.loadPixels();
      const maxiterations = props.increment; //increment
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
            p5.pixels[pix + 3] = props.transparency; //100-250
          }
        }
      }
      p5.updatePixels();
    };
  };

  useEffect(() => {
    let inst = new p5(Sketch, containerRef.current);
    return () => inst.remove();
  }, [props]);

  return <div ref={containerRef}></div>;
}
