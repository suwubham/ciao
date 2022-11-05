import { useRef, useEffect } from "react";
import p5 from "p5";

export default function Rdraw(props) {
  const containerRef = useRef();
  let minYchange = 5; //these two ranges determine line overlap and width
  let maxYchange = props.increment; //5,50,150,increment
  let layers = props.layer; //15-50
  let rotStripe = props.rotate; //rotation of each stripe; try 10 or 90;
  // try lines = true with high alph or lines = false with low alph (100)
  let lines = true;
  let alph = 250; //out of 255
  let colRand = false; //true = random color; false = color from palette table
  let filling = true;
  let colorLines = false; //false for black lines
  let sw = props.bold / 10; //line width,0-30
  let extraBlack = 0; //1 for some black line and white fills; 0 for neither; -2 for fewer colors;
  let extraBlackAlph = 255; //out of 255 - used if extraBlack=1 & lines, filling, colorLines all true, low alph, high sw
  let r, g, b;
  // let table;

  const Sketch = (p5) => {
    p5.keyPressed = () => {
      if (p5.key === "a") {
        p5.saveCanvas("myCanvas", "jpg");
      }
    };
    // p5.preload = () => {
    //   p5.table = p5.loadTable("../../data/colors.csv", "csv", "header");
    // };

    p5.setup = () => {
      p5.createCanvas(props.resolution.x,props.resolution.y); // eslint-disable-next-line
      if (lines == true) {
        p5.stroke(
          props.border.rgb.r,
          props.border.rgb.g,
          props.border.rgb.b,
          extraBlackAlph
        );
        p5.strokeWeight(sw);
      } else {
        p5.noStroke();
      }
      p5.angleMode(p5.DEGREES);
      let end = p5.height / 2 + 500; //where lines stop
      // let palette = p5.floor(p5.random(676));
      for (let i = 0; i < layers; i++) {
        let y1; // eslint-disable-next-line
        if (i == 0) {
          y1 = -p5.height / 2 - 300;
        } else {
          y1 = -p5.height / 2 + (p5.height / layers) * i;
        }
        //starting height for each layer
        let y2 = y1,
          y3 = y1,
          y4 = y1,
          y5 = y1,
          y6 = y1;
        let rotLayer = p5.random(359); //layer rotation
        let rotThisStripe = 0;
        //keep going until all the lines are at the bottom
        while (
          (y1 < end) &
          (y2 < end) &
          (y3 < end) &
          (y4 < end) &
          (y5 < end) &
          (y6 < end) &
          (-maxYchange < minYchange)
        ) {
          y1 += p5.random(minYchange, maxYchange);
          y2 += p5.random(minYchange, maxYchange);
          y3 += p5.random(minYchange, maxYchange);
          y4 += p5.random(minYchange, maxYchange);
          y5 += p5.random(minYchange, maxYchange);
          y6 += p5.random(minYchange, maxYchange); // eslint-disable-next-line
          if (colRand == true) {
            r = p5.random(256);
            g = p5.random(256);
            b = p5.random(256);
          } else {
            // eslint-disable-next-line
            let col = p5.floor(p5.random(5 + extraBlack));
            r = p5.random(256);
            g = p5.random(256);
            b = p5.random(256);
            // r = p5.get(table, palette, col * 3);
            // g = p5.get(table, palette, col * 3 + 1);
            // b = p5.get(table, palette, col * 3 + 2);
          } // eslint-disable-next-line
          if (filling == true) {
            p5.fill(r, g, b, alph);
          } else {
            p5.noFill();
          } // eslint-disable-next-line
          if (colorLines == true) {
            p5.stroke(r, g, b, alph);
          }
          p5.push();
          p5.translate(p5.width / 2, p5.height / 2);
          rotThisStripe += rotStripe; //rotating after each stripe
          p5.rotate(rotThisStripe + rotLayer);
          let xStart = -p5.width / 2;
          p5.beginShape();
          p5.curveVertex(xStart - 300, p5.height / 2 + 500);
          p5.curveVertex(xStart - 300, y1);
          p5.curveVertex(xStart + (p5.width / 5) * 1, y2);
          p5.curveVertex(xStart + (p5.width / 5) * 2, y3);
          p5.curveVertex(xStart + (p5.width / 5) * 3, y4);
          p5.curveVertex(xStart + (p5.width / 5) * 4, y5);
          p5.curveVertex(p5.width / 2 + 300, y6);
          p5.curveVertex(p5.width / 2 + 300, p5.height / 2 + 500);
          p5.endShape(p5.CLOSE);
          p5.pop();
        }
      }
    };
  };

  useEffect(() => {
    let inst = new p5(Sketch, containerRef.current);
    return () => inst.remove(); // eslint-disable-next-line
  }, [props]);

  return <div ref={containerRef}></div>;
}
