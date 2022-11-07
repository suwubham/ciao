import { useRef, useEffect } from "react";
import p5 from "p5";
export default function Rdraw(props) {
  // var slider;
  var symmetry = props.symmetry;
  // var button;
  var saveButton;
  var clearButton;
  // var slider;
  var angle;

  const containerRef = useRef();
  const Sketch = (p5) => {
    p5.setup = () => {
      p5.createCanvas(props.resolution.x,props.resolution.y);
      p5.angleMode(p5.DEGREES);
      p5.background(
        props.background.rgb.r,
        props.background.rgb.g,
        props.background.rgb.b
      );
      p5.translate(p5.width / 2, p5.height / 2);
      p5.createP("Clear your canvas");
      clearButton = p5.createButton("clear");
      clearButton.mousePressed(p5.clearCanvas);
      //    slider=createSlider(2,101,100,1);
      //slider.position(1900,1610);
      // slider.style('width', '800px','900px');
    };

    p5.draw = () => {
      //background(0);
      //  symmetry=slider.value();
      let angle = 360 / symmetry;
      p5.translate(p5.width / 2, p5.height / 2);
      let mx = p5.mouseX - p5.width / 2;
      let my = p5.mouseY - p5.height / 2;
      let pmx = p5.pmouseX - p5.width / 2;
      let pmy = p5.pmouseY - p5.height / 2;

      for (let i = 0; i < symmetry; i++) {
        p5.rotate(angle);
        p5.stroke(255, 0, 0);
        p5.strokeWeight(3 / 499);
        p5.line(0, 0, p5.width, 0);
      }

      if (p5.mouseIsPressed) {
        p5.stroke(props.border.rgb.r, props.border.rgb.g, props.border.rgb.b);
        let angle = 360 / symmetry;
        for (let i = 0; i < symmetry; i++) {
          p5.push();
          p5.rotate(angle * i);
          if (i % 2 == 1) {
            p5.scale(-1, 1);
          }
          p5.strokeWeight(props.bold);
          p5.line(mx, my, pmx, pmy);
          p5.pop();
        }
      }
    };
    p5.keyPressed = () => {
      if (p5.key === "a") {
        p5.saveCanvas("myCanvas", "jpg");
      }
    };
    p5.clearCanvas = () => {
      p5.background(0);
      for (let i = 0; i < symmetry; i++) {
        p5.rotate(angle);
        p5.line(0, 0, p5.width, 0);
      }
    };
  };

  useEffect(() => {
    let inst = new p5(Sketch, containerRef.current);
    return () => inst.remove();
  }, [props]);

  return <div ref={containerRef}></div>;
}
