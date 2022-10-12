//patterns on a grid system (vertical and horizontal lines )
import { useRef, useEffect } from "react";
import p5 from "p5";

export default function Tree(props) {
  const containerRef = useRef();
  const Sketch = (p5) => {
    p5.setup = () => {
    
    p5.createCanvas(500,500);
    //fill(200,50,40);
    p5.strokeWeight(1);  //create line
    p5.rectMode(5);
    let space = 20;
    for (x=0;x<width+50;x+=space){              //starts from top left part of canvas             //grid width 
      for (y=0;y<height+50;y+=space){              // height
        p5.stroke(x,200,200);
       p5.line(x,y,x+space,y);                       //row line
       p5.stroke(y,x,30);
         p5.line(x,y,x,y+space);                    //column line
         p5.stroke(200,y,x/2);
        p5.square(x,y,10)                          //squares of the box edges
        p5.fill(200,p5.map(y,0,1000,0,244),x/2);    //map creates 
        p5.square(x+space/2,y+space/2,10)         //squares of the box at the center
      }
    }
  }
};

useEffect(() => {
    let inst = new p5(Sketch, containerRef.current);
    return () => inst.remove();
  }, [props]);

  return <div ref={containerRef}></div>;
}
  
  
  
  
  
  