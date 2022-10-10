import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";
import "../styles/TemplateDetails.css";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    yyy: {
      main: "#4754b3",
    },
    secondary: {
      main: "#c77dff",
    },
  },
});

export default function TemplateDetail(props) {
  const [checked, setChecked] = React.useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  let navigate = useNavigate();
  const handleClick = (e) => {
    navigate(props.cardLink);
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={props.cardImage} alt="Card cap" />
      <div className="card-body">
        <h5 className="card-title">{props.cardTitle}</h5>
        <p className="card-text">
          Some quick example text to build on the {props.cardTitle} and make up
          the bulk of the card's content.
        </p>
        <button className="btn-start" onClick={handleClick}>
          Start Drawing
        </button>
        <div className="others">
          <ThemeProvider theme={theme}>
            <Checkbox
              size="large"
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
              icon={<FavoriteBorder color="primary" />}
              checkedIcon={<Favorite />}
            />
            <IconButton color="yyy" aria-label="share" component="label">
              <ShareIcon onClick={handleClick} />
            </IconButton>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
}
