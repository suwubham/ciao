import React, { useState } from "react";
import "../../styles/FromTemplate.css";
import Navbar from "../../components/Navbar";
import Perlintriangle from "../../components/art/PerlinTriangle";
import { SwatchesPicker } from "react-color";
import Stack from "@mui/material/Stack";
import authService from "../../services/auth.service";
import LoggedNavbar from "../../components/Navbar_logged";
import { PrettoSlider } from "../../styles/PrettoSlider";

export default function Rdraw() {
  const [size2d, setsize2d] = useState(10);
  const [alpha2d, setalpha2d] = useState(130);
  const [triangle1color, settriangle1color] = useState({
    rgb: { r: 25, g: 194, b: 209 },
  });
  const [triangle2color, settriangle2color] = useState({
    rgb: { r: 255, g: 194, b: 209 },
  });

  const handlesize2d = (e) => {
    setsize2d(e.target.value);
  };
  const handlealpha2d = (e) => {
    setalpha2d(e.target.value);
  };
  const handletriangle1color = (color) => {
    settriangle1color(color);
  };
  const handletriangle2color = (color) => {
    settriangle2color(color);
  };

  return (
    <>
      <div className="containerrrrr">
        {authService.getCurrentUser() ? <LoggedNavbar /> : <Navbar />}
        <h1 className="header-title">PERLIN TRIANGLE</h1>
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
            <Perlintriangle
              size={size2d}
              bold={alpha2d}
              triangle1={triangle1color}
              triangle2={triangle2color}
            />
          </div>
          <div className="editor">
            <h2>Editor</h2>
            <div className="slider1">
              <h5>Increment</h5>
              <Stack direction="row" alignItems="center" className="slider">
                4
                <PrettoSlider
                  min={4}
                  max={70}
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  value={size2d}
                  onChange={handlesize2d}
                />
                70
              </Stack>
            </div>
            <div className="slider1">
              <h5>ALPHA</h5>
              <Stack direction="row" alignItems="center" className="slider">
                0
                <PrettoSlider
                  min={0}
                  max={250}
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  value={alpha2d}
                  onChange={handlealpha2d}
                />
                250
              </Stack>
            </div>
            <div className="colorpicker">
              <h5>Triangle1 Color</h5>
              <SwatchesPicker
                color={triangle1color.rgb}
                onChangeComplete={handletriangle1color}
              />
            </div>
            <div className="colorpicker">
              <h5>Triangle2 Color</h5>
              <SwatchesPicker
                color={triangle2color.rgb}
                onChangeComplete={handletriangle2color}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
