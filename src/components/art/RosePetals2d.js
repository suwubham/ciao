import { useRef, useEffect } from "react";
import p5 from "p5";
// var slider1;
export default function Rdraw(props) {
    let i=1;
    let n=1;
   let d;

  const containerRef = useRef();
  const Sketch = (p5) => {
    p5.setup = () => {
        p5.createCanvas(700,700);
          p5.colorMode(p5.RGB);
    };

    p5.draw = () => {
        p5.background(
            props.background.rgb.r,
            props.background.rgb.g,
            props.background.rgb.b
          );
       d=props.dflower;
        // d=p5.slider.value();
        let k=n/d;
        p5.translate(p5.width/2,p5.height/2);
        p5.frameRate(1);
        p5.beginShape(p5.POINTS);
        for(var theta=0;theta<360;theta+=0.02){
        let r=200*p5.cos(k*theta);
        let x=r*p5.cos(theta);
         let y=r*p5.sin(theta);
         p5.stroke(
            props.flowercolor.rgb.r,
            props.flowercolor.rgb.g,
            props.flowercolor.rgb.b
         );
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
  }, [props.background,props.dflower,props.flowercolor]);

  return <div ref={containerRef}></div>;
}

