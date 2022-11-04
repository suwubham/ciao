import { useRef, useEffect } from "react";
import p5 from "p5";

export default function Tree(props) {
  var n = 1;
  var c = props.pgap;
  var col = 1;
  const containerRef = useRef();
  const Sketch = (p5) => {
    p5.setup = () => {
      p5.createCanvas(props.resolution.x, props.resolution.y);
      p5.angleMode(p5.DEGREES);
      p5.background(
        props.background.rgb.r,
        props.background.rgb.g,
        props.background.rgb.b
      );
      p5.colorMode(p5.HSB);
    };

    p5.draw = () => {
      p5.translate(p5.width / 2, p5.height / 2);
      var a = n * 137.5;
      var r = c * p5.sqrt(n);
      var x = r * p5.cos(a);
      var y = r * p5.sin(a);
      p5.fill(col % 256, 255, 255);
      p5.noStroke();
      p5.circle(x, y, props.pradius);
      n++;
      col++;
    };

    p5.keyPressed = () => {
      if (p5.key === "a") {
        p5.saveCanvas("myCanvas", "jpg");
      }
    };
  };

  useEffect(() => {
    let inst = new p5(Sketch, containerRef.current);
    return () => inst.remove();
  }, [props.background, props.pradius, props.pgap, props.resolution]);

  return <div ref={containerRef}></div>;
}
