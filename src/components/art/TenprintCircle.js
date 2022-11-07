import { useRef, useEffect } from "react";
import p5 from "p5";
export default function Printcircle(props) {
  const containerRef = useRef();
  let a = props.increment; //4-7
  let x = 5;
  let y = 0;
  let spacing = props.space; //5-30
  const Sketch = (p5) => {
    p5.keyPressed = () => {
      if (p5.key === "a") {
        p5.saveCanvas("myCanvas", "jpg");
      }
    };

    p5.setup = () => {
      p5.createCanvas(props.resolution.x,props.resolution.y);
      p5.colorMode("RGB");
      p5.background(
        props.background.rgb.r,
        props.background.rgb.g,
        props.background.rgb.b
      );
    };

    p5.draw = () => {
      p5.stroke(p5.mouseX, 0, p5.mouseY);
      if (p5.random(1) < 0.1 * a) {
        p5.fill(props.border.rgb.r, props.border.rgb.g, props.border.rgb.b);
        p5.circle(x + 3, y + 2, spacing);
      } else {
        // line(x,y+spacing,x+spacing,y);
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
