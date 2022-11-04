import { useRef, useEffect } from "react";
import p5 from "p5";

export default function Adraw(props) {
  const containerRef = useRef();
  let f = props.size; //font for asii code-50
  let col = ["red", "yellow", "green", "orange", "purple"]; //array // colors

  const Sketch = (p5) => {
    p5.setup = () => {
      p5.createCanvas(props.resolution.x,props.resolution.y); //size
      p5.background(
        props.background.rgb.r,
        props.background.rgb.g,
        props.background.rgb.b
      ); //Sets color for the background RGB
      //background(random(255));
      p5.textSize(f);
      for (let x = 0; x < p5.width + f; x += f * 0.7) {
        //grid loop
        for (let y = 0; y < p5.height + f; y += f * 1.2) {
          let c = p5.random(3);
          p5.stroke(col[p5.floor(p5.random(5))]); //stroke = color for the outline of shapes
          p5.fill(col[p5.floor(p5.random(5))]); //fill = color for inside
          // colSel = col[floor(random(5))]
          // stroke(colSel);
          // fill(colSel);
          if (c < 1) {
            p5.text("░", x, y); //these patters are from ASCII code box
          } else if (c < 2) {
            p5.text("▒", x, y);
          } else if (c < 3) {
            p5.text("▓", x, y);
          } else if (c < 4) {
            p5.text("█", x, y);
          }
        }
      }
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
