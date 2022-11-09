//using perlin noise randomness
import { useRef, useEffect } from "react";
import p5 from "p5";

export default function Pdraw(props) {
  const containerRef = useRef();
  let rez = 0.5; //0.5 resolution number //how quickly perlin noise changes
  let t = 10;
  const Sketch = (p5) => {
    p5.keyPressed = () => {
      if (p5.key === "a") {
        p5.saveCanvas("myCanvas", "jpg");
      }
    };

    p5.setup = () => {
      p5.createCanvas(props.resolution.x,props.resolution.y);
    };

    p5.draw = () => {
      p5.background(
        props.background.rgb.r,
        props.background.rgb.g,
        props.background.rgb.b
      );
      let space = props.size; //change in shape and size number results in star like pattern
      let size = props.size;
      for (let i = 0; i < p5.width; i += space) {
        for (let j = 0; j < p5.height; j += space) {
          let n = p5.noise(i * rez, j * rez, t);
          //n = random(1);      //creates randomness
          //stroke(n*255,n*255,n*255,255);
          p5.stroke(props.border.rgb.r, props.border.rgb.g, props.border.rgb.b); //color
          //fill(n*200,n*205,n*100,105);
          p5.strokeWeight(props.bold); //how dark will the line be 3
          if (n < 0.5) {
            p5.line(i, j, i + size, j + size); //one side line will dissaper
          } else {
            p5.line(i + size, j, i, j + size);
          }
        }
        t += props.increment / 100000; //moment 0.00003
      }
    };
  };

  useEffect(() => {
    let inst = new p5(Sketch, containerRef.current);
    return () => inst.remove(); // eslint-disable-next-line
  }, [props]);

  return <div ref={containerRef}></div>;
}
