import React, { useState } from "react";
import "../../styles/FromTemplate.css";
import Navbar from "../../components/Navbar";
import Mandelbrot from "../../components/art/MandelbrotSet";
import { SwatchesPicker } from "react-color";
import Stack from "@mui/material/Stack";
import authService from "../../services/auth.service";
import LoggedNavbar from "../../components/Navbar_logged";
import { PrettoSlider } from "../../styles/PrettoSlider";
import saveService from "../../services/save.service";
import Menu from "../../components/ArtMenu";
import { ReactComponent as DescriptionIcon } from "../../assets/icons/description.svg";
import TextField from "@mui/material/TextField";

export default function Mdraw() {
  const [incrementm, setincrementm] = useState(100);
  const [transparencym, settransparencym] = useState(255);
  const [backgroundcolor, setbackgroundcolor] = useState({
    rgb: { r: 0, g: 0, b: 0 },
  });

  const handleincrementm = (e) => {
    setincrementm(e.target.value);
  };
  const handletransparencym = (e) => {
    settransparencym(e.target.value);
  };
  const handlebackgroundcolor = (color) => {
    setbackgroundcolor(color);
  };
  const [resolution, setresolution] = useState({ x: 900, y: 650 });

  const save = async () => {
    let data = {
      incrementm,
      transparencym,
      backgroundcolor: { rgb: backgroundcolor.rgb },
      id: 4,
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
        <h1 className="header-title">Mandelbrot Set</h1>
        <div className="main-area">
          <nav className="descriptionbar">
            <div className="logo description-link">
              <span className="link-text">Description</span>
              <DescriptionIcon />
            </div>
            <span className="link-text">
              The Mandelbrot Set is a famously stunning collection of
              complicated numbers. We obtain the Mandelbrot set using the
              recursive formula Zn=Zn-1+C, where c is the complex number. If we
              color-code each plane according to how quickly the number
              increases, we have the Mandelbrot shape. Up to a certain point, we
              can zoom in. And we may alter the alpha value, which
              results  changing background color, as well as the color of the
              Mandelbrot set and the brightness of the border.
            </span>
          </nav>
          <div className="main-art">
            <Mandelbrot
              increment={incrementm}
              transparency={transparencym}
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
              <h5>Brightness Of Border</h5>
              <Stack direction="row" alignItems="center" className="slider">
                40
                <PrettoSlider
                  min={40}
                  max={200}
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  value={incrementm}
                  onChange={handleincrementm}
                />
                200
              </Stack>
            </div>
            <div className="slider2">
              <h5>Alpha Value Of Background</h5>
              <Stack direction="row" alignItems="center" className="slider">
                0
                <PrettoSlider
                  min={50}
                  max={250}
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  value={transparencym}
                  onChange={handletransparencym}
                />
                10
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
            `https://suwubham.github.io/template/mandelbrotset`
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
