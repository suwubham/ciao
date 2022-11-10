import React from "react";
import Circles from "./effects/Circles";
import Filter from "./effects/Filter";
import Imagedots from "./effects/Imagedots";
import Imagenoise from "./effects/Imagenoise";
import Imageglow from "./effects/Imageglow";
import Collage from "./effects/Collage";
import Collage2 from "./effects/Collage2";

export default function Artoutput(props) {
  console.log(props.which, props.url);
  switch (props.which) {
    case 1:
      return <Circles src={props.url} />;
    case 2:
      return <Filter src={props.url} />;
    case 3:
      return <Imagedots src={props.url} />;
    case 4:
      return <Imagenoise src={props.url} />;
    case 5:
      return <Imageglow src={props.url} />;
      case 6:
        return<Collage src={props.url}/>;
        case 7:
        return<Collage2 src={props.url}/>;
    default:
      return "";
  }
}
