import React from "react";
import Circles from "./effects/Circles";
import Pointilism from "./effects/Pointilism";

export default function Artoutput(props) {
  console.log(props.which, props.url);
  switch (props.which) {
    case 1:
      return <Circles src={props.url} />;
      case 2:
        return <Pointilism src ={props.url}/>;
    default:
      return "";
  }
}
