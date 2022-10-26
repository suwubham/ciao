import React, { useState } from "react";
import "../../styles/FromTemplate.css";
import Navbar from "../../components/Navbar";
import Recursivetree from "../../components/art/RecursiveTree";
import { SketchPicker } from "react-color";
import { CirclePicker } from "react-color";
import Stack from "@mui/material/Stack";
import authService from "../../services/auth.service";
import LoggedNavbar from "../../components/Navbar_logged";
import { PrettoSlider } from "../../styles/PrettoSlider";

export default function Tree() {
  const [branchlength, setbranchlength] = useState(100);
  const [leafcolor, setleafcolor] = useState({
    rgb: { r: 191, g: 63, b: 63 },
  });

  const [trunkcolor, settrunkcolor] = useState({
    rgb: { r: 51, g: 51, b: 51 },
  });

  const [backgroundcolor, setbackgroundcolor] = useState({
    rgb: { r: 255, g: 194, b: 209 },
  });

  const handlebranchlength = (e) => {
    setbranchlength(e.target.value);
  };

  const handleleafcolor = (color) => {
    setleafcolor(color);
  };

  const handletrunkcolor = (color) => {
    settrunkcolor(color);
  };

  const handlebackgroundcolor = (color) => {
    setbackgroundcolor(color);
  };

  return (
    <>
      <div className="containerrrrr">
        {authService.getCurrentUser() ? <LoggedNavbar /> : <Navbar />}
        <h1 className="header-title">Recursive Tree</h1>
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
              Recursive Tree (also known as fractal tree) bla bla
            </span>
          </nav>
          <div className="main-art">
            <Recursivetree
              branch={branchlength}
              leaf={leafcolor}
              trunk={trunkcolor}
              background={backgroundcolor}
            />
          </div>
          <div className="editor">
            <h2>Editor</h2>
            <div className="branch">
              <h5>Branch Length</h5>
              <Stack direction="row" alignItems="center" className="slider">
                0
                <PrettoSlider
                  min={0}
                  max={120}
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  defaultValue={branchlength}
                  onChange={handlebranchlength}
                />
                120
              </Stack>
            </div>
            <div className="editrow1">
              <div className="leafcolor">
                <h5>Leaf color</h5>
                <SketchPicker
                  color={leafcolor.rgb}
                  onChangeComplete={handleleafcolor}
                />
              </div>
              <div className="backgroundcolor">
                <h5>Background color</h5>
                <SketchPicker
                  color={backgroundcolor.rgb}
                  onChangeComplete={handlebackgroundcolor}
                  triangle={"hide"}
                />
              </div>
            </div>

            <div className="trunkcolor">
              <h5>Trunk color</h5>
              <CirclePicker
                color={trunkcolor.rgb}
                onChangeComplete={handletrunkcolor}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
