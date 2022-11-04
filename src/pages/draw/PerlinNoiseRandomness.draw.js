import React, { useState } from "react";
import "../../styles/FromTemplate.css";
import Navbar from "../../components/Navbar";
import PerlinNoiseRandomness from "../../components/art/PerlinNoiseRandomness";
import { SwatchesPicker } from "react-color";
import Stack from "@mui/material/Stack";
import authService from "../../services/auth.service";
import LoggedNavbar from "../../components/Navbar_logged";
import { PrettoSlider } from "../../styles/PrettoSlider";
import saveService from "../../services/save.service";
import Menu from "../../components/ArtMenu";
import { ReactComponent as DescriptionIcon } from "../../assets/icons/description.svg";

export default function Pdraw() {
  const [increment2d, setincrement2d] = useState(3);
  const [bold2d, setbold2d] = useState(9);
  const [sizef, setsizef] = useState(15);
  const [bordercolor, setbordercolor] = useState({
    rgb: { r: 25, g: 19, b: 209 },
  });
  const [backgroundcolor, setbackgroundcolor] = useState({
    rgb: { r: 255, g: 194, b: 209 },
  });

  const handleincrement2d = (e) => {
    setincrement2d(e.target.value);
  };
  const handlebold2d = (e) => {
    setbold2d(e.target.value);
  };
  const handlesizef = (e) => {
    setsizef(e.target.value);
  };
  const handlebordercolor = (color) => {
    setbordercolor(color);
  };
  const handlebackgroundcolor = (color) => {
    setbackgroundcolor(color);
  };

  const save = async () => {
    let data = {
      increment2d,
      bold2d,
      sizef,
      bordercolor: { rgb: bordercolor.rgb },
      backgroundcolor: { rgb: backgroundcolor.rgb },
      id: 12,
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
        <h1 className="header-title">Perlin Noise Randomness</h1>
        <div className="main-area">
          <nav className="descriptionbar">
            <div className="logo description-link">
              <span className="link-text">Description</span>
              <DescriptionIcon />
            </div>
            <span className="link-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
              fugit beatae, dignissimos, ducimus exercitationem culpa a quo
              aperiam quibusdam aliquid autem delectus quos soluta eos sint ex
              vero doloribus. Iste?
            </span>
          </nav>
          <div className="main-art">
            <PerlinNoiseRandomness
              increment={increment2d}
              bold={bold2d}
              size={sizef}
              border={bordercolor}
              background={backgroundcolor}
            />
          </div>
          <div className="editor">
            <h2>Editor</h2>
            <div className="slider1">
              <h5>Speed Increment</h5>
              <Stack direction="row" alignItems="center" className="slider">
                3
                <PrettoSlider
                  min={3}
                  max={10}
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  value={increment2d}
                  onChange={handleincrement2d}
                />
                10
              </Stack>
            </div>
            <div className="slider1">
              <h5>Boldness Of Border</h5>
              <Stack direction="row" alignItems="center" className="slider">
                2
                <PrettoSlider
                  min={2}
                  max={7}
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  value={bold2d}
                  onChange={handlebold2d}
                />
                7
              </Stack>
            </div>
            <div className="slider1">
              <h5>Size Increment</h5>
              <Stack direction="row" alignItems="center" className="slider">
                15
                <PrettoSlider
                  min={15}
                  max={50}
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  value={sizef}
                  onChange={handlesizef}
                />
                50
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
            `https://suwubham.github.io/template/pnrandom`
          );
          alert("Copied to clipboard");
        }}
        download={() => {
          window.dispatchEvent(new KeyboardEvent("keydown", { key: "a" }));
        }}
        save={save}
      />
    </>
  );
}
