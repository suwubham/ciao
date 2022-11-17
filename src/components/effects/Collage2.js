import React from "react";
import { useRef, useEffect } from "react";
import p5 from "p5";

export default function FromImage(props) {
  const containerRef = useRef();
  let img;
  let tileSize = 50; // contols the size of image grabbed from the original

  let smallPoint, largePoint;
  const Sketch = (p5) => {
    let img;
    p5.preload = () => {
      img = p5.loadImage(props.src);
    };

    p5.keyPressed = () => {
      if (p5.key === "d") {
        p5.saveCanvas("myCanvas", "jpg");
      }
    };

    p5.setup = () => {
      p5.createCanvas(img.width, img.height);
      smallPoint = 10;
      largePoint = 20;
      p5.imageMode(p5.CENTER);
      p5.noStroke();
      p5.background(255);
      img.loadPixels();
      p5.noLoop();
    };

    p5.draw = () => {
      // draw the image filling the screen
      p5.imageMode(p5.CENTER);
      p5.image(img, p5.width / 2, p5.height / 2, p5.width, p5.height);

      // spiral time!
      let radius = 10; // initial radius
      let angle = 0; // initial angle

      // run until the radius reaches the edge of the sketch
      // with a 50px margin
      while (radius < p5.width / 2 - 50) {
        // random x/y coords to grab from the source image
        let portionX = p5.int(p5.random(0, img.width - tileSize));
        let portionY = p5.int(p5.random(0, img.height - tileSize));

        // use get() to grab that section
        let portion = img.get(portionX, portionY, tileSize, tileSize);

        // randomly apply the INVERT filter to the tile
        // (note: we can apply filters to image variables too, not just
        // the whole screen!)
        if (p5.random(100) < 20) {
          portion.filter(p5.INVERT);
        }

        // draw the image in place around the spiral
        p5.push();
        p5.translate(p5.width / 2, p5.height / 2); // spiral around the center
        p5.rotate(angle); // rotate to current angle
        p5.translate(radius, 0); // move out to radius
        p5.rotate(p5.random(0, p5.TWO_PI)); // optional rotation-madness
        p5.image(portion, 0, 0); // and draw the image there
        p5.pop();

        // update the angle and radius to create the spiral
        angle += p5.radians(6);
        radius += 0.5;
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
