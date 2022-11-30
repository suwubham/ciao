import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Button from "@mui/material/Button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import "../styles/TemplateDetails.css";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import favService from "../services/fav.service";
import authService from "../services/auth.service";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";

const theme = createTheme({
  palette: {
    yyy: {
      main: "#4754b3",
    },
  },
});


export default function TemplateDetail(props) {
  let navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const updateFavorites = async (updatedFavs) => {
    try {
      await favService.setFav(updatedFavs).then((res) => {
        console.log(res);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const action = (
    <React.Fragment>
      <Button
        color="secondary"
        size="small"
        onClick={() => {
          navigate("/signin");
        }}
      >
        Register
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const handleChange = (event) => {
    const updatedFavs = { ...props.favs, [props.id]: event.target.checked };
    props.setfavs(updatedFavs);
    updateFavorites(updatedFavs);
  };

  const nav = () => {
    navigate(props.cardLink);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(
      `https://suwubham.github.io/ciao/${props.cardLink}`
    );
    alert("Copied to clipboard");
  };

  if (props.isLoading && authService.getCurrentUser()) {
    return (
      <>
        <Backdrop open={true}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </>
    );
  }

  if (props.isLoading && !authService.getCurrentUser()) {
    return (
      <>
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={props.cardImage} alt="Card cap" />
          <div className="card-body">
            <h5 className="card-title">{props.cardTitle}</h5>
            <p className="card-text">
              {props.cardDescp}
            </p>
            <button className="btn-start" onClick={nav}>
              Start Drawing.
            </button>
            <div className="others">
              <ThemeProvider theme={theme}>
                <Checkbox
                  size="medium"
                  checked={true}
                  onChange={() => {
                    setOpen(true);
                  }}
                  inputProps={{ "aria-label": "controlled" }}
                  checkedIcon={<FavoriteIcon color="primary" />}
                />
                <IconButton
                  color="primary"
                  aria-label="share"
                  component="label"
                  onClick={handleShare}
                >
                  <ShareIcon />
                </IconButton>
              </ThemeProvider>
            </div>
          </div>
        </div>
        <Snackbar
          open={open}
          onClose={handleClose}
          autoHideDuration={3000}
          message="This feature is only available for registered users."
          action={action}
        />
      </>
    );
  }

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={props.cardImage} alt="Card cap" />
      <div className="card-body">
        <h5 className="card-title">{props.cardTitle}</h5>
        <p className="card-text">
          {props.cardDescp}
        </p>
        <button className="btn-start" onClick={nav}>
          Start Drawing
        </button>
        <div className="others">
          <Checkbox
            size="medium"
            checked={props.favs[props.id]}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
            icon={<FavoriteBorderIcon color="primary" />}
            checkedIcon={<FavoriteIcon color="primary" />}
          />
          <IconButton
            color="primary"
            aria-label="share"
            component="label"
            onClick={handleShare}
          >
            <ShareIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
