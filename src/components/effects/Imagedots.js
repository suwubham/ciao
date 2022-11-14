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
      img.resize(p5.windowWidth / 2, 0);
      p5.createCanvas(img.width, img.height);
      p5.textSize(40);
      p5.textStyle(p5.BOLD);
      p5.fill(255);
      p5.stroke(0);
      p5.strokeWeight(8);
      p5.noLoop();
    };

    p5.draw = () => {
      p5.background(255);
      //p5.background(225, 27, 10,100);
      p5.image(p5.imageDots(img, 4, 1, 2, 0.5), 0, 0);
    };
    p5.imageDots = (img, diameter, randomness = 1, ratio = 1, opacity = 1) => {
      let imgIn = img.get();
      let imgOut = p5.createGraphics(img.width, img.height);
      imgOut.fill(0, opacity * 255);
      imgOut.noStroke();
      imgIn.resize(
        p5.round(imgIn.width / diameter),
        p5.round(imgIn.height / diameter)
      );
      imgIn.filter(p5.GRAY);
      imgIn.loadPixels();
      for (let y = 0; y < imgIn.height; y++) {
        for (let x = 0; x < imgIn.width; x++) {
          let d =
            (1 - imgIn.pixels[4 * (x + y * imgIn.width)] / 255) * diameter;
          imgOut.circle(
            (x + randomness * (p5.random() - 0.5) + 0.5) * diameter,
            (y + randomness * (p5.random() - 0.5) + 0.5) * diameter,
            d * ratio
          );
        }
      }
      return imgOut;
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
