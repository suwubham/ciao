import { useRef, useEffect } from "react";
import p5 from "p5";

let i=1;
let n=1;
let d;

var slider1;
export default function Tree(props) {
  const containerRef = useRef();
  const Sketch = (p5) => {
    p5.setup = () => {
        p5.createCanvas(400,400);
        p5.slider=p5.createSlider(1,10,4,1)
    };

    p5.draw = () => {
        p5.background(51);
        d=p5.slider.value();
        let k=n/d;
        p5.translate(p5.width/2,p5.height/2);
        p5.frameRate(2);
        //fill(250,0,100);
        p5.beginShape(p5.POINTS);
        for(var theta=0;theta<360;theta+=0.02){
        let r=200*p5.cos(k*theta);
        let x=r*p5.cos(theta);
         let y=r*p5.sin(theta);
         p5.stroke(255);
         //noStroke();
         p5.strokeWeight(3);
         p5.vertex(x,y);
         
        }
        p5.endShape(p5.CLOSE);
        if (n>10){
           n=n-9;;
         }
        n+=1;
    };

   
  };

  useEffect(() => {
    let inst = new p5(Sketch, containerRef.current);
    return () => inst.remove();
  }, [props]);

  return <div ref={containerRef}></div>;
}
