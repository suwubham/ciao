import { useRef, useEffect } from "react";
import p5 from "p5";
import convert from "color-convert";

export default function Pdraw(props) {
  const containerRef = useRef();

  var inc = 0.1;
  var scl = props.layer; //10
  var zoff = 0;
  var particles = [];
  var flowfield = [];
  var hsl = convert.rgb.hsl(
    props.background.rgb.r,
    props.background.rgb.g,
    props.background.rgb.b
  );
  console.log(hsl);
  const Sketch = (p5) => {
    class Particle {
      constructor(p5) {
        this.p5 = p5;
        this.pos = p5.createVector(p5.random(p5.width), p5.random(p5.height));
        this.vel = p5.createVector(p5.random(p5.width), p5.random(p5.height));
        this.acc = p5.createVector(p5.random(p5.width), p5.random(p5.height));
        this.maxspeed = props.increment / 10; //1/10-3/10
        this.prevPos = this.pos.copy();
        this.col = 0;
      }

      update() {
        this.vel.add(this.acc);
        this.vel.limit(this.maxspeed);
        this.pos.add(this.vel);
        this.acc.mult(0);
        this.prevPos = this.pos.copy();
      }

      applyForce(force) {
        this.acc.add(force);
      }

      show() {
        this.p5.strokeWeight(props.bold);
        this.p5.strokeCap(this.p5.PROJECT);
        this.p5.beginShape();
        this.p5.vertex(this.pos.x, this.pos.y);
        this.p5.stroke(
          props.stroke.rgb.r,
          props.stroke.rgb.g,
          props.stroke.rgb.b,
          16
        );
        this.p5.vertex(
          (this.pos.x + this.prevPos.x) / 2,
          (this.pos.y + this.prevPos.y) / 2
        );
        this.p5.vertex(this.prevPos.x, this.prevPos.y);
        this.p5.endShape();
        this.col++;
        if (this.col > 255) {
          this.col = 0;
        }
      }

      edges() {
        if (this.pos.x > this.p5.width) {
          this.pos.x = 0;
          this.prevPos = this.pos.copy();
        }
        if (this.pos.x < 0) {
          this.pos.x = this.p5.width;
          this.prevPos = this.pos.copy();
        }
        if (this.pos.y > this.p5.height) {
          this.pos.y = 0;
          this.prevPos = this.pos.copy();
        }
        if (this.pos.y < 0) {
          this.pos.y = this.p5.height;
          this.prevPos = this.pos.copy();
        }
      }

      follow(vectors, p5) {
        var x = this.p5.floor(this.pos.x / scl);
        var y = this.p5.floor(this.pos.y / scl);
        var index = x + y * window.cols;
        var force = vectors[index];
        this.applyForce(force);
      }
    }
    p5.setup = () => {
      p5.createCanvas(props.resolution.x, props.resolution.y);
      window.cols = p5.floor(p5.width / scl);
      window.rows = p5.floor(p5.height / scl);

      for (let i = 0; i < 1000; i++) {
        particles[i] = new Particle(p5);
      }
      // p5.colorMode(p5.HSB, 255);

      p5.background(
        props.background.rgb.r,
        props.background.rgb.g,
        props.background.rgb.b
      );
    };

    p5.keyPressed = () => {
      if (p5.key === "a") {
        p5.saveCanvas("myCanvas", "jpg");
      }
    };

    p5.draw = () => {
      var yoff = 0;
      for (var y = 0; y < window.rows; y++) {
        var xoff = 0;
        for (var x = 0; x < window.cols; x++) {
          var index = x + y * window.cols;
          var angle = p5.map(
            p5.noise(xoff, yoff, zoff),
            0,
            1,
            0,
            p5.TWO_PI * 2
          );
          var v = new p5.createVector(p5.cos(angle), p5.sin(angle));
          flowfield[index] = v;
          xoff += inc;
          // p5.stroke(123, 21, 321, 50);

          p5.strokeWeight(1);
        }
        yoff += inc;
        zoff += 0.0001;
      }
      for (let i = 0; i < particles.length; i++) {
        particles[i].follow(flowfield);
        particles[i].update();
        particles[i].show();
        particles[i].edges();
      }
    };
  };

  useEffect(() => {
    let inst = new p5(Sketch, containerRef.current);
    return () => inst.remove();
  }, [props]);

  return <div ref={containerRef}></div>;
}
