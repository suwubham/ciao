import { useRef, useEffect } from "react";
import p5 from "p5";
let a = 5;
let x = 0;
let y = 0;
let spacing = 10;
export default function Printcircle(props) {
  const containerRef = useRef();

  const Sketch = (p5) => {
    p5.setup = () => {
      p5.createCanvas(400, 400);
      p5.background(255);
    };

    p5.draw = () => {
      p5.stroke(p5.mouseX, 0, p5.mouseY);
      if (p5.random(1) < 0.1 * a) {
        p5.fill(p5.mouseX, 0, p5.mouseY);
        p5.circle(x + 20, y + 20, 10);
      } else {
        // line(x,y+spacing,x+spacing,y)
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
  }, [props.text]);

  return <div ref={containerRef}></div>;
}
