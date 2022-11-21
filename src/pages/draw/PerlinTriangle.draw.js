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
import TextField from "@mui/material/TextField";

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
  const [resolution, setresolution] = useState({ x: 900, y: 650 });

  const save = async () => {
    let data = {
      size2d,
      alpha2d,
      triangle1color: { rgb: triangle1color.rgb },
      triangle2color: { rgb: triangle2color.rgb },
      id: 17,
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
        <h1 className="header-title">PERLIN TRIANGLE</h1>
        <div className="main-area">
          <nav className="descriptionbar">
            <div className="logo description-link">
              <span className="link-text">Description</span>
              <DescriptionIcon />
            </div>
            <span className="link-text">
              In the Perlin noise triangle, we used a straightforward grid
              system of logic. Here, triangles are formed using four different
              sorts of parameters and three different color palettes. While the
              remaining triangles are colored using the editor's alpha value,
              the two sorts of triangles can have their colors selected using
              the color palette.
            </span>
          </nav>
          <div className="main-art">
            <Perlintriangle
              size={size2d}
              bold={alpha2d}
              triangle1={triangle1color}
              triangle2={triangle2color}
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
        save={() => {
          save();
          alert("Saved");
        }}
      />
    </>
  );
}
