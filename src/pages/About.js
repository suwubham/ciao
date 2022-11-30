import React from "react";
import Navbar from "../components/Navbar";
import "../styles/About.css";
import LoggedNavbar from "../components/Navbar_logged";
import authService from "../services/auth.service";
import prasiddhi from "../assets/prasiddhi.jpg";
import Profileicon from "../assets/icons/profilepageicion.jpeg";

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
            <p className="CIAOAbout">
              <strong>CIAO</strong> is a webapp for rendering generative art.
              You can create your own art by drawing from templates or by uploading your own image.
              Generative art refers to any art practice where the artist uses a system,
              such as a set of natural language rules, a computer program, a machine, or other procedural invention,
              which is set into motion with some degree of autonomy contributing to or resulting in a completed work of art.
              This app uses p5.js library to render the art. You can learn more about p5.js from <a href="https://p5js.org/" className="text-reset p5Link" target="_blank" rel="noopener noreferrer">here</a>.
            </p>

            <div className="drawAbout">
              <p className="drawText">
                <h3 className="drawAboutTitle">Template</h3>
                The user can generate art by choosing from 19 different templates including some of physics' and
                mathematics's most famous equations like Perlin Noise flow field and the Mandelbrot Set. The user
                can also choose the color of the art and the background color.</p>

              <p className="drawText">
                <h3 className="drawAboutTitle">Image</h3>
                The user can alter their images using the art from image effect. Some popular effect the app
                provides are the Invert and SwapRedBlue effect, the circle effect, and the Image noise effect.
                The user can also download the generated image.</p>
            </div>

          </div>
        </section>

        <div className="spacer layer1"></div>
        <div className="aboutpg">
          <h1>About Us</h1>
        </div>

        <div className="aboutus">
          <div className="card-cus">
            <img src={prasiddhi} alt="Prasiddhi" className="roundedimg" />
            <div className="container-cus">
              <h3>Prasiddhi Dahal</h3>
              <p className="title-cus"></p>
              <p>Some text.</p>
              <p>Some text.</p>
              <p>prasiddhidahal1@gmail.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>

          <div className="card-cus">
            <img src={Profileicon} width="150px" alt="boy1" className="roundedimg" />
            <div className="container-cus">
              <h3>Shubham Shakya</h3>
              <p className="title-cus"></p>
              <p>Some text.</p>
              <p>Some text.</p>
              <p>shakyashubham@gmail.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>

          <div className="card-cus">
            <img src={Profileicon} alt="boy2" className="roundedimg" />
            <div className="container-cus">
              <h3>Saral Sainju</h3>
              <p className="title-cus"></p>
              <p>Learning Web Development.</p>
              <p>Learning Data Structures and Algorithms</p>
              <p>sainjusaral433@gmail.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>

          <div className="card-cus">
            <img src={Profileicon} alt="logo" className="roundedimg" />
            <div className="container-cus">
              <h3>Kriti Gautam</h3>
              <p className="title-cus"></p>
              <p>Some text.</p>
              <p>Some text.</p>
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
