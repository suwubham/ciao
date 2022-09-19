import { useRef, useEffect } from "react";
import p5 from "p5";
let a=5;
let b=5;
export default function Rcircle(props) {
  const containerRef = useRef();

  const Sketch = (p5) => {
    p5.setup = () => {
        p5.createCanvas(600, 600);
    };

    p5.draw = () => {
        p5.background(26);
     p5.stroke(257,16,100);
     p5.noFill();
     p5.drawCircle(300,300,300);
    };

    p5.drawCircle = (x,y,d) => {
        p5.ellipse(x,y,d);
        if(d>2){
       p5.drawCircle(x+d*a*0.1,y,d*0.5);
       p5.drawCircle(x-d*a*0.1,y,d*0.5);
       p5.drawCircle(x,y+d*b*0.1,d*0.5);
          // drawCircle(x,y-d*0.5,d*0.5);
        }
    };
  };

  useEffect(() => {
    let inst = new p5(Sketch, containerRef.current);
    return () => inst.remove();
  }, [props.text]);

  return <div ref={containerRef}></div>;
}
