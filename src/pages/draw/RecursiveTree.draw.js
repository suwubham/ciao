import React, { useState } from "react";
import "../../styles/FromTemplate.css";
import Navbar from "../../components/Navbar";
import Recursivetree from "../../components/art/RecursiveTree";
import { SketchPicker } from "react-color";
import { CirclePicker } from "react-color";
import Stack from "@mui/material/Stack";
import authService from "../../services/auth.service";
import LoggedNavbar from "../../components/Navbar_logged";
import { PrettoSlider } from "../../styles/PrettoSlider";
import Menu from "../../components/ArtMenu";
import saveService from "../../services/save.service";
import { ReactComponent as DescriptionIcon } from "../../assets/icons/description.svg";

export default function Tree() {
  const [branchlength, setbranchlength] = useState(100);
  const [leafcolor, setleafcolor] = useState({
    rgb: { r: 191, g: 63, b: 63 },
  });

  const [trunkcolor, settrunkcolor] = useState({
    rgb: { r: 51, g: 51, b: 51 },
  });

  const [backgroundcolor, setbackgroundcolor] = useState({
    rgb: { r: 255, g: 194, b: 209 },
  });

  const save = async () => {
    let data = {
      branchlength,
      leafcolor,
      backgroundcolor: { rgb: backgroundcolor.rgb },
      trunkcolor: { rgb: trunkcolor.rgb },
      id: 5,
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
        <h1 className="header-title">Recursive Tree</h1>
        <div className="main-area">
          <nav className="descriptionbar">
            <div className="logo description-link">
              <span className="link-text">Description</span>
              <DescriptionIcon />
            </div>
            <span className="link-text">
              Recursive Tree (also known as fractal tree) bla bla
            </span>
          </nav>
          <div className="main-art">
            <Recursivetree
              branch={branchlength}
              leaf={leafcolor}
              trunk={trunkcolor}
              background={backgroundcolor}
            />
          </div>
          <div className="editor">
            <h2>Editor</h2>
            <div className="branch">
              <h5>Branch Length</h5>
              <Stack direction="row" alignItems="center" className="slider">
                0
                <PrettoSlider
                  min={0}
                  max={120}
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  defaultValue={branchlength}
                  onChange={(e) => {
                    setbranchlength(e.target.value);
                  }}
                />
                120
              </Stack>
            </div>
            <div className="editrow1">
              <div className="leafcolor">
                <h5>Leaf color</h5>
                <SketchPicker
                  color={leafcolor.rgb}
                  onChangeComplete={(color) => {
                    setleafcolor(color);
                  }}
                />
              </div>
              <div className="backgroundcolor">
                <h5>Background color</h5>
                <SketchPicker
                  color={backgroundcolor.rgb}
                  onChangeComplete={(color) => {
                    setbackgroundcolor(color);
                  }}
                  triangle={"hide"}
                />
              </div>
            </div>

            <div className="trunkcolor">
              <h5>Trunk color</h5>
              <CirclePicker
                color={trunkcolor.rgb}
                onChangeComplete={(color) => {
                  settrunkcolor(color);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <Menu
        share={() => {
          navigator.clipboard.writeText(
            `https://suwubham.github.io/template/recursivetree`
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
