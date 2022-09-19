import { useRef, useEffect } from "react";
import p5 from "p5";
let size = 30;
let x;
let y;
let c;
export default function Rbox(props) {
  const containerRef = useRef();

  const Sketch = (p5) => {
    p5.setup = () => {
    p5.createCanvas(700, 700);
    // p5.saveButton = p5.createButton("save jpg");
    // //  p5.saveButton.p5.position(10, p5.height+10);
    //  p5.saveButton.p5.mousePressed(p5.saveArt);
     p5.angleMode(p5.DEGREES);
     p5.strokeWeight(3);
    p5.background(200);
    for(x=-size;x<p5.width;x+=size){
    for (y=-size;y<p5.height;y+=size){
      p5.fill(p5.random(20),p5.random(60),p5.random(255));
      c=p5.random(0,4); 
      p5.push();
      p5.translate(x+size/2,y+size/2);
      p5.rotate(p5.floor(p5.random(2))*45);
      if (c<1){
        p5.rect(-size/2,-size/2,size/2,size/2)
      }
      else if (c<2){
        p5.rect(0,0,size,size/2)
      }
      else if (c<3){
        p5.rect(size/2,-size/2,size,size)
      }
      else if (c<4){
        p5.rect(0,0,size*2,size*2)
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
  }, [props.text]);

  return <div ref={containerRef}></div>;
}
