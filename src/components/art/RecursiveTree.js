import { useRef, useEffect } from "react";
import p5 from "p5";

export default function Tree(props) {
  const containerRef = useRef();
  const Sketch = (p5) => {
    p5.keyPressed = () => {
      if (p5.key === "a") {
        p5.saveCanvas("myCanvas", "jpg");
      }
    };

    p5.setup = () => {
      p5.createCanvas(props.resolution.x, props.resolution.y);
      p5.angleMode(p5.DEGREES);
      p5.noLoop();
    };

    p5.draw = () => {
      p5.background(
        props.background.rgb.r,
        props.background.rgb.g,
        props.background.rgb.b
      );
      p5.translate(p5.width / 2, p5.height / 2 + p5.height / 2.6);
      p5.branch(props.branch);
    };

    p5.branch = (len) => {
      p5.push();
      if (len > 10) {
        p5.strokeWeight(p5.map(len, 10, 100, 1, 15));
        p5.stroke(props.trunk.rgb.r, props.trunk.rgb.g, props.trunk.rgb.b);
        p5.line(0, 0, 0, -len);
        p5.translate(0, -len);
        p5.rotate(p5.random(-20, -30));
        p5.branch(len * p5.random(0.7, 0.9));
        p5.rotate(p5.random(50, 60));
        p5.branch(len * p5.random(0.7, 0.9));
      } else {
        p5.fill(
          p5.random(props.leaf.rgb.r - 20, props.leaf.rgb.r + 20),
          p5.random(props.leaf.rgb.g - 20, props.leaf.rgb.g + 20),
          p5.random(props.leaf.rgb.b - 20, props.leaf.rgb.b + 20)
        );
        p5.noStroke();
        p5.beginShape();
        for (let i = 0; i < 135; i++) {
          let rad = 15;
          let x = rad * p5.cos(i);
          let y = rad * p5.sin(i);
          p5.vertex(x, y);
        }
        p5.endShape(p5.CLOSE);
      }
      p5.pop();
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
  }, [props]);

  return <div ref={containerRef}></div>;
}
