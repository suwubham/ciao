import React, { useState } from "react";
import "../../styles/FromTemplate.css";
import Navbar from "../../components/Navbar";
import Tenprintline from "../../components/art/Tenprint-line";
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
  const [spacing2d, setspacing2d] = useState(9);
  const [inclination, setinclination] = useState(5);
  const [bordercolor, setbordercolor] = useState({
    rgb: { r: 25, g: 194, b: 209 },
  });
  const [backgroundcolor, setbackgroundcolor] = useState({
    rgb: { r: 255, g: 194, b: 209 },
  });

  const handlespacing2d = (e) => {
    setspacing2d(e.target.value);
  };
  const handleinclination = (e) => {
    setinclination(e.target.value);
  };
  const handlebordercolor = (color) => {
    setbordercolor(color);
  };
  const handlebackgroundcolor = (color) => {
    setbackgroundcolor(color);
  }; 
  const [resolution, setresolution] = useState({ x: 600, y: 600 });

  const save = async () => {
    let data = {
      spacing2d,
      inclination,
      bordercolor: { rgb: bordercolor.rgb },
      backgroundcolor: { rgb: backgroundcolor.rgb },
      id: 6,
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
            The use of the if else statement to construct forward and backward slashes results in the creation of an interesting maze pattern. To print 10 lines in horizontal order, we utilized a universal variable and a random variable.
Additionally, we have added certain editors, such as spacing, and we have the ability to change the inclination from extreme right to extreme left. We can experiment with background and border colors as well.
            </span>
          </nav>
          <div className="main-art">
            <Tenprintline
              space={spacing2d}
              incline={inclination}
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
              <h5>Spacing</h5>
              <Stack direction="row" alignItems="center" className="slider">
                6
                <PrettoSlider
                  min={6}
                  max={20}
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  value={spacing2d}
                  onChange={handlespacing2d}
                />
                20
              </Stack>
            </div>
            <div className="slider1">
              <h5>Inclination Shift</h5>
              <Stack direction="row" alignItems="center" className="slider">
                left
                <PrettoSlider
                  min={1}
                  max={10}
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  value={inclination}
                  onChange={handleinclination}
                />
                Right
              </Stack>
            </div>
            <div className="colorpicker">
              <h5>Border Color</h5>
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
            `https://suwubham.github.io/template/Tenprint`
          );
          alert("Copied to clipboard");
        }}
        download={() => {
          window.dispatchEvent(new KeyboardEvent("keydown", { key: "a" }));
        }}
        save={() =>{
          save();
          alert("Saved");
        }}
      />
    </>
  );
}
