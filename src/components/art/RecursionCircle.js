import { useRef, useEffect } from "react";
import p5 from "p5";

export default function Rcircle(props) {
  const containerRef = useRef();
  let a = 5; //1-5
  let b = 5; //expansion in y asix
  let iteration = props.increment / 100;
  let c = iteration;
  const Sketch = (p5) => {
    p5.keyPressed = () => {
      if (p5.key === "a") {
        p5.saveCanvas("myCanvas", "jpg");
      }
    };

    p5.setup = () => {
      p5.createCanvas(props.resolution.x, props.resolution.y);
      p5.angleMode(p5.DEGREES);
      p5.background(
        props.background.rgb.r,
        props.background.rgb.g,
        props.background.rgb.b
      ); //26
      p5.stroke(props.border.rgb.r, props.border.rgb.g, props.border.rgb.b); //257,16,100
      p5.strokeWeight(props.bold / 100);
      p5.noFill();
      p5.drawCircle(300, 300, 200);
    };

    p5.drawCircle = (x, y, d) => {
      p5.ellipse(x, y, d);
      if (d > 2) {
        p5.drawCircle(x + d * a * 0.1, y, d * c); //number of iteration
        p5.drawCircle(x - d * a * 0.1, y, d * c);
        p5.drawCircle(x, y + d * b * 0.1, d * c); //20-60
        // p5.drawCircle(x,y-d*0.61,d*0.6);
      }
    };
  };

  useEffect(() => {
    let inst = new p5(Sketch, containerRef.current);
    return () => inst.remove();
  }, [props]);

  return <div ref={containerRef}></div>;
}
