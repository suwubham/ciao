import { useRef, useEffect } from "react";
import p5 from "p5";

export default function Rdraw(props) {
    
var slider1,slider2,slider3 ,slider4 ,slider5 ,slider6;

var n1=1,n2=1,n3=1, m=6;
var a;// rightshifted
var b,osc=0,p;
  const containerRef = useRef();
  const Sketch = (p5) => {
    p5.setup = () => {
        createCanvas(400, 400);
        createP('SHARPNESS');
       slider1 =createSlider(0,10,4,0.1);
       slider1.position(160,410);
         createP('FREQUENCY');
       slider2 =createSlider(0.009,0.03,0.02,0.01);
        slider2.position(160,450);
         createP('RADIUS');
       slider3 =createSlider(30,70,40,10);
        slider3.position(160,485);
         createP('NUMBER OF SIDE');
       slider4 =createSlider(2,100,3,2);
       slider4.position(160,520);
         createP('RIGHTSHIFT');
       slider5 =createSlider(1,3,2,1);
        slider5.position(160,550);
         createP('INCREMENT');
       slider6 =createSlider(1,10,3,1);
        slider6.position(160,590);
    };
        
    function supershape(theta){
        var r=1;
        a=slider5.value();
         b=slider6.value();
        var part1=(1/a)*cos(theta*m/4);
        part1=abs(part1);
        part1=pow(part1,n2);
        
        var part2=(1/b)*sin(theta*m/4);
        part2=abs(part2);
        part2=pow(part2,n3);
        
        var part3= pow(part1+part2,1/n1)
         if (part3==0){return 0;}
        
        return (1/part3);
      }


    p5.draw = () => {
        p=slider2.value();
      m=map(sin(osc),-1,1,0,10);
      osc+=p;
  
      n1=n2=n3 =slider1.value();
        p5.background(
            props.background.rgb.r,
            props.background.rgb.g,
            props.background.rgb.b
          );
          translate(width/2,height/2);
         p5.stroke(
            props.bordercolor.rgb.r,
            props.bordercolor.rgb.g,
            props.bordercolor.rgb.b
         );
         noFill();
         var radius=slider3.value();
         var total =slider4.value();
         var increment =TWO_PI/total;
         beginShape();
         for(var angle=0;angle<TWO_PI;angle+=increment){
           var r= supershape(angle);
           var x=radius * r*cos(angle);
            var y=radius*r*sin(angle);
           vertex(x,y);
         }
         endShape(CLOSE);
         
    };

   
  };

  useEffect(() => {
    let inst = new p5(Sketch, containerRef.current);
    return () => inst.remove();
  }, [props.background,props.bordercolor]);

  return <div ref={containerRef}></div>;
}

