import React from "react";
import Circles from "./effects/Circles";

export default function Artoutput(props) {
  console.log(props.which, props.url);
  switch (props.which) {
    case 1:
      return <Circles src={props.url} />;
    default:
      return "";
  }
}
