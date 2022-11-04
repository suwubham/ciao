import React, { useState } from "react";
import "../../styles/FromTemplate.css";
import Navbar from "../../components/Navbar";
import Grid from "../../components/art/Grid";
import { SwatchesPicker } from "react-color";
import Stack from "@mui/material/Stack";
import authService from "../../services/auth.service";
import LoggedNavbar from "../../components/Navbar_logged";
import { PrettoSlider } from "../../styles/PrettoSlider";
import saveService from "../../services/save.service";
import Menu from "../../components/ArtMenu";
import { ReactComponent as DescriptionIcon } from "../../assets/icons/description.svg";

export default function Rdraw() {
  const [boldness, setboldness] = useState(30);

  const [backgroundcolor, setbackgroundcolor] = useState({
    rgb: { r: 26, g: 26, b: 26 },
  });
  const [bordercolor, setbordercolor] = useState({
    rgb: { r: 0, g: 19, b: 20 },
  });

  const handleboldness = (e) => {
    setboldness(e.target.value);
  };
  const handlebordercolor = (color) => {
    setbordercolor(color);
  };
  const handlebackgroundcolor = (color) => {
    setbackgroundcolor(color);
  };

  const save = async () => {
    let data = {
      boldness,
      bordercolor: { rgb: bordercolor.rgb },
      backgroundcolor: { rgb: backgroundcolor.rgb },
      id: 13,
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
        <h1 className="header-title">Grid</h1>
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
            <Grid
              bold={boldness}
              background={backgroundcolor}
              border={bordercolor}
            />
          </div>
          <div className="editor">
            <h2>Editor</h2>

            <div className="slider1">
              <h5>StrokeWeight of Border</h5>
              <Stack direction="row" alignItems="center" className="slider">
                0
                <PrettoSlider
                  min={0}
                  max={30}
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  value={boldness}
                  onChange={handleboldness}
                />
                30
              </Stack>
            </div>
            <div className="colorpicker">
              <h5>Border Dominant Color</h5>
              <SwatchesPicker
                color={bordercolor.rgb}
                onChangeComplete={handlebordercolor}
              />
            </div>
            <div className="colorpicker">
              <h5>Grid Dominant Color</h5>
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
            `https://suwubham.github.io/template/Grid`
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
