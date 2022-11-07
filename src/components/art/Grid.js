//patterns on a grid system (vertical and horizontal lines )
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
      p5.createCanvas(props.resolution.x,props.resolution.y);
      // p5.fill(200,50,40);
      p5.strokeWeight(props.bold / 10); //create line 1-30
      p5.rectMode(1);
      let space = 20; //20
      for (let x = 0; x < p5.width + 50; x += space) {
        //starts from top left part of canvas             //grid width
        for (let y = 0; y < p5.height + 50; y += space) {
          // height
          p5.stroke(props.border.rgb.r, props.border.rgb.g, props.border.rgb.b);
          p5.line(x, y, x + space, y); //row line
          p5.stroke(props.border.rgb.r, props.border.rgb.g, props.border.rgb.b);
          p5.line(x, y, x, y + space); //column line
          p5.stroke(props.border.rgb.r, props.border.rgb.g, x / 2);
          p5.square(x, y, 10); //squares of the box edges
          p5.fill(
            props.background.rgb.r,
            p5.map(y, 0, 1000, 0, 244),
            props.background.rgb.b
          ); //map creates
          p5.square(x + space / 2, y + space / 2, 10); //squares of the box at the center
        }
      }
    };
  };

  useEffect(() => {
    let inst = new p5(Sketch, containerRef.current);
    return () => inst.remove();
  }, [props]);

  return <div ref={containerRef}></div>;
}
