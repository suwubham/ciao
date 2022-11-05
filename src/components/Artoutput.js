import React from "react";
import Circles from "./effects/Circles";
import Filter from "./effects/Filter";
import Imagedots from "./effects/Imagedots";
import Imagenoise from "./effects/Imagenoise";

export default function Artoutput(props) {
  console.log(props.which, props.url);
  switch (props.which) {
    case 1:
     return <Circles  src={props.url} />;
    case 2:
     return <Filter src ={props.url}/>;
  case 3:
       return <Imagedots src ={props.url}/>;
  case 4:
       return <Imagenoise src ={props.url}/>;
  case 5:
      return <Filter src ={props.url}/>;
    default:
      return "";
  }
}
