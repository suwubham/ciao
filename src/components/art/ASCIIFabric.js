import { useRef, useEffect } from "react";
import p5 from "p5";

export default function Tree(props) {
  const containerRef = useRef();
  f=50; //font for asii code
col = ["red","yellow","green","orange","purple"]  //array // colors 

  const Sketch = (p5) => {
    p5.setup = () => {


        p5.createCanvas(700, 700);   //size
        p5.background(0); //Sets color for the background RGB
        //background(random(255));
        p5.textSize(f);
        for(x=0;x<width+f;x+=f*0.7){ //grid loop
          for (y=0;y<height+f;y+=f*1.2){
            c=p5.random(3);
            p5.stroke(col[p5.floor(p5.random(5))])  //stroke = color for the outline of shapes
            p5.fill(col[p5.floor(p5.random(5))])    //fill = color for inside 
            // colSel = col[floor(random(5))]
            // stroke(colSel);
            // fill(colSel);
            if (c<1){
              p5.text("░",x,y)      //these patters are from ASCII code box 
            }
            else if (c<2){
              p5.text("▒",x,y)
            }
           else if (c<3){
              p5.text("▓",x,y)
            }
            else if (c<4){
             p5. text("█",x,y)
            }
          }
        }  
      }
  

    };
  };
{
  useEffect(() => {
    let inst = new p5(Sketch, containerRef.current);
    return () => inst.remove();
  }, [props]);

  return <div ref={containerRef}></div>;
}