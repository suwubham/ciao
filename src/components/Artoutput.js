import React from "react";
import Circles from "./effects/Circles";
import Invert from "./effects/Invert";
import Imagedots from "./effects/Imagedots";
import Imagenoise from "./effects/Imagenoise";
import Imageglow from "./effects/Imageglow";
import RgbTranslate from "./effects/RgbTranslate";
import Posterize from "./effects/Posterize";

export default function Artoutput(props) {
  console.log(props.which, props.url);
  switch (props.which) {
    case 1:
      return <Circles src={props.url} />;
    case 2:
      return <Invert src={props.url} />;
    case 3:
      return <Imagedots src={props.url} />;
    case 4:
      return <Imagenoise src={props.url} />;
    case 5:
      return <Imageglow src={props.url} />;
    case 6:
      return <RgbTranslate src={props.url} />;
    case 6:
      return <Posterize src={props.url} />;
    default:
      return "";
  }
}
