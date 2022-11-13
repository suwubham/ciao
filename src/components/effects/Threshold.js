import React from "react";
import { useRef, useEffect } from "react";
import p5 from "p5";

export default function FromImage(props) {
  const containerRef = useRef();

  const Sketch = (p5) => {
    let img;
    p5.preload = () => {
      img = p5.loadImage(props.src);
    };

    p5.setup = () => {
      p5.createCanvas(img.width, img.height);
      p5.image(img, 0, 0);
      p5.filter(p5.THRESHOLD, 0.4); //0.2-0.8
      // filter(BLUR);
      // filter(GRAY);
      // filter(OPAQUE);
      //   p5.filter(p5.INVERT);
      // p5.filter(p5.POSTERIZE,3);//2-7
      // filter(DILATE);
      // filter(ERODE);
    };

    p5.draw = () => {};
    p5.keyPressed = () => {
      if (p5.key === "d") {
        p5.saveCanvas("myCanvas", "jpg");
      }
    };
  };

  useEffect(() => {
    let inst = new p5(Sketch, containerRef.current);
    return () => inst.remove();
  }, [props]);

  return <div ref={containerRef}></div>;
}
