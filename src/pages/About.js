import React from "react";
import Navbar from "../components/Navbar";
import "../styles/About.css";
import LoggedNavbar from "../components/Navbar_logged";
import authService from "../services/auth.service";
import girl1 from "../assets/girl1.jpg";
import boy1 from "../assets/boy1.jpg";
import boy2 from "../assets/boy2.jpg";
import logo from "../assets/ciaologo3.png";

export default function About() {
  return (
    <>
      <div className="wrapper-about">
        {authService.getCurrentUser() ? <LoggedNavbar /> : <Navbar />}
        <div className="spacer layer1 flip"></div>
        <section className="purple">
          <div className="ani">
            <h1 className="title">
              About Us<div className="headers"> </div>
            </h1>
          </div>
        </section>
        <div className="spacer layer1"></div>
        <div class="row">
          <div class="column">
            <div class="card">
              <img src={girl1} alt="girl1" />
              <div class="container">
                <h2>Prasiddhi Dahal</h2>
                <p class="title"></p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>prasiddhidahal1@gmail.com</p>
                <p>
                  <button class="button">Contact</button>
                </p>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <img src={boy1} alt="boy1" />
              <div class="container">
                <h2>Shubham Shakya</h2>
                <p class="title"></p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>shakyashubham@gmail.com</p>
                <p>
                  <button class="button">Contact</button>
                </p>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <img src={boy2} alt="boy2" />
              <div class="container">
                <h2>Saral Sainju</h2>
                <p class="title"></p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>saral@gmail.com</p>
                <p>
                  <button class="button">Contact</button>
                </p>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <img src={logo} alt="logo" />
              <div class="container">
                <h2>Kriti Gautam</h2>
                <p class="title"></p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>gautamkriti@gmail.com</p>
                <p>
                  <button class="button">Contact</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
