import React, { useState, useRef } from "react";
import "../styles/FromImage.css";
import authService from "../services/auth.service";
import LoggedNavbar from "../components/Navbar_logged";
import Navbar from "../components/Navbar";
import Artoutput from "../components/Artoutput";
import styled from "styled-components";

const Btn = styled.button`
  border-radius: 20px;
  border: none;
  background: linear-gradient(
    135deg,
    rgba(0, 18, 32, 0.4),
    rgba(0, 18, 32, 0.2)
  );
  backdrop-filter: blur(3px);
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  &:hover {
    background-color: #c77dff;
  }

  &:hover .orig-text {
    display: none;
  }

  &:hover .effect-name {
    display: block;
  }

  .orig-text {
    display: inline-block;
  }

  .small-text,
  .effect-name {
    display: none;
  }

  @media only screen and (max-width: 1100px) {
    .orig-text {
      display: none;
    }

    .small-text {
      display: inline-block;
    }

    &:hover .effect-name {
      display: block;
    }

    &:hover .small-text {
      display: none;
    }

    font-size: 12px;
    border-radius: 10px;
    border: none;
    padding: 6px 20px;
  }

  @media only screen and (max-width: 320px) {
    .orig-text {
      display: none;
    }

    .small-text {
      display: inline-block;
    }

    &:hover .effect-name {
      display: block;
    }

    &:hover .small-text {
      display: none;
    }

    font-size: 6px;
    border-radius: 5px;
    border: none;
    padding: 3px 10px;
  }
`;

