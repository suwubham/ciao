import { useRef, useEffect } from "react";
import p5 from "p5";

export default function Tdraw(props) {
  const containerRef = useRef();
  let b = 10;
  let a = props.incline; //inclination
  let x = 0;
  let y = 0;
  let spacing = props.space;
  const Sketch = (p5) => {
    p5.keyPressed = () => {
      if (p5.key === "a") {
        p5.saveCanvas("myCanvas", "jpg");
      }
    };
    p5.setup = () => {
      p5.createCanvas(props.resolution.x,props.resolution.y);
      p5.background(
        props.background.rgb.r,
        props.background.rgb.g,
        props.background.rgb.b
      );
    };

    p5.draw = () => {
      p5.stroke(props.border.rgb.r, props.border.rgb.g, props.border.rgb.b);
      if (p5.random(1) < 0.1 * a) {
        p5.line(x, y, x + spacing, y + spacing);
      } else {
        p5.line(x, y + spacing, x + spacing, y);
      }
      x = x + spacing;
      if (x > p5.width) {
        x = 0;
        y = y + spacing;
      }
    };
  };

  useEffect(() => {
    let inst = new p5(Sketch, containerRef.current);
    return () => inst.remove();
  }, [props]);

  return <div ref={containerRef}></div>;
}
