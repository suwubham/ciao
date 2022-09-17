import { useRef, useEffect } from "react";
import p5 from "p5";
let a = [];
export default function Tree(props) {
  const containerRef = useRef();

  const Sketch = (p5) => {
    p5.setup = () => {
      p5.print("Tree Initializing");
      p5.createCanvas(800, 700);
      p5.angleMode(p5.DEGREES);
      p5.noLoop();
    };

    p5.draw = () => {
      p5.background(255, 194, 209);
      p5.translate(p5.width / 2, p5.height / 2 + 200);
      p5.branch(props.text);
    };

    p5.branch = (len) => {
      p5.push();
      if (len > 10) {
        p5.strokeWeight(p5.map(len, 10, 100, 1, 15));
        p5.stroke(70, 40, 20);
        p5.line(0, 0, 0, -len);
        p5.translate(0, -len);
        p5.rotate(p5.random(-20, -30));
        p5.branch(len * p5.random(0.7, 0.9));
        p5.rotate(p5.random(50, 60));
        p5.branch(len * p5.random(0.7, 0.9));
      } else {
        p5.fill(
          p5.random(80, 100),
          p5.random(100, 140),
          p5.random(20, 80),
          200
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
  };

  useEffect(() => {
    let inst = new p5(Sketch, containerRef.current);
    return () => inst.remove();
  }, [props.text]);

  return <div ref={containerRef}></div>;
}
