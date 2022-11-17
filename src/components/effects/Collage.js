import React from "react";
import { useRef, useEffect } from "react";
import p5 from "p5";

export default function FromImage(props) {
  const containerRef = useRef();
  let img;
  let smallPoint, largePoint;
  const Sketch = (p5) => {
    let img;
    p5.preload = () => {
      img = p5.loadImage(props.src);
    };

    p5.setup = () => {
      img.resize(p5.windowWidth / 3, 0);
      p5.createCanvas(img.width, img.height);
      smallPoint = 10;
      largePoint = 20;
      // p5.imageMode(p5.CENTER);
      p5.noStroke();
      p5.background(255);
      img.loadPixels();
      p5.noLoop();
    };

    p5.draw = () => {
      p5.background(0);

      // use the get() command to create a new image made up of
      // a portion of the original
      // arguments are:
      // + start x/y in the source image
      // + width/height to extract
      // let leftCorner = img.get(0, 0, img.width/2, img.height/2);
      // p5.image(leftCorner, 0, 0);

      // a bit fancier: draw random strips from the image
      // (note the for-loop starts halfway down the screen)
      for (let y = 0; y < p5.height; y += 10) {
        let stripYPosition = p5.int(p5.random(0, img.height - 10));
        let strip = img.get(0, stripYPosition, img.width, 10);
        p5.image(strip, 0, y);
      }
    };
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
