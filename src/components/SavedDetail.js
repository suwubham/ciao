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
        <div className="savedarts">
          <Phyllotaxis
            pgap={props.data.pelletgap}
            pradius={props.data.pelletradius}
            background={props.data.backgroundcolor}
            resolution={props.data.resolution}
          />
        </div>
      );

    case 2:
      return (
        <div className="savedarts">
          <Perlin
            increment={props.data.increment2d}
            bold={props.data.bold2d}
            layer={props.data.layers}
            background={props.data.backgroundcolor}
            resolution={props.data.resolution}
          />
        </div>
      );

    case 3:
      return (
        <div className="savedarts">
          <Lorentz
            increment={props.data.increment2d}
            size={props.data.sizef}
            // border={bordercolor}
            // background={backgroundcolor}
            resolution={props.data.resolution}
          />
        </div>
      );

    case 4:
      return (
        <div className="savedarts">
          <Mandelbrot
            increment={props.data.incrementm}
            transparency={props.data.transparencym}
            background={props.data.backgroundcolor}
            resolution={props.data.resolution}
          />
        </div>
      );

    case 5:
      return (
        <div className="savedarts">
          <Recursivetree
            branch={props.data.branchlength}
            leaf={props.data.leafcolor}
            trunk={props.data.trunkcolor}
            background={props.data.backgroundcolor}
            resolution={props.data.resolution}
          />
        </div>
      );

    case 6:
      return (
        <div className="savedarts">
          <Tenprintline
            space={props.data.spacing2d}
            incline={props.data.inclination}
            border={props.data.bordercolor}
            background={props.data.backgroundcolor}
            resolution={props.data.resolution}
          />
        </div>
      );

    case 7:
      return (
        <div className="savedarts">
          <Tenprintcircle
            space={props.data.spacing2d}
            increment={props.data.incrementc}
            border={props.data.bordercolor}
            background={props.data.backgroundcolor}
            resolution={props.data.resolution}
          />
        </div>
      );

    case 8:
      return (
        <div className="savedarts">
          <Recursioncircle
            increment={props.data.increment2d}
            bold={props.data.boldness}
            border={props.data.bordercolor}
            background={props.data.backgroundcolor}
            resolution={props.data.resolution}
          />
        </div>
      );

    case 9:
      return (
        <div className="savedarts">
          <Rotatedbox
            increment={props.data.increment2d}
            bold={props.data.boldness}
            border={props.data.bordercolor}
            background={props.data.backgroundcolor}
            resolution={props.data.resolution}
          />
        </div>
      );

    case 10:
      return (
        <div className="savedarts">
          <Wavy
            increment={props.data.increment2d}
            bold={props.data.bold2d}
            layer={props.data.layers}
            rotate={props.data.rotate3d}
            border={props.data.bordercolor}
            resolution={props.data.resolution}
          />
        </div>
      );

    case 11:
      return (
        <div className="savedarts">
          <Mandala
            alph={props.data.alpha}
            bold={props.data.boldness}
            border={props.data.bordercolor}
            background={props.data.backgroundcolor}
            resolution={props.data.resolution}
          />
        </div>
      );

    case 12:
      return (
        <div className="savedarts">
          <PerlinNoiseRandomness
            increment={props.data.increment2d}
            bold={props.data.bold2d}
            size={props.data.sizef}
            border={props.data.bordercolor}
            background={props.data.backgroundcolor}
            resolution={props.data.resolution}
          />
        </div>
      );

    case 13:
      return (
        <div className="savedarts">
          <Grid
            bold={props.data.boldness}
            background={props.data.backgroundcolor}
            border={props.data.bordercolor}
            resolution={props.data.resolution}
          />
        </div>
      );

    case 14:
      return (
        <div className="savedarts">
          <ASCIIFabric
            size={props.data.sizef}
            background={props.data.backgroundcolor}
            resolution={props.data.resolution}
          />
        </div>
      );

    case 15:
      return (
        <div className="savedarts">
          <Rosepetals2d
            dflower={props.data.dflower2d}
            flowercolor={props.data.flowercolor2d}
            background={props.data.backgroundcolor}
            resolution={props.data.resolution}
          />
        </div>
      );

    case 16:
      return (
        <div className="savedarts">
          <Supershape
            increment={props.data.increment2d}
            bold={props.data.bold2d}
            border={props.data.bordercolor}
            background={props.data.backgroundcolor}
            resolution={props.data.resolution}
          />
        </div>
      );

    case 17:
      return (
        <div className="savedarts">
          <Perlintriangle
            size={props.data.size2d}
            bold={props.data.alpha2d}
            triangle1={props.data.triangle1color}
            triangle2={props.data.triangle2color}
            resolution={props.data.resolution}
          />
        </div>
      );

    case 18:
      return (
        <div className="savedarts">
          <Flowerthree
            increment={props.data.increment2d}
            rotate={props.data.rotate3d}
            border={props.data.bordercolor}
            background={props.data.backgroundcolor}
            resolution={props.data.resolution}
          />
        </div>
      );

    case 19:
      return (
        <div className="savedarts">
          <Drawsnowflake
            symmetry={props.data.symmetry2d}
            bold={props.data.bold2d}
            border={props.data.bordercolor}
            background={props.data.backgroundcolor}
            resolution={props.data.resolution}
          />
        </div>
      );

    default:
      return <div className="headers">Save arts to view them here!</div>;
  }
}
