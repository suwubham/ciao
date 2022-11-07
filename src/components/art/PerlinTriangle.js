import { useRef, useEffect } from "react";
import p5 from "p5";
export default function Rdraw(props) {
  let rez = 40;
  let size = props.size;
  const containerRef = useRef();
  const Sketch = (p5) => {
    p5.keyPressed = () => {
      if (p5.key === "a") {
        p5.saveCanvas("myCanvas", "jpg");
      }
    };

    p5.setup = () => {
      p5.createCanvas(props.resolution.x,props.resolution.y);
      p5.colorMode(p5.RGB);
      p5.colorStart = p5.random(260);
      p5.noLoop();
      // p5.background(
      //     props.background.rgb.r,
      //     props.background.rgb.g,
      //     props.background.rgb.b
      //   );
    };
    p5.draw = () => {
      // p5.background(255);
      for (var i = 0; i < p5.width; i += size) {
        for (var j = 0; j < p5.height; j += size) {
          var n1 = p5.noise(i * rez, j * rez);
          var n2 = p5.noise(i * rez + 10000, j * rez + 10000);
          if (n1 < 0.5) {
            p5.fill(p5.floor(n1 * 100) + p5.colorStart, 100, 100, 100);
            p5.fill(
              props.triangle1.rgb.r,
              props.triangle1.rgb.g,
              props.triangle1.rgb.b,
              props.alpha
            );
            p5.triangle(i, j, i + size, j + size, i, j + size);
            p5.fill(
              p5.floor(100 - n1 * 100) + p5.colorStart,
              100,
              100,
              props.alpha
            );
            p5.triangle(i, j, i + size, j + size, i + size, j);
          } else {
            p5.fill(p5.floor(n2 * 100) + p5.colorStart, 100, 100, props.alpha);
            p5.triangle(i + size, j, i, j + size, i, j);
            p5.fill(
              p5.floor(100 - n2 * 100) + p5.colorStart,
              100,
              100,
              props.alpha
            );
            p5.fill(
              props.triangle2.rgb.r,
              props.triangle2.rgb.g,
              props.triangle2.rgb.b,
              props.alpha
            );

            p5.triangle(i + size, j, i, j + size, i + size, j + size);
          }
        }
      }
    };
  };

  useEffect(() => {
    let inst = new p5(Sketch, containerRef.current);
    return () => inst.remove();
  }, [props]);

  return <div ref={containerRef}></div>;
}
