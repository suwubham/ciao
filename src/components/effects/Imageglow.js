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
      img.resize(p5.windowWidth / 2, 0);
      p5.createCanvas(img.width, img.height);
      p5.fill(255);
      p5.stroke(0);
      p5.strokeWeight(8);
      p5.noLoop();
    };

    p5.draw = () => {
      p5.background(255, 224, 130);
      p5.image(p5.imageGlow(p5.imageCRT(img, 50, 0), 5, 0.5), 0, 0);
    };

    p5.imageCRT = (img, columns, backlight = 50, contour = 0.05) => {
      let imgIn = img.get();
      let ratio = imgIn.width / imgIn.height;
      imgIn.resize(columns, p5.round((2 * columns) / ratio));
      imgIn.loadPixels();
      let size = img.width / columns;
      let imgOut = p5.createGraphics(img.width, img.height);
      imgOut.background(0);
      imgOut.strokeWeight(size * contour);
      imgOut.stroke(0);
      for (let x = 0; x < imgIn.width + 0.5; x++) {
        let offset = (x % 2) / 2;
        for (let y = 0 - 2 * offset; y < imgIn.height + 0.5; y++) {
          let xPix = p5.constrain(x, 0, imgIn.width - 1);
          let yPix = p5.constrain(2 * y, 0, imgIn.height - 1);
          let i = 4 * (xPix + yPix * imgIn.width);
          let r = imgIn.pixels[i] + backlight;
          let g = imgIn.pixels[i + 1] + backlight;
          let b = imgIn.pixels[i + 2] + backlight;
          imgOut.fill(r, 0, 0);
          imgOut.rect(x * size, (y + offset) * size, size / 3, size);
          imgOut.fill(0, g, 0);
          imgOut.rect((x + 1 / 3) * size, (y + offset) * size, size / 3, size);
          imgOut.fill(0, 0, b);
          imgOut.rect((x + 2 / 3) * size, (y + offset) * size, size / 3, size);
        }
      }
      return imgOut;
    };
    p5.imageGlow = (img, intensity = 1, size = 1) => {
      let imgIn = img.get();
      imgIn.filter(p5.BLUR, p5.round((size * img.width + img.height) / 200));
      let imgOut = p5.createGraphics(img.width, img.height);
      imgOut.background(0);
      imgOut.blendMode(p5.SCREEN);
      imgOut.image(img, 0, 0);
      for (let i = 0; i < intensity; i++) {
        imgOut.tint(255, 255 * p5.min(intensity - i, 1));
        imgOut.image(imgIn, 0, 0);
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
