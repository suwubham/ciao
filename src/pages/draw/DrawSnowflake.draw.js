import React, { useState } from "react";
import "../../styles/FromTemplate.css";
import Navbar from "../../components/Navbar";
import Drawsnowflake from "../../components/art/DrawSnowflake";
import { SwatchesPicker } from "react-color";
import Stack from "@mui/material/Stack";
import authService from "../../services/auth.service";
import LoggedNavbar from "../../components/Navbar_logged";
import { PrettoSlider } from "../../styles/PrettoSlider";
import saveService from "../../services/save.service";
import Menu from "../../components/ArtMenu";
import { ReactComponent as DescriptionIcon } from "../../assets/icons/description.svg";

export default function Rdraw() {
  const [symmetry2d, setsymmetry2d] = useState(70);
  const [bold2d, setbold2d] = useState(10);
  const [bordercolor, setbordercolor] = useState({
    rgb: { r: 25, g: 194, b: 209 },
  });
  const [backgroundcolor, setbackgroundcolor] = useState({
    rgb: { r: 255, g: 194, b: 209 },
  });

  const handlesymmetry2d = (e) => {
    setsymmetry2d(e.target.value);
  };
  const handlebold2d = (e) => {
    setbold2d(e.target.value);
  };
  const handlebordercolor = (color) => {
    setbordercolor(color);
  };
  const handlebackgroundcolor = (color) => {
    setbackgroundcolor(color);
  };

  const save = async () => {
    let data = {
      symmetry2d,
      bold2d,
      bordercolor: { rgb: bordercolor.rgb },
      backgroundcolor: { rgb: backgroundcolor.rgb },
      id: 19,
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
        <h1 className="header-title">SUPERSHAPE</h1>
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
            <Drawsnowflake
              symmetry={symmetry2d}
              bold={bold2d}
              border={bordercolor}
              background={backgroundcolor}
            />
          </div>
          <div className="editor">
            <h2>Editor</h2>
            <div className="slider1">
              <h5>symmetry</h5>
              <Stack direction="row" alignItems="center" className="slider">
                4
                <PrettoSlider
                  min={4}
                  max={100}
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  value={symmetry2d}
                  onChange={handlesymmetry2d}
                />
                100
              </Stack>
            </div>
            <div className="slider1">
              <h5>BOLDNESS OF BORDER</h5>
              <Stack direction="row" alignItems="center" className="slider">
                0
                <PrettoSlider
                  min={2}
                  max={20}
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  value={bold2d}
                  onChange={handlebold2d}
                />
                5
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
            `https://suwubham.github.io/template/drawsnowflake`
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
