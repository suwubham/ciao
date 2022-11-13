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
      p5.background(255, 224, 130);
      p5.image(p5.imageRGBTranslate(img, -50, -50, 0, 0, 50, 50), 0, 0);
    };
    p5.imageRGBTranslate = (
      img,
      rx = 0,
      ry = 0,
      gx = 0,
      gy = 0,
      bx = 0,
      by = 0
    ) => {
      let imgIn = img.get();
      let w = img.width;
      let h = img.height;
      let imgOut = p5.createImage(w, h);
      imgIn.loadPixels();
      imgOut.loadPixels();
      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          let rxOut = p5.constrain(x + rx, 0, w - 1);
          let ryOut = p5.constrain(y + ry, 0, h - 1);
          let ir = 4 * (rxOut + ryOut * w);
          let gxOut = p5.constrain(x + gx, 0, w - 1);
          let gyOut = p5.constrain(y + gy, 0, h - 1);
          let ig = 4 * (gxOut + gyOut * w) + 1;
          let bxOut = p5.constrain(x + bx, 0, w - 1);
          let byOut = p5.constrain(y + by, 0, h - 1);
          let ib = 4 * (bxOut + byOut * w) + 2;
          let i = 4 * (x + y * w);
          imgOut.pixels[ir] = imgIn.pixels[i];
          imgOut.pixels[ig] = imgIn.pixels[i + 1];
          imgOut.pixels[ib] = imgIn.pixels[i + 2];
          imgOut.pixels[i + 3] = 255;
        }
      }
      imgOut.updatePixels();
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
