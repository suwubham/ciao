import React, { useState } from "react";
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
`;

export default function FromImage() {
  const [url, setUrl] = useState();
  const [which, setWhich] = useState();

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
                handleType(e, 3);
              }}
            />
          </div>

          <div className="image-card">
            <input
              type="file"
              accept="image/*"
              className="upload"
              onChange={(e) => {
                handleType(e, 4);
              }}
            />
          </div>

          <div className="image-card">
            <input
              type="file"
              accept="image/*"
              className="upload"
              onChange={(e) => {
                handleType(e, 5);
              }}
            />
          </div>

          <div className="image-card">
            <input
              type="file"
              accept="image/*"
              className="upload"
              onChange={(e) => {
                handleType(e, 6);
              }}
            />
            6
          </div>

          <div className="image-card">
            <input
              type="file"
              accept="image/*"
              className="upload"
              onChange={(e) => {
                handleType(e, 7);
              }}
            />
            7
          </div>

          <div className="image-card">
            <input
              type="file"
              accept="image/*"
              className="upload"
              onChange={(e) => {
                handleType(e, 8);
              }}
            />
          </div>

          <div className="image-card">
            <input
              type="file"
              accept="image/*"
              className="upload"
              onChange={(e) => {
                handleType(e, 9);
              }}
            />
          </div>

          <div className="image-card">
            <input
              type="file"
              accept="image/*"
              className="upload"
              onChange={(e) => {
                handleType(e, 10);
              }}
            />
          </div>

          <div className="image-card">
            <input
              type="file"
              accept="image/*"
              className="upload"
              onChange={(e) => {
                handleType(e, 11);
              }}
            />
          </div>

          <div className="image-card">
            <input
              type="file"
              accept="image/*"
              className="upload"
              onChange={(e) => {
                handleType(e, 12);
              }}
            />
          </div>

          <div className="image-card">
            <input
              type="file"
              accept="image/*"
              className="upload"
              onChange={(e) => {
                handleType(e, 13);
              }}
            />
          </div>
        </section>

        <div className="output">
          <Artoutput which={which} url={url} />
        </div>

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
      </div>
    </>
  );
}
