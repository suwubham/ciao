import React, { useState } from "react";
import "../../styles/FromTemplate.css";
import Navbar from "../../components/Navbar";
import Tenprintcircle from "../../components/art/TenprintCircle";
import { SwatchesPicker } from "react-color";
import Stack from "@mui/material/Stack";
import authService from "../../services/auth.service";
import LoggedNavbar from "../../components/Navbar_logged";
import { PrettoSlider } from "../../styles/PrettoSlider";
import saveService from "../../services/save.service";
import Menu from "../../components/ArtMenu";
import { ReactComponent as DescriptionIcon } from "../../assets/icons/description.svg";
import TextField from "@mui/material/TextField";

export default function Tdraw() {
  const [spacing2d, setspacing2d] = useState(10);
  const [incrementc, setincrementc] = useState(5);
  const [bordercolor, setbordercolor] = useState({
    rgb: { r: 25, g: 194, b: 209 },
  });
  const [backgroundcolor, setbackgroundcolor] = useState({
    rgb: { r: 255, g: 194, b: 209 },
  });

  const handlespacing2d = (e) => {
    setspacing2d(e.target.value);
  };
  const handleincrementc = (e) => {
    setincrementc(e.target.value);
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
      spacing2d,
      incrementc,
      bordercolor: { rgb: bordercolor.rgb },
      backgroundcolor: { rgb: backgroundcolor.rgb },
      id: 7,
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
        <h1 className="header-title">Ten Print Line</h1>
        <div className="main-area">
          <nav className="descriptionbar">
            <div className="logo description-link">
              <span className="link-text">Description</span>
              <DescriptionIcon />
            </div>
            <span className="link-text">
              Circles that do not overlap one another completely cover the
              canvas. Even the circle's size and its frequency in the data can
              be increased. Aside from changing the backdrop color and the
              circle's color, we can also change the canvas's size by adjusting
              the resolution.
            </span>
          </nav>
          <div className="main-art">
            <Tenprintcircle
              space={spacing2d}
              increment={incrementc}
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
              <h5>Size Increment</h5>
              <Stack direction="row" alignItems="center" className="slider">
                5
                <PrettoSlider
                  min={5}
                  max={30}
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  value={spacing2d}
                  onChange={handlespacing2d}
                />
                30
              </Stack>
            </div>
            <div className="slider1">
              <h5>Percentage of occurence of Cicle</h5>
              <Stack direction="row" alignItems="center" className="slider">
                Less
                <PrettoSlider
                  min={4}
                  max={7}
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  value={incrementc}
                  onChange={handleincrementc}
                />
                More
              </Stack>
            </div>
            <div className="colorpicker">
              <h5>Color Of Circle</h5>
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
            `https://suwubham.github.io/template/tenprintcircle`
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
