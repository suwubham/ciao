import React from "react";
import "../styles/LandingPage.css";
import Logo from "../assets/ciao-3.png";
import Link1 from "../assets/facebook-512.png";
import Link2 from "../assets/instagram-logo-2433.png";
import Link3 from "../assets/twlogo2.png";
import { Routes, Route, useNavigate } from "react-router-dom";
import RegisterLogin from "./Register-Login";
import Homepage from "./Homepage";
export default function LandingPage() {
  let navigate = useNavigate();

  return (
    <>
      <Routes>
        <Route path="/signin" element={<RegisterLogin />} />
        <Route path="/home" element={<Homepage />} />
      </Routes>

      <div className="landingpage-div">
        <header>
          <h3 className="title">C I A O</h3>
          {/* <img src="#" className="ciaoimg" /> */}
        </header>
        <div className="text">
          <div className="maintext">
            <h1 className="TextArea">Generate your own art</h1>
            <h3>
              Work with complex math graphs and <br />
              other image templates to create your art.
            </h3>
            <button
              type="submit"
              className="signin"
              onClick={() => navigate("/home")}
            >
              Get Started
            </button>
          </div>
          <div className="image">
            <img src={Logo} className="ciaoimg" />
          </div>
        </div>
        <footer className="logos">
          <div className="links-list">
            <ul>
              <li>
                <a href="#">
                  <img src={Link1} id="fb" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={Link2} id="insta" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={Link3} id="tw" />
                </a>
              </li>
            </ul>
          </div>
          <p className="copyright">CIAO 2022 copyright - All rights reserved</p>
        </footer>
      </div>
      {/* <footer>
                <div className="row">
                    <div className="col">
                        <p>A web tool that enables the users to produce generative art of different kinds</p>
                    </div>
                    <div className="col">
                        <h3>CONTACT</h3>
                        <p>              </p>
                        <p>Kathmandu University</p>
                        <p>Kavre,Nepal</p>
                        <p>0714547787</p>
                        <p>ciao@gmail.com</p>

                    </div>
                    <div className="col">
                        <p>Prasiddhi Dahal</p>
                        <p>Kriti Gautam</p>
                        <p>Saral Sainju</p>
                        <p>Shubham Shakya</p>
                    </div>
                </div>
                <hr/>

            </footer> */}
    </>
  );
}
