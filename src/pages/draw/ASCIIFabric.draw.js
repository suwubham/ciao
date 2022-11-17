import React, { useState } from "react";
import "../../styles/FromTemplate.css";
import Navbar from "../../components/Navbar";
import ASCIIFabric from "../../components/art/ASCIIFabric";
import { PrettoSlider } from "../../styles/PrettoSlider";
import { SwatchesPicker } from "react-color";
import Stack from "@mui/material/Stack";
import authService from "../../services/auth.service";
import LoggedNavbar from "../../components/Navbar_logged";
import saveService from "../../services/save.service";
import Menu from "../../components/ArtMenu";
import { ReactComponent as DescriptionIcon } from "../../assets/icons/description.svg";
import TextField from "@mui/material/TextField";

export default function Adraw() {
  const [sizef, setsizef] = useState(30);

  const [backgroundcolor, setbackgroundcolor] = useState({
    rgb: { r: 0, g: 19, b: 20 },
  });

  const handlesizef = (e) => {
    setsizef(e.target.value);
  };
  const handlebackgroundcolor = (color) => {
    setbackgroundcolor(color);
  };

  const [resolution, setresolution] = useState({ x: 900, y: 650 });

  const save = async () => {
    let data = {
      sizef,
      backgroundcolor: { rgb: backgroundcolor.rgb },
      id: 14,
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
        <h1 className="header-title">ASCII Fabric</h1>
        <div className="main-area">
          <nav className="descriptionbar">
            <div className="logo description-link">
              <span className="link-text">Description</span>
              <DescriptionIcon />
            </div>
            <span className="link-text">
              Using a grid approach, ASCII fabric patterns are created. We have
              utilized four different font styles , along with some ASCII
              characters that we found on a website in a variety of forms.Here
              we have used 176,177,178 and 219. We can alter the pattern's size
              as well as the background color to suit our preferences. link of
              the website https://www.asciitable.com/
            </span>
          </nav>
          <div className="main-art">
            <ASCIIFabric
              size={sizef}
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
                10
                <PrettoSlider
                  min={10}
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
            `https://suwubham.github.io/template/ASCIIFabric`
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
