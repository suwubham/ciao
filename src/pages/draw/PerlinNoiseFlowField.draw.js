import React, { useState } from "react";
import "../../styles/FromTemplate.css";
import Navbar from "../../components/Navbar";
import Perlin from "../../components/art/PerlinNoiseFlowField";
import Stack from "@mui/material/Stack";
import authService from "../../services/auth.service";
import LoggedNavbar from "../../components/Navbar_logged";
import { PrettoSlider } from "../../styles/PrettoSlider";
import saveService from "../../services/save.service";
import Menu from "../../components/ArtMenu";
import { SwatchesPicker } from "react-color";
import { SketchPicker } from "react-color";
import { ReactComponent as DescriptionIcon } from "../../assets/icons/description.svg";
import TextField from "@mui/material/TextField";

export default function Pdraw() {
  const [increment2d, setincrement2d] = useState(20);
  const [bold2d, setbold2d] = useState(2);
  const [layers, setlayers] = useState(10);
  const [backgroundcolor, setbackgroundcolor] = useState({
    rgb: { r: 0, g: 19, b: 20 },
  });
  const [strokecolor, setstrokecolor] = useState({
    rgb: { r: 160, g: 19, b: 20 },
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
  const handlebackgroundcolor = (color) => {
    setbackgroundcolor(color);
  };
  const handlestrokecolor = (color) => {
    setstrokecolor(color);
  };

  const [resolution, setresolution] = useState({ x: 900, y: 650 });

  const save = async () => {
    let data = {
      increment2d,
      bold2d,
      layers,
      backgroundcolor: { rgb: backgroundcolor.rgb },
      strokecolor: { rgb: strokecolor.rgb },
      id: 2,
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
        <h1 className="header-title">Perlin noise flowfield</h1>
        <div className="main-area">
          <nav className="descriptionbar">
            <div className="logo description-link">
              <span className="link-text">Description</span>
              <DescriptionIcon />
            </div>
            <span className="link-text">
              It is possible to create "smooth" randomness in one or more
              dimensions by using Perlin noise, a type of gradient noise. Flow
              fields are a traditional creative coding technique that results in
              strands that appear to be spontaneous on the screen. We modified
              the vector by changing the lines. We basically produced 3D Perlin
              noise using a 2D flow field representation. We have included a
              speed increment editor that allows us to manage the flow field's
              pace while also allowing us to add more layers to our artwork. It
              is also possible to change the background's color.
            </span>
          </nav>
          <div className="main-art">
            <Perlin
              increment={increment2d}
              bold={bold2d}
              layer={layers}
              background={backgroundcolor}
              resolution={resolution}
              stroke={strokecolor}
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
            <div className="editrow1">
              <div className="backgroundcolor">
                <h5>Background Color</h5>
                <SketchPicker
                  color={backgroundcolor.rgb}
                  onChangeComplete={handlebackgroundcolor}
                />
              </div>
              <div className="strokecolor">
                <h5>Stroke Color</h5>
                <SketchPicker
                  color={strokecolor.rgb}
                  onChangeComplete={handlestrokecolor}
                />
              </div>
            </div>
            <div className="slider1">
              <h5>Speed Increment</h5>
              <Stack direction="row" alignItems="center" className="slider">
                1
                <PrettoSlider
                  min={1}
                  max={30}
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  value={increment2d}
                  onChange={handleincrement2d}
                />
                30
              </Stack>
            </div>
            <div className="slider2">
              <h5>StrokeWeight</h5>
              <Stack direction="row" alignItems="center" className="slider">
                1
                <PrettoSlider
                  min={1.4}
                  max={8}
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  value={bold2d}
                  onChange={handlebold2d}
                />
                8
              </Stack>
            </div>
            <div className="slider3">
              <h5>Layers Increment</h5>
              <Stack direction="row" alignItems="center" className="slider">
                5
                <PrettoSlider
                  min={5}
                  max={50}
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  value={layers}
                  onChange={handlelayers}
                />
                50
              </Stack>
            </div>
          </div>
        </div>
      </div>
      <Menu
        share={() => {
          navigator.clipboard.writeText(
            `https://suwubham.github.io/template/perlinnoise`
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
