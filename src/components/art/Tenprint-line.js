import { useRef, useEffect } from "react";
import p5 from "p5";
let b=10;
let slider;
let a;
let x=0;
let y=0;
let spacing=10;
export default function Tenprintline(props) {
  const containerRef = useRef();
     
  const Sketch = (p5) => {
    p5.setup = () => {
        p5.createCanvas(400,400);
        p5.background(255);
        p5.createP('');
        p5.createP('');
        p5.createP('INCLINATION ');
        slider=p5.createSlider(1,10,5,1);
       
    };

    p5.draw = () => {
        p5.stroke(p5.mouseX,0,p5.mouseY);
        a=slider.value();
        if (p5.random(1)<0.1*a){
          p5.line(x,y,x+10,y+spacing);
        }
        else{
          p5.line(x,y+spacing,x+spacing,y)
        }
        x=x+spacing;
        if(x>p5.width){
          x=0;
          y=y+spacing;
      //   }
      //     if (random(1)<0.1*a){
      //       circle(2,4,700)
      //     // rect(x,y,spacing,spacing)
      //   }
      //   else{
          
        }
    };

    
  };

  useEffect(() => {
    let inst = new p5(Sketch, containerRef.current);
    return () => inst.remove();
  }, [props.text]);

  return <div ref={containerRef}></div>;
}