import { useRef, useEffect } from "react";
import p5 from "p5";

export default function Rbox(props) {
  const containerRef = useRef();
  let size = props.increment;
  let x;
  let y;
  let c;
  const Sketch = (p5) => {
    p5.keyPressed = () => {
      if (p5.key === "a") {
        p5.saveCanvas("myCanvas", "jpg");
      }
    };

    p5.setup = () => {
      p5.createCanvas(props.resolution.x,props.resolution.y);
      // p5.saveButton = p5.createButton("save jpg");
      // //  p5.saveButton.p5.position(10, p5.height+10);
      //  p5.saveButton.p5.mousePressed(p5.saveArt);
      p5.angleMode(p5.DEGREES);
      p5.strokeWeight(props.bold); //1-10
      p5.background(
        props.background.rgb.r,
        props.background.rgb.g,
        props.background.rgb.b
      );
      for (x = -size; x < p5.width; x += size) {
        for (y = -size; y < p5.height; y += size) {
          p5.fill(
            p5.random(props.border.rgb.r),
            p5.random(props.border.rgb.g),
            p5.random(props.border.rgb.b)
          ); //20,60,255
          c = p5.random(0, 4);
          p5.push();
          p5.translate(x + size / 2, y + size / 2);
          p5.rotate(p5.floor(p5.random(2)) * 45);
          if (c < 1) {
            p5.rect(-size / 2, -size / 2, size / 2, size / 2);
          } else if (c < 2) {
            p5.rect(0, 0, size, size / 2);
          } else if (c < 3) {
            p5.rect(size / 2, -size / 2, size, size);
          } else if (c < 4) {
            p5.rect(0, 0, size * 2, size * 2);
          }
          p5.pop();
        }
      }
    };

    // p5.saveArt = () => {
    //     p5.save("myCanvas.jpg");
    // }
  };

  useEffect(() => {
    let inst = new p5(Sketch, containerRef.current);
    return () => inst.remove();
  }, [props]);

  return <div ref={containerRef}></div>;
}
