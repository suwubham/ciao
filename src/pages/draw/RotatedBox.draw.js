import React, { useState } from "react";
import "../../styles/FromTemplate.css";
import Navbar from "../../components/Navbar";
import Rotatedbox from "../../components/art/RotatedBox";
import { SwatchesPicker } from "react-color";
import Stack from "@mui/material/Stack";
import authService from "../../services/auth.service";
import LoggedNavbar from "../../components/Navbar_logged";
import { PrettoSlider } from "../../styles/PrettoSlider";
import saveService from "../../services/save.service";
import Menu from "../../components/ArtMenu";
import { ReactComponent as DescriptionIcon } from "../../assets/icons/description.svg";
import TextField from "@mui/material/TextField";

export default function Rbox() {
  const [increment2d, setincrement2d] = useState(25);
  const [boldness, setboldness] = useState(2);
  const [bordercolor, setbordercolor] = useState({
    rgb: { r: 257, g: 16, b: 100 },
  });
  const [backgroundcolor, setbackgroundcolor] = useState({
    rgb: { r: 26, g: 26, b: 26 },
  });

  const handleincrement2d = (e) => {
    setincrement2d(e.target.value);
  };
  const handleboldness = (e) => {
    setboldness(e.target.value);
  };
  const handlebordercolor = (color) => {
    setbordercolor(color);
  };
  const handlebackgroundcolor = (color) => {
    setbackgroundcolor(color);
  };
  const [resolution, setresolution] = useState({ x: 900, y: 650 });

  const save = async () => {
    let data = {
      increment2d,
      boldness,
      bordercolor: { rgb: bordercolor.rgb },
      backgroundcolor: { rgb: backgroundcolor.rgb },
      id: 9,
      resolution,
    };
    try {
      await saveService.save(data).then((res) => {
        console.log(res);
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="containerrrrr">
        {authService.getCurrentUser() ? <LoggedNavbar /> : <Navbar />}
        <h1 className="header-title">Rotated Box</h1>
        <div className="main-area">
          <nav className="descriptionbar">
            <div className="logo description-link">
              <span className="link-text">Description</span>
              <DescriptionIcon />
            </div>
            <span className="link-text">
              The rectangles can also be turned around and positioned at a
              45-degree angle. As a result of different types of rectangles
              covering one another, an intriguing work of art results. We can
              alter both the dominant and background colors. The line's stroke
              and the rectangle's size can both be increased in a similar
              manner.
            </span>
          </nav>
          <div className="main-art">
            <Rotatedbox
              increment={increment2d}
              bold={boldness}
              border={bordercolor}
              background={backgroundcolor}
              resolution={resolution}
            />
          </div>
          <div className="editor">
            <h2>Editor</h2>
            <div className="resolution">
              <h5>Resolution</h5>
              <div className="fields">
                <TextField
                  sx={{ input: { color: "white" } }}
                  defaultValue={resolution.x}
                  label="Width"
                  type="number"
                  color="secondary"
                  focused
                  onChange={(e) => {
                    setresolution({
                      x: parseInt(e.target.value),
                      y: resolution.y,
                    });
                  }}
                />
                <TextField
                  sx={{ input: { color: "white" } }}
                  defaultValue={resolution.y}
                  label="Height"
                  type="number"
                  color="secondary"
                  focused
                  onChange={(e) => {
                    setresolution({
                      x: resolution.x,
                      y: parseInt(e.target.value),
                    });
                  }}
                />
              </div>
            </div>
            <div className="slider1">
              <h5>Increment in Size</h5>
              <Stack direction="row" alignItems="center" className="slider">
                10
                <PrettoSlider
                  min={10}
                  max={60}
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  value={increment2d}
                  onChange={handleincrement2d}
                />
                60
              </Stack>
            </div>
            <div className="slider1">
              <h5>StrokeWeight of Border</h5>
              <Stack direction="row" alignItems="center" className="slider">
                1
                <PrettoSlider
                  min={1}
                  max={5}
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  value={boldness}
                  onChange={handleboldness}
                />
                5
              </Stack>
            </div>
            <div className="colorpicker">
              <h5>Dominant Color</h5>
              <SwatchesPicker
                color={bordercolor.rgb}
                onChangeComplete={handlebordercolor}
              />
            </div>
            <div className="colorpicker">
              <h5>Background Color</h5>
              <SwatchesPicker
                color={backgroundcolor.rgb}
                onChangeComplete={handlebackgroundcolor}
              />
            </div>
          </div>
        </div>
      </div>
      <Menu
        share={() => {
          navigator.clipboard.writeText(
            `https://suwubham.github.io/template/rotatedbox`
          );
          alert("Copied to clipboard");
        }}
        download={() => {
          window.dispatchEvent(new KeyboardEvent("keydown", { key: "a" }));
        }}
        save={() => {
          save();
          alert("Saved");
        }}
      />
    </>
  );
}
