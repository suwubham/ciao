//using perlin noise randomness
import { useRef, useEffect } from "react";
import p5 from "p5";

export default function Tree(props) {
  const containerRef = useRef();
  let rez = 0.5; //resolution number //how quickly perlin noise changes
  let t = 1;
  const Sketch = (p5) => {
    p5.setup = () => {
      p5.createCanvas(600, 600);
    };

    p5.draw = () => {
      p5.background(203);
      let space = 20; //change in shape and size number results in star like pattern
      let size = 20;
      for (let i = 0; i < p5.width; i += space) {
        for (let j = 0; j < p5.height; j += space) {
          let n = p5.noise(i * rez, j * rez, t);
          //n = random(1);      //creates randomness
          //stroke(n*255,n*255,n*255,255);
          p5.stroke(200, 55, 11); //color
          //fill(n*200,n*205,n*100,105);
          p5.strokeWeight(3); //how dark will the line be
          if (n < 0.5) {
            p5.line(i, j, i + size, j + size); //one side line will dissaper
          } else {
            p5.line(i + size, j, i, j + size);
          }
        }
        t += 0.00003; //moment
      }
    };
  };

  useEffect(() => {
    let inst = new p5(Sketch, containerRef.current);
    return () => inst.remove();
  }, [props]);

  return <div ref={containerRef}></div>;
}
