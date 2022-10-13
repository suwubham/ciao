//mandala art p5.
//first petel outside and then petels of the inside
import { useRef, useEffect } from "react";
import p5 from "p5";

export default function wavy(props) {
const containerRef = useRef();
let x1, x2, y2, x3, y3, x4; //variables
//let pedals=30;


const Sketch = (p5) => {
    p5.setup = () => {
        p5.createCanvas(500, 500);
        p5.background(0);  //add background(black)
        p5.angleMode(DEGREES);  //angle mode to degree 
        p5.colorMode(HSB, 360, 100, 100, 100);
        p5.translate(width / 2, height / 2); //we are drawing from center so translate
        let pedals = p5.random(8, 40);  
        let layers = p5.random(4, 40);
        let ang = 360 / pedals;   
      
        // creating each layer with different variables
        for (let j = layers; j > 0; j--) {  
          let ly = j / layers;
          x1 = p5.random(185 * ly, 205 * ly);  //giving variables some numbers
          x4 = p5.random(230 * ly, 245 * ly);  //numb for respecive pedels
          x2 = p5.random(190 * ly, 215 * ly);   //creating randomness too
          let maxX2 = x2 * p5.tan(ang) * 0.9;
          y2 = p5.random(15 * ly, maxX2 * ly);
          x3 = p5.random(210 * ly, 230 * ly);
          y3 = p5.random(15 * ly, maxX2);
          let hue = p5.random(256);
          let sat = p5.random(70, 100);
          let brt = random(70, 100);
          let alph = p5.random(40, 100);
          p5.fill(hue, sat, brt, alph);
           //curvevertex has starting point to ending point and middle 
          // draw the pedals for one layer
          for (let i = 0; i < pedals; i++) {  //360 for round and pedals dived by 2 
            p5.noStroke();
            //stroke(0,250,250);//blue color outer 
            //synatx for curveVerex
            p5.beginShape();
            p5. curveVertex(x1, 0);  //y1 is always 0 as begening and end of the curve must be on y axis
            p5.curveVertex(x1, 0);
            p5.curveVertex(x2, y2);
            p5.curveVertex(x3, y3);
            p5.curveVertex(x4, 0);
            p5.curveVertex(x4, 0);
            p5.endShape();
            p5.beginShape();
            p5.curveVertex(x1, 0);
            p5.curveVertex(x1, 0);
            p5.curveVertex(x2, -y2);
            p5.curveVertex(x3, -y3);
            p5.curveVertex(x4, 0);
            p5.curveVertex(x4, 0);
            p5.endShape();
            //stroke(hue,sat,brt,alph);//  that line to have stroke
            p5.strokeWeight(5);
            //line(x1,0,x4,0);  //adding line
            p5.rotate(ang);
          }p5.rotate(ang/2); //for the circle
        }
      }
    };
    
        useEffect(() => {
            let inst = new p5(Sketch, containerRef.current);
            return () => inst.remove();
          }, [props]);
        
          return <div ref={containerRef}></div>;
        }
    