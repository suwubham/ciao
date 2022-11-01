import Phyllotaxis from "../components/art/Phyllotaxis";

export default function SavedDetail(props) {
  switch (props.data.id) {
    case 1:
      return (
        <Phyllotaxis
          pgap={props.data.pelletgap}
          pradius={props.data.pelletradius}
          background={props.data.backgroundcolor}
        />
      );
      break;
    case 2:
      // code block
      break;
    default:
      <div>aaa</div>;
  }
}
