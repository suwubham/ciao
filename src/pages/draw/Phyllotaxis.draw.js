import React, { useState } from "react";
import "../../styles/FromTemplate.css";
import Navbar from "../../components/Navbar";
import Phyllotaxis from "../../components/art/Phyllotaxis";
import { SwatchesPicker } from "react-color";
import Stack from "@mui/material/Stack";
import authService from "../../services/auth.service";
import LoggedNavbar from "../../components/Navbar_logged";
import { PrettoSlider } from "../../styles/PrettoSlider";
import saveService from "../../services/save.service";
import Menu from "../../components/ArtMenu";
import { ReactComponent as DescriptionIcon } from "../../assets/icons/description.svg";
import TextField from "@mui/material/TextField";

export default function Phyllotaxisdraw() {
  const [pelletgap, setpelletgap] = useState(3);
  const [pelletradius, setpelletradius] = useState(3);
  const [backgroundcolor, setbackgroundcolor] = useState({
    rgb: { r: 255, g: 194, b: 209 },
  });

  let w = window.innerWidth;
  let h = window.innerHeight;

  const [resolution, setresolution] = useState({ x: 900, y: 650 });

  useState(() => {
    if (w > 1200 || h > 700) {
      resolution.x = 600;
      resolution.y = 600;
      return resolution;
    } else if (w < 1200 || h < 700) {
      resolution.x = 400;
      resolution.y = 400;
      return resolution;
    }
  });

  const save = async () => {
    let data = {
      pelletgap,
      pelletradius,
      backgroundcolor: { rgb: backgroundcolor.rgb },
      resolution,
      id: 1,
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
        <h1 className="header-title">Phyllotaxis</h1>
        <div className="main-area">
          <nav className="descriptionbar">
            <div className="logo description-link">
              <span className="link-text">Description</span>
              <DescriptionIcon />
            </div>
            <span className="link-text">
              A notable instance of self-organized patterning in plants and more
              broadly in developmental biology is phyllotaxis. By varying the
              radius and phi value of a circle, a spiraling sunflower-like
              pattern is created. . To code phyllotaxis pattern we have a
              formula which is given as φ = n * 137.5◦ and r=c√n , where n is
              the number of dots and c is the number of scaling pattern. X= r*
              cos() and Y= r* sin() are used to convert polar coordinates to
              cartesian coordinates. Playing with the pelletradius and pelletgap
              allows us to create a variety of pattern forms. We can also alter
              the resolution and background color of one choice.
            </span>
          </nav>
          <div className="main-art">
            <Phyllotaxis
              pgap={pelletgap}
              pradius={pelletradius}
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
              <h5>Pellet Gap</h5>
              <Stack direction="row" alignItems="center" className="slider">
                0
                <PrettoSlider
                  min={0}
                  max={10}
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  value={pelletgap}
                  onChange={(e) => {
                    setpelletgap(e.target.value);
                  }}
                />
                10
              </Stack>
            </div>
            <div className="slider2">
              <h5>Pellet Radius</h5>
              <Stack direction="row" alignItems="center" className="slider">
                0
                <PrettoSlider
                  min={0}
                  max={10}
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  value={pelletradius}
                  onChange={(e) => {
                    setpelletradius(e.target.value);
                  }}
                />
                10
              </Stack>
            </div>
            <div className="colorpicker">
              <h5>Background Color</h5>
              <SwatchesPicker
                color={backgroundcolor.rgb}
                onChangeComplete={(color) => {
                  setbackgroundcolor(color);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <Menu
        share={() => {
          navigator.clipboard.writeText(
            `https://suwubham.github.io/template/phyllotaxis`
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
