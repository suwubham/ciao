import { useRef, useEffect } from "react";
import p5 from "p5";

export default function Rdraw(props) {
  const containerRef = useRef();
  let x = 0.01; //0.01
  let y = 0;
  let z = 0;

  let a = 10; //10
  let b = 28;
  let c = 8 / 3.0; //8/3

  let points = new Array();

  const Sketch = (p5) => {
    p5.keyPressed = () => {
      if (p5.key === "a") {
        p5.saveCanvas("myCanvas", "jpg");
      }
    };
    p5.setup = () => {
      p5.createCanvas(props.resolution.x,props.resolution.y, p5.WEBGL);
      p5.colorMode(p5.RGB);
    };

    p5.draw = () => {
      p5.background(
        props.background.rgb.r,
        props.background.rgb.g,
        props.background.rgb.b
      );

      p5.orbitControl(4, 4);
      p5.frameRate(props.increment); //40-100
      let dt = 0.01; //0.01
      let dx = a * (y - x) * dt;
      let dy = (x * (b - z) - y) * dt;
      let dz = (x * y - c * z) * dt;
      x += dx;
      y += dy;
      z += dz;
      points.push(p5.createVector(x, y, z));
      p5.translate(0, 0, -80); //-80
      p5.scale(props.size * 0.1); //5-9
      p5.stroke(255);
      p5.noFill();
      let hu = 0;
      p5.beginShape();
      for (let v of points) {
        p5.stroke(hu, 255, 255);
        p5.vertex(v.x, v.y, v.z);
        hu += 1;
        if (hu > 255) {
          hu = 0;
        }
      }
      p5.endShape();
    };
  };

  useEffect(() => {
    let inst = new p5(Sketch, containerRef.current);
    return () => inst.remove();
  }, [props]);

  return <div ref={containerRef}></div>;
}