export default function FromImage() {
  const [url, setUrl] = useState();
  const [which, setWhich] = useState();

  const hiddenFileInput1 = useRef();
  const hiddenFileInput2 = useRef();
  const hiddenFileInput3 = useRef();
  const hiddenFileInput4 = useRef();
  const hiddenFileInput5 = useRef();
  const hiddenFileInput6 = useRef();
  const hiddenFileInput7 = useRef();
  const hiddenFileInput8 = useRef();
  const hiddenFileInput9 = useRef();
  const hiddenFileInput10 = useRef();
  const hiddenFileInput11 = useRef();
  const hiddenFileInput12 = useRef();
  const hiddenFileInput13 = useRef();

  const handleType = (e, type) => {
    const [file] = e.target.files;
    setUrl(URL.createObjectURL(file));
    setWhich(type);
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "auto",
      });
    }, 1000);
  };

  return (
    <>
      <div className="wrapper-image">
        {authService.getCurrentUser() ? <LoggedNavbar /> : <Navbar />}

        <section className="animated-grid">
          <div className="image-card">
            <Btn
              onClick={() => {
                hiddenFileInput1.current.click();
              }}
            >
              <span className="orig-text">Click to try effect</span>
              <span className="effect-name">Circles Effect</span>
              <span className="small-text">Try effect</span>
            </Btn>
            <input
              type="file"
              accept="image/*"
              ref={hiddenFileInput1}
              className="upload"
              style={{ display: "none" }}
              onChange={(e) => {
                handleType(e, 1);
              }}
            />
          </div>

          <div className="image-card">
            <Btn
              onClick={() => {
                hiddenFileInput2.current.click();
              }}
            >
              <span className="orig-text">Click to try effect</span>
              <span className="effect-name">Imagenoise Effect</span>
              <span className="small-text">Try effect</span>
            </Btn>
            <input
              type="file"
              accept="image/*"
              ref={hiddenFileInput2}
              className="upload"
              style={{ display: "none" }}
              onChange={(e) => {
                handleType(e, 2);
              }}
            />
          </div>

          <div className="image-card">
            <Btn
              onClick={() => {
                hiddenFileInput3.current.click();
              }}
            >
              <span className="orig-text">Click to try effect</span>
              <span className="effect-name">Posterize Effect</span>
              <span className="small-text">Try effect</span>
            </Btn>
            <input
              type="file"
              accept="image/*"
              ref={hiddenFileInput3}
              className="upload"
              style={{ display: "none" }}
              onChange={(e) => {
                handleType(e, 3);
              }}
            />
          </div>

          <div className="image-card">
            <Btn
              onClick={() => {
                hiddenFileInput4.current.click();
              }}
            >
              <span className="orig-text">Click to try effect</span>
              <span className="effect-name">Collage1</span>
              <span className="small-text">Try effect</span>
            </Btn>
            <input
              type="file"
              accept="image/*"
              ref={hiddenFileInput4}
              className="upload"
              style={{ display: "none" }}
              onChange={(e) => {
                handleType(e, 4);
              }}
            />
          </div>

          <div className="image-card">
            <Btn
              onClick={() => {
                hiddenFileInput5.current.click();
              }}
            >
              <span className="orig-text">Click to try effect</span>
              <span className="effect-name">Imageglow Effect</span>
              <span className="small-text">Try effect</span>
            </Btn>
            <input
              type="file"
              accept="image/*"
              ref={hiddenFileInput5}
              className="upload"
              style={{ display: "none" }}
              onChange={(e) => {
                handleType(e, 5);
              }}
            />
          </div>

          <div className="image-card">
            <Btn
              onClick={() => {
                hiddenFileInput6.current.click();
              }}
            >
              <span className="orig-text">Click to try effect</span>
              <span className="effect-name">RGB Translate</span>
              <span className="small-text">Try effect</span>
            </Btn>
            <input
              type="file"
              accept="image/*"
              ref={hiddenFileInput6}
              className="upload"
              style={{ display: "none" }}
              onChange={(e) => {
                handleType(e, 6);
              }}
            />
          </div>

          <div className="image-card">
            <Btn
              onClick={() => {
                hiddenFileInput7.current.click();
              }}
            >
              <span className="orig-text">Click to try effect</span>
              <span className="effect-name">Imagedots Effect</span>
              <span className="small-text">Try effect</span>
            </Btn>
            <input
              type="file"
              accept="image/*"
              ref={hiddenFileInput7}
              className="upload"
              style={{ display: "none" }}
              onChange={(e) => {
                handleType(e, 7);
              }}
            />
          </div>

          <div className="image-card">
            <Btn
              onClick={() => {
                hiddenFileInput8.current.click();
              }}
            >
              <span className="orig-text">Click to try effect</span>
              <span className="effect-name">Threshold Effect</span>
              <span className="small-text">Try effect</span>
            </Btn>
            <input
              type="file"
              accept="image/*"
              ref={hiddenFileInput8}
              className="upload"
              style={{ display: "none" }}
              onChange={(e) => {
                handleType(e, 8);
              }}
            />
          </div>

          <div className="image-card">
            <Btn
              onClick={() => {
                hiddenFileInput9.current.click();
              }}
            >
              <span className="orig-text">Click to try effect</span>
              <span className="effect-name">Imagelines Effect</span>
              <span className="small-text">Try effect</span>
            </Btn>
            <input
              type="file"
              accept="image/*"
              ref={hiddenFileInput9}
              className="upload"
              style={{ display: "none" }}
              onChange={(e) => {
                handleType(e, 9);
              }}
            />
          </div>

          <div className="image-card">
            <Btn
              onClick={() => {
                hiddenFileInput10.current.click();
              }}
            >
              <span className="orig-text">Click to try effect</span>
              <span className="effect-name">Collage2</span>
              <span className="small-text">Try effect</span>
            </Btn>
            <input
              type="file"
              accept="image/*"
              ref={hiddenFileInput10}
              className="upload"
              style={{ display: "none" }}
              onChange={(e) => {
                handleType(e, 10);
              }}
            />
          </div>

          <div className="image-card">
            <Btn
              onClick={() => {
                hiddenFileInput11.current.click();
              }}
            >
              <span className="orig-text">Click to try effect</span>
              <span className="effect-name">Asciiart</span>
              <span className="small-text">Try effect</span>
            </Btn>
            <input
              type="file"
              accept="image/*"
              ref={hiddenFileInput11}
              className="upload"
              style={{ display: "none" }}
              onChange={(e) => {
                handleType(e, 11);
              }}
            />
          </div>

          <div className="image-card">
            <Btn
              onClick={() => {
                hiddenFileInput12.current.click();
              }}
            >
              <span className="orig-text">Click to try effect</span>
              <span className="effect-name">Invert Effect</span>
              <span className="small-text">Try effect</span>
            </Btn>
            <input
              type="file"
              accept="image/*"
              ref={hiddenFileInput12}
              className="upload"
              style={{ display: "none" }}
              onChange={(e) => {
                handleType(e, 12);
              }}
            />
          </div>

          <div className="image-card">
            <Btn
              onClick={() => {
                hiddenFileInput13.current.click();
              }}
            >
              <span className="orig-text">Click to try effect</span>
              <span className="effect-name">SwapRB Effect</span>
              <span className="small-text">Try effect</span>
            </Btn>
            <input
              type="file"
              accept="image/*"
              ref={hiddenFileInput13}
              className="upload"
              style={{ display: "none" }}
              onChange={(e) => {
                handleType(e, 13);
              }}
            />
          </div>
        </section>

        <div className="output">
          <Artoutput which={which} url={url} />
        </div>
        <div className="button-others">
          {url ? (
            <>
              <Btn
                className="upload"
                onClick={() => {
                  setUrl("");
                  setWhich("");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Clear
              </Btn>
              <Btn
                className="upload"
                onClick={() => {
                  window.dispatchEvent(
                    new KeyboardEvent("keydown", { key: "d" })
                  );
                }}
              >
                Download
              </Btn>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
