import React from "react";
import Navbar from "../components/Navbar";
import "../styles/About.css";
import LoggedNavbar from "../components/Navbar_logged";
import authService from "../services/auth.service";
import prasiddhi from "../assets/prasiddhi.jpg";
import boy1 from "../assets/boy1.jpg";
import boy2 from "../assets/boy2.jpg";
import logo from "../assets/ciaologo3.png";

// sendEmail = () => {
//   window.open("mailto:support@example.com?subject=SendMail&body=Description");
// };

export default function About() {
  return (
    <>
      <div className="wrapper-about">
        {authService.getCurrentUser() ? <LoggedNavbar /> : <Navbar />}
        
        <div className="spacer layer1 flip"></div>
        <section className="purple">
        <div className="about">
          Something
        </div>
        </section>

        <div className="spacer layer1"></div>
          <div className="aboutpg">
              <h1>About Us</h1>
          </div>

        <div className="aboutus">
          <div className="card-cus">
            <img src={prasiddhi}  alt="Prasiddhi" className="roundedimg" />
            <div className="container-cus">
              <h3>Prasiddhi Dahal</h3>
              <p className="title-cus"></p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>prasiddhidahal1@gmail.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>

          <div className="card-cus">
            <img src={boy1} width="150px" alt="boy1" className="roundedimg" />
            <div className="container-cus">
              <h3>Shubham Shakya</h3>
              <p className="title-cus"></p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>shakyashubham@gmail.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>

          <div className="card-cus">
            <img src={boy2} alt="boy2" className="roundedimg" />
            <div className="container-cus">
              <h3>Saral Sainju</h3>
              <p className="title-cus"></p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>saral@gmail.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>

          <div className="card-cus">
            <img src={logo} alt="logo" className="roundedimg" />
            <div className="container-cus">
              <h3>Kriti Gautam</h3>
              <p className="title-cus"></p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>gautamkriti@gmail.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}
