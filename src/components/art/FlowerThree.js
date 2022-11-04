import { useRef, useEffect } from "react";
import p5 from "p5";
export default function Rdraw(props) {
  let a = 0;
  let canvas;
  const containerRef = useRef();
  const Sketch = (p5) => {
    p5.keyPressed = () => {
      if (p5.key === "a") {
        p5.saveCanvas("myCanvas", "jpg");
      }
    };
    p5.setup = () => {
      p5.createCanvas(props.resolution.x,props.resolution.y, p5.WEBGL);
      p5.colorMode("RGB");
      p5.angleMode(p5.DEGREES);
      p5.stroke(props.border.rgb.r, props.border.rgb.g, props.border.rgb.b);
      p5.strokeWeight(6);
      // p5.background(
      //   props.background.rgb.r,
      //   props.background.rgb.g,
      //   props.background.rgb.b
      // );
    };

    p5.draw = () => {
      //   p5.background(75,79,51);
      p5.background(
        props.background.rgb.r,
        props.background.rgb.g,
        props.background.rgb.b
      );
      p5.orbitControl(4, 4);
      p5.rotateX(props.rotate);
      p5.rotateZ(a);

      p5.frameRate(props.increment);
      //translate(width/2,height/2);
      p5.beginShape(p5.POINTS);
      for (let theta = 0; theta < 60; theta += 2) {
        for (let phi = 0; phi <= 360; phi += 0.9) {
          let r =
            ((70 * p5.pow(p5.abs(p5.sin((phi * 5) / 2)), 1) + 225) * theta) /
            60;
          let x = r * p5.cos(phi);
          let y = r * p5.sin(phi);
          //let bumpiness=2*pow(r/100,2)*sin(phi*12);
          //let z=300*pow(Math.E,-0.1*pow(abs(r/100),1.5))*pow(r/100,1/2)-200+bumpiness;
          let z =
            p5.vShape(300, r / 100, 0.8, 0.15, 1.5) -
            200 +
            p5.bumpiness(1.5, r / 100, 12, phi);
          p5.vertex(x, y, z);
        }
      }
      a += 30;
      p5.endShape();
    };

    p5.vShape = (A, r, a, b, c) => {
      return (
        A * p5.pow(Math.E, -b * p5.pow(p5.abs(r), c)) * p5.pow(p5.abs(r), a)
      );
    };
    p5.bumpiness = (A, r, f, angle) => {
      return 1 + A * p5.pow(r, 2) * p5.sin(f * angle);
    };
  };

  useEffect(() => {
    let inst = new p5(Sketch, containerRef.current);
    return () => inst.remove();
  }, [props]);

  return <div ref={containerRef}></div>;
}
