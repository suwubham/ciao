import { useRef, useEffect } from "react";
import p5 from "p5";
export default function Rdraw(props) {
  // var slider;
  var n1 = 0.3;
  var n2 = 0.3;
  var n3 = 0.3;
  var u = 100;
  var a = 1;
  var b = 100;
  var osc = 0;
  const containerRef = useRef();
  const Sketch = (p5) => {
    p5.keyPressed = () => {
      if (p5.key === "a") {
        p5.saveCanvas("myCanvas", "jpg");
      }
    };

    p5.setup = () => {
      p5.createCanvas(props.resolution.x,props.resolution.y);
      // slider = p5.createSlider(0.1, 10, 2, 1);
      p5.background(
        props.background.rgb.r,
        props.background.rgb.g,
        props.background.rgb.b
      );
      p5.colorMode("RGB");
    };

    p5.supershape = (theta) => {
      var part1 = (1 / a) * p5.cos((theta * u) / 4);
      part1 = p5.abs(part1);
      part1 = p5.pow(part1, n2);
      //  b=slider.value();
      b = props.increment;
      var part2 = (1 / b) * p5.sin((theta * u) / 4);
      part2 = p5.abs(part2);
      part2 = p5.pow(part2, n3);

      var part3 = p5.pow(part1 + part2, 1 / n1);

      if (part3 === 0) {
        return 0;
      }

      return 1 / part3;
    };

    p5.draw = () => {
      u = p5.map(p5.sin(osc), -1, 1, 0, 10);
      osc += 0.02;

      p5.background(
        props.background.rgb.r,
        props.background.rgb.g,
        props.background.rgb.b
      );
      p5.translate(p5.width / 2, p5.height / 2);

      p5.stroke(props.border.rgb.r, props.border.rgb.g, props.border.rgb.b);
      //   p5.fill(
      //     props.border.rgb.r,
      //      props.border.rgb.g,
      //      props.border.rgb.b
      //  );
      p5.strokeWeight(props.bold);
      p5.noFill();

      var radius = 120;

      var total = 200;
      var increment = p5.TWO_PI / total;

      p5.beginShape();
      for (var angle = 0; angle < p5.TWO_PI; angle += increment) {
        var r = p5.supershape(angle);
        var x = radius * r * p5.cos(angle);
        var y = radius * r * p5.sin(angle);

        p5.vertex(x, y);
      }
      p5.endShape(p5.CLOSE);
    };
  };

  useEffect(() => {
    let inst = new p5(Sketch, containerRef.current);
    return () => inst.remove();
  }, [props]);

  return <div ref={containerRef}></div>;
}
