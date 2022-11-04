import React, { useState } from "react";
import "../styles/FromImage.css";
import authService from "../services/auth.service";
import LoggedNavbar from "../components/Navbar_logged";
import Navbar from "../components/Navbar";
import Artoutput from "../components/Artoutput";
import * as Components from "../styles/signincontainer";

export default function FromImage() {
  const [url, setUrl] = useState();
  const [which, setWhich] = useState();

  const handleType = (e, type) => {
    const [file] = e.target.files;
    setUrl(URL.createObjectURL(file));
    setWhich(type);
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "auto",
    });
  };

  return (
    <>
      <div className="wrapper-image">
        {authService.getCurrentUser() ? <LoggedNavbar /> : <Navbar />}
        <section className="animated-grid">
          <div className="image-card">
            <input
              type="file"
              accept="image/*"
              className="upload"
              onChange={(e) => {
                handleType(e, 1);
              }}
            />
          </div>

          <div className="image-card">
            <input
              type="file"
              accept="image/*"
              className="upload"
              onChange={(e) => {
                handleType(e, 2);
              }}
            />
          </div>

          <div className="image-card">
            <input
              type="file"
              accept="image/*"
              className="upload"
              onChange={(e) => {
                handleType(e, 1);
              }}
            />
          </div>

          <div className="image-card">
            <input
              type="file"
              accept="image/*"
              className="upload"
              onChange={(e) => {
                handleType(e, 1);
              }}
            />
          </div>

          <div className="image-card">
            <input
              type="file"
              accept="image/*"
              className="upload"
              onChange={(e) => {
                handleType(e, 1);
              }}
            />
          </div>
        </section>
        <div className="output">
          <Artoutput which={which} url={url} />
        </div>

        <Components.Button
          className="upload"
          onClick={() => {
            setUrl("");
            setWhich("");
          }}
        >
          Clear
        </Components.Button>
      </div>
    </>
  );
}
