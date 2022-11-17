import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import LoggedNavbar from "../components/Navbar_logged";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";
import authService from "../services/auth.service";

export default function Homepage() {
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate("/signin", {
      state: false,
    });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div id="wrapper">
        {authService.getCurrentUser() ? <LoggedNavbar /> : <Navbar />}
        <div className="spacer layer1 flip"></div>

        <section className="purple">
          <div className="ani">
            <h1 className="title">
              Welcome to<div className="headers"> CIAO</div>
            </h1>
            <p className="subtitle">
              A webapp for creating interactive and dynamic generative art.
            </p>
            {authService.getCurrentUser() ? null : (
              <button className="btn-1" onClick={handleClick}>
                Not a user? Signup
              </button>
            )}
          </div>
        </section>
        <div className="spacer layer1"></div>

        <h1 className="second-div-start">What you can do here</h1>

        <div className="template-descp">
          <div className="main-page-left">
            <div className="shape">
              <h2 className="shape-text">Template</h2>
            </div>
            <div className="divi">
              <h2 className="divi-title">Draw From Template</h2>
              <p>
                A modern CSS UI library based on the glassmorphism design
                principles that will help you quickly design and build beautiful
                websites and applications.
              </p>
              <a href="https://ui.glass">Read more</a>
            </div>
          </div>

          <div className="main-page-right">
            <div className="shape2">
              <h2 className="shape-text">Image</h2>
            </div>
            <div className="divi">
              <h2 className="divi-title">Draw from Image</h2>
              <p>
                A modern CSS UI library based on the glassmorphism design
                principles that will help you quickly design and build beautiful
                websites and applications.
              </p>
              <a href="https://ui.glass">Read more</a>
            </div>
          </div>
        </div>

        <h1 className="quote">Popular Arts</h1>

        <div className="bottom-page">
          <div className="services serv1">
            <button className="tryitout1"></button>
          </div>
          <div className="services serv2">
            <button className="tryitout2"></button>
          </div>
          <div className="services serv3">
            <button className="tryitout3"></button>
          </div>
          <div className="services serv4">
            <button className="tryitout4"></button>
          </div>
        </div>

        <footer className="text-center text-lg-start text-muted">
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>

            <div>
              <a href="#" className="me-4 link-secondary">
                <i className="fab fa-facebook-f icons-custom"></i>
              </a>
              <a href="#" className="me-4 link-secondary">
                <i className="fab fa-twitter icons-custom"></i>
              </a>
              <a href="#" className="me-4 link-secondary">
                <i className="fab fa-instagram icons-custom"></i>
              </a>
              <a href="#" className="me-4 link-secondary">
                <i className="fab fa-github icons-custom"></i>
              </a>
            </div>
          </section>

          <section className="">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3 text-secondary icons-custom1"></i>
                    CIAO
                  </h6>
                  <p>
                    CIAO is a webapp for rendering generative art. You can create your own art by drawing 
                    from templates or by uploading your own image. By login in, you can even save your arts.
                  </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Tools</h6>
                  <p>
                    <a onClick={() => navigate("/template")} className="text-reset usefullLink">
                      Draw From Template
                    </a>
                  </p>
                  <p>
                    <a onClick={() => navigate("/image")} className="text-reset usefullLink">
                      Draw From Image
                    </a>
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                  <p>
                    <a href="https://p5js.org/" className="text-reset" target="_blank" rel="noopener noreferrer">
                      p5.js
                    </a>
                  </p>
                  <p>
                    <a href="https://www.javatpoint.com/what-is-ascii-art" className="text-reset" target="_blank" rel="noopener noreferrer">
                      ASCII Art
                    </a>
                  </p>
                  <p>
                    <a onClick={() => navigate("/about")} className="text-reset usefullLink">
                      About this website
                    </a>
                  </p>
                  <p>
                    <a onClick={() => navigate("/about")} className="text-reset usefullLink">
                      Help
                    </a>
                  </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p>
                    <i className="fas fa-home me-3 text-secondary icons-custom"></i>{" "}
                    KU, Dhulikhel, Nepal
                  </p>
                  <p>
                    <i className="fas fa-envelope me-3 text-secondary icons-custom"></i>
                    ciao.art@gmail.com
                  </p>
                  <p>
                    <i className="fas fa-phone me-3 text-secondary icons-custom"></i>{" "}
                    + 01 234 567 88
                  </p>
                  <p>
                    <i className="fas fa-print me-3 text-secondary icons-custom"></i>{" "}
                    + 01 234 567 89
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="text-center p-4">
            © 2022 Copyright
          </div>
        </footer>
      </div>
    </>
  );
}
