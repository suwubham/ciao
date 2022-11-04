import React, { useState } from "react";
import "../../styles/FromTemplate.css";
import Navbar from "../../components/Navbar";
import Perlintriangle from "../../components/art/PerlinTriangle";
import { SwatchesPicker } from "react-color";
import Stack from "@mui/material/Stack";
import authService from "../../services/auth.service";
import LoggedNavbar from "../../components/Navbar_logged";
import { PrettoSlider } from "../../styles/PrettoSlider";
import saveService from "../../services/save.service";
import Menu from "../../components/ArtMenu";
import { ReactComponent as DescriptionIcon } from "../../assets/icons/description.svg";

export default function Rdraw() {
  const [size2d, setsize2d] = useState(10);
  const [alpha2d, setalpha2d] = useState(130);
  const [triangle1color, settriangle1color] = useState({
    rgb: { r: 25, g: 194, b: 209 },
  });
  const [triangle2color, settriangle2color] = useState({
    rgb: { r: 255, g: 194, b: 209 },
  });

  const handlesize2d = (e) => {
    setsize2d(e.target.value);
  };
  const handlealpha2d = (e) => {
    setalpha2d(e.target.value);
  };
  const handletriangle1color = (color) => {
    settriangle1color(color);
  };
  const handletriangle2color = (color) => {
    settriangle2color(color);
  };

  const save = async () => {
    let data = {
      size2d,
      alpha2d,
      triangle1color: { rgb: triangle1color.rgb },
      triangle2color: { rgb: triangle2color.rgb },
      id: 17,
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
        <h1 className="header-title">PERLIN TRIANGLE</h1>
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
            <Perlintriangle
              size={size2d}
              bold={alpha2d}
              triangle1={triangle1color}
              triangle2={triangle2color}
            />
          </div>
          <div className="editor">
            <h2>Editor</h2>
            <div className="slider1">
              <h5>Increment</h5>
              <Stack direction="row" alignItems="center" className="slider">
                4
                <PrettoSlider
                  min={4}
                  max={70}
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  value={size2d}
                  onChange={handlesize2d}
                />
                70
              </Stack>
            </div>
            <div className="slider1">
              <h5>ALPHA</h5>
              <Stack direction="row" alignItems="center" className="slider">
                0
                <PrettoSlider
                  min={0}
                  max={250}
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  value={alpha2d}
                  onChange={handlealpha2d}
                />
                250
              </Stack>
            </div>
            <div className="colorpicker">
              <h5>Triangle1 Color</h5>
              <SwatchesPicker
                color={triangle1color.rgb}
                onChangeComplete={handletriangle1color}
              />
            </div>
            <div className="colorpicker">
              <h5>Triangle2 Color</h5>
              <SwatchesPicker
                color={triangle2color.rgb}
                onChangeComplete={handletriangle2color}
              />
            </div>
          </div>
        </div>
      </div>
      <Menu
        share={() => {
          navigator.clipboard.writeText(
            `https://suwubham.github.io/template/perlintriangle`
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
