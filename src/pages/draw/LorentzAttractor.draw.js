import React, { useState } from "react";
import "../../styles/FromTemplate.css";
import Navbar from "../../components/Navbar";
import Lorentz from "../../components/art/LorentzAttractor";
import Stack from "@mui/material/Stack";
import authService from "../../services/auth.service";
import LoggedNavbar from "../../components/Navbar_logged";
import { PrettoSlider } from "../../styles/PrettoSlider";
import saveService from "../../services/save.service";
import Menu from "../../components/ArtMenu";
import { SwatchesPicker } from "react-color";
import { ReactComponent as DescriptionIcon } from "../../assets/icons/description.svg";
import TextField from "@mui/material/TextField";

export default function Rdraw() {
  const [increment2d, setincrement2d] = useState(60);
  const [sizef, setsizef] = useState(60);
  const [backgroundcolor, setbackgroundcolor] = useState({
    rgb: { r: 0, g: 0, b: 0 },
  });

  const handleincrement2d = (e) => {
    setincrement2d(e.target.value);
  };

  const handlesizef = (e) => {
    setsizef(e.target.value);
  };

  const handlebackgroundcolor = (color) => {
    setbackgroundcolor(color);
  };
  const [resolution, setresolution] = useState({ x: 900, y: 650 });

  const save = async () => {
    let data = {
      increment2d,
      sizef,
      backgroundcolor: { rgb: backgroundcolor.rgb },
      id: 3,
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
        <h1 className="header-title">Lorentz Attractor</h1>
        <div className="main-area">
          <nav className="descriptionbar">
            <div className="logo description-link">
              <span className="link-text">Description</span>
              <DescriptionIcon />
            </div>
            <span className="link-text">
              Edward Lorentz discovered the Lorentz attractor, a 3D work of art,
              while researching the atmosphere. There are ordinary differential
              equations in it. We obtain the image on the canvas using the
              variables x, y, and z. The first point in the Lorenz attractor is
              arbitrary located, but the second point is determined by observing
              the first. This attractor never travels to the same spot twice and
              changes location at random. We have the ability to modify the
              attractor's size, speed, and backdrop color.
            </span>
          </nav>
          <div className="main-art">
            <Lorentz
              increment={increment2d}
              size={sizef}
              // border={bordercolor}
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
              <h5>Speed Increment</h5>
              <Stack direction="row" alignItems="center" className="slider">
                40
                <PrettoSlider
                  min={40}
                  max={100}
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  value={increment2d}
                  onChange={handleincrement2d}
                />
                100
              </Stack>
            </div>
            <div className="slider1">
              <h5>Size</h5>
              <Stack direction="row" alignItems="center" className="slider">
                50
                <PrettoSlider
                  min={50}
                  max={90}
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  value={sizef}
                  onChange={handlesizef}
                />
                90
              </Stack>
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
            `https://suwubham.github.io/template/lorentzattractor`
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
