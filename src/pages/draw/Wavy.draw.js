import React, { useState, useEffect } from "react";
import "../../styles/FromTemplate.css";
import Navbar from "../../components/Navbar";
import Wavy from "../../components/art/Wavy";
import { SwatchesPicker } from "react-color";
import Stack from "@mui/material/Stack";
import authService from "../../services/auth.service";
import LoggedNavbar from "../../components/Navbar_logged";
import { PrettoSlider } from "../../styles/PrettoSlider";

export default function Rdraw() {
  const [increment2d, setincrement2d] = useState(50);
  const [bold2d, setbold2d] = useState(3);
  const [layers, setlayers] = useState(15);
  const [rotate3d, setrotate3d] = useState(3);
  const [bordercolor, setbordercolor] = useState({
    rgb: { r: 0, g: 19, b: 20 },
  });

  const handleincrement2d = (e) => {
    setincrement2d(e.target.value);
  };
  const handlebold2d = (e) => {
    setbold2d(e.target.value);
  };
  const handlelayers = (e) => {
    setlayers(e.target.value);
  };
  const handlerotate3d = (e) => {
    setrotate3d(e.target.value);
  };
  const handlebordercolor = (color) => {
    setbordercolor(color);
  };

  return (
    <>
      <div className="containerrrrr">
        {authService.getCurrentUser() ? <LoggedNavbar /> : <Navbar />}
        <h1 className="header-title">Wavy line</h1>
        <div className="main-area">
          <nav className="descriptionbar">
            <div className="logo description-link">
              <span className="link-text">Description</span>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="angle-double-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
              >
                <g className="fa-group">
                  <path
                    fill="currentColor"
                    d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                    className="fa-secondary"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                    className="fa-primary"
                  ></path>
                </g>
              </svg>
            </div>
            <span className="link-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
              fugit beatae, dignissimos, ducimus exercitationem culpa a quo
              aperiam quibusdam aliquid autem delectus quos soluta eos sint ex
              vero doloribus. Iste?
            </span>
          </nav>
          <div className="main-art">
            <Wavy
              increment={increment2d}
              bold={bold2d}
              layer={layers}
              rotate={rotate3d}
              border={bordercolor}
            />
          </div>
          <div className="editor">
            <h2>Editor</h2>
            <div className="slider1">
              <h5>Size Increment</h5>
              <Stack direction="row" alignItems="center" className="slider">
                5
                <PrettoSlider
                  min={5}
                  max={150}
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  value={increment2d}
                  onChange={handleincrement2d}
                />
                150
              </Stack>
            </div>
            <div className="slider2">
              <h5>BOLDNESS OF BORDER</h5>
              <Stack direction="row" alignItems="center" className="slider">
                0
                <PrettoSlider
                  min={0}
                  max={20}
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  value={bold2d}
                  onChange={handlebold2d}
                />
                20
              </Stack>
            </div>
            <div className="slider3">
              <h5>Layers Increment</h5>
              <Stack direction="row" alignItems="center" className="slider">
                10
                <PrettoSlider
                  min={10}
                  max={50}
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  value={layers}
                  onChange={handlelayers}
                />
                50
              </Stack>
            </div>
            <div className="slider1">
              <h5>Rotate</h5>
              <Stack direction="row" alignItems="center" className="slider">
                0
                <PrettoSlider
                  min={0}
                  max={180}
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  value={rotate3d}
                  onChange={handlerotate3d}
                />
                180
              </Stack>
            </div>
            <div className="colorpicker">
              <h5>Border Color</h5>
              <SwatchesPicker
                color={bordercolor.rgb}
                onChangeComplete={handlebordercolor}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
