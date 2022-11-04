import Phyllotaxis from "../components/art/Phyllotaxis";
import Recursivetree from "../components/art/RecursiveTree";
import Mandala from "../components/art/Mandala";
import ASCIIFabric from "../components/art/ASCIIFabric";
import Drawsnowflake from "../components/art/DrawSnowflake";
import Flowerthree from "../components/art/FlowerThree";
import Grid from "../components/art/Grid";
import Lorentz from "../components/art/LorentzAttractor";
import Mandelbrot from "../components/art/MandelbrotSet";
import Perlin from "../components/art/PerlinNoiseFlowField";
import PerlinNoiseRandomness from "../components/art/PerlinNoiseRandomness";
import Perlintriangle from "../components/art/PerlinTriangle";
import Recursioncircle from "../components/art/RecursionCircle";
import Rosepetals2d from "../components/art/RosePetals2d";
import Rotatedbox from "../components/art/RotatedBox";
import Supershape from "../components/art/SuperShape";
import Tenprintline from "../components/art/Tenprint-line";
import Tenprintcircle from "../components/art/TenprintCircle";
import Wavy from "../components/art/Wavy";

export default function SavedDetail(props) {
  switch (props.data.id) {
    case 1:
      return (
        <Phyllotaxis
          pgap={props.data.pelletgap}
          pradius={props.data.pelletradius}
          background={props.data.backgroundcolor}
          resolution={props.data.resolution}
        />
      );

    case 2:
      return (
        <Perlin
          increment={props.data.increment2d}
          bold={props.data.bold2d}
          layer={props.data.layers}
          background={props.data.backgroundcolor}
        />
      );

    case 3:
      return (
        <Lorentz
          increment={props.data.increment2d}
          size={props.data.sizef}
          // border={bordercolor}
          // background={backgroundcolor}
        />
      );

    case 4:
      return (
        <Mandelbrot
          increment={props.data.incrementm}
          transparency={props.data.transparencym}
          background={props.data.backgroundcolor}
        />
      );

    case 5:
      return (
        <Recursivetree
          branch={props.data.branchlength}
          leaf={props.data.leafcolor}
          trunk={props.data.trunkcolor}
          background={props.data.backgroundcolor}
        />
      );

    case 6:
      return (
        <Tenprintline
          space={props.data.spacing2d}
          incline={props.data.inclination}
          border={props.data.bordercolor}
          background={props.data.backgroundcolor}
        />
      );

    case 7:
      return (
        <Tenprintcircle
          space={props.data.spacing2d}
          increment={props.data.incrementc}
          border={props.data.bordercolor}
          background={props.data.backgroundcolor}
        />
      );

    case 8:
      return (
        <Recursioncircle
          increment={props.data.increment2d}
          bold={props.data.boldness}
          border={props.data.bordercolor}
          background={props.data.backgroundcolor}
        />
      );

    case 9:
      return (
        <Rotatedbox
          increment={props.data.increment2d}
          bold={props.data.boldness}
          border={props.data.bordercolor}
          background={props.data.backgroundcolor}
        />
      );

    case 10:
      return (
        <Wavy
          increment={props.data.increment2d}
          bold={props.data.bold2d}
          layer={props.data.layers}
          rotate={props.data.rotate3d}
          border={props.data.bordercolor}
        />
      );

    case 11:
      return (
        <Mandala
          alph={props.data.alpha}
          bold={props.data.boldness}
          border={props.data.bordercolor}
          background={props.data.backgroundcolor}
        />
      );

    case 12:
      return (
        <PerlinNoiseRandomness
          increment={props.data.increment2d}
          bold={props.data.bold2d}
          size={props.data.sizef}
          border={props.data.bordercolor}
          background={props.data.backgroundcolor}
        />
      );

    case 13:
      return (
        <Grid
          bold={props.data.boldness}
          background={props.data.backgroundcolor}
          border={props.data.bordercolor}
        />
      );

    case 14:
      return (
        <ASCIIFabric
          size={props.data.sizef}
          background={props.data.backgroundcolor}
        />
      );

    case 15:
      return (
        <Rosepetals2d
          dflower={props.data.dflower2d}
          flowercolor={props.data.flowercolor2d}
          background={props.data.backgroundcolor}
        />
      );

    case 16:
      return (
        <Supershape
          increment={props.data.increment2d}
          bold={props.data.bold2d}
          border={props.data.bordercolor}
          background={props.data.backgroundcolor}
        />
      );

    case 17:
      return (
        <Perlintriangle
          size={props.data.size2d}
          bold={props.data.alpha2d}
          triangle1={props.data.triangle1color}
          triangle2={props.data.triangle2color}
        />
      );

    case 18:
      return (
        <Flowerthree
          increment={props.data.increment2d}
          rotate={props.data.rotate3d}
          border={props.data.bordercolor}
          background={props.data.backgroundcolor}
        />
      );

    case 19:
      return (
        <Drawsnowflake
          symmetry={props.data.symmetry2d}
          bold={props.data.bold2d}
          border={props.data.bordercolor}
          background={props.data.backgroundcolor}
        />
      );

    default:
      <div>aaa</div>;
  }
}
