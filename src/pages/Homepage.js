import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import LoggedNavbar from "../components/Navbar_logged";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";
import authService from "../services/auth.service";
import profileService from "../services/profile.service";

export default function Homepage() {
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate("/signin", {
      state: false,
    });
  };
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    window.scrollTo(0, 0);
    if (authService.getCurrentUser()) {
      profileService.getProfile().then(
        (res) => {
          setCurrentUser(res.data.currentUser);
        },
        (error) => {
          console.log("Private page", error.response);
        }
      );
    }
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
            {authService.getCurrentUser() ? (
              <button
                className="btn-1"
                onClick={() => {
                  navigate("/profile");
                }}
              >
                Loged in as {currentUser.username}
              </button>
            ) : (
              <button className="btn-1" onClick={handleClick}>
                Not a user? Signup
              </button>
            )}
          </div>
        </section>
        <div className="spacer layer1"></div>

        <h1 className="second-div-start">Things you can do</h1>

        <div className="template-descp">
          <div className="main-page-left">
            <div className="shape">
              <h2 className="shape-text">Template</h2>
            </div>
            <div className="divi">
              <h2 className="divi-title">Draw From Template</h2>
              <p>
                Pick your favourite template to work with and save them to your profile. You can also edit the template to your liking.
              </p>
              <a href="https://ui.glass" className="readMore-link">Read more</a>
            </div>
          </div>

          <div className="main-page-right">
            <div className="shape2">
              <h2 className="shape-text">Image</h2>
            </div>
            <div className="divi">
              <h2 className="divi-title">Draw from Image</h2>
              <p>
                Upload your own image and the app will translate your art to the selected effect. You can also save the image to your profile.
              </p>
              <a href="https://ui.glass" className="readMore-link">Read more</a>
            </div>
          </div>
        </div>
        <div className="spacer layer1 flip"></div>
        <div className="purple">
          <h1 className="quote">Popular Arts</h1>

          <div className="bottom-page">
            <div className="services serv1 7b2cbf">
              <button className="tryitout1" onClick={() => navigate("/template/perlinnoise")}></button>
            </div>
            <div className="services serv2">
              <button className="tryitout2" onClick={() => navigate("/template/Mandala")}></button>
            </div>
            <div className="services serv3">
              <button className="tryitout3" onClick={() => navigate("/template/Grid")}></button>
            </div>
            <div className="services serv4">
              <button className="tryitout4" onClick={() => navigate("/template/flowerthree")}></button>
            </div>
          </div>
        </div>
        <div className="spacer layer1"></div>

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
                    <i className="fas fa-gem me-3 text-secondary icons-custom"></i>
                    CIAO
                  </h6>
                  <p>CIAO is a webapp for rendering generative art. You can create your own art by drawing
                    from templates or by uploading your own image. By login in, you can even save your arts.</p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Authors</h6>
                  <p>Shubham Shakya</p>
                  <p>Saral Sainju</p>
                  <p>Kriti Gautam</p>
                  <p>Prasiddhi Dahal</p>
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Resources</h6>
                  <p>
                    <a
                      className="text-reset footer-link-custom"
                      href="https://docs.google.com/document/d/1yhrkCX3PeZUtzaWJtJDaD91i18XrzzIN/edit#heading=h.le8z3ynlhtuc"
                      target="_blank" rel="noopener noreferrer"
                    >
                      Documentation
                    </a>
                  </p>
                  <p>
                    <a
                      className="text-reset footer-link-custom"
                      href="https://www.javatpoint.com/what-is-ascii-art"
                      target="_blank" rel="noopener noreferrer"
                    >
                      p5.js
                    </a>
                  </p>
                  <p>
                    <a
                      className="text-reset footer-link-custom"
                      href="https://www.javatpoint.com/what-is-ascii-art"
                      target="_blank" rel="noopener noreferrer"
                    >
                      ASCII Art
                    </a>
                  </p>

                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                  <p>
                    <a
                      className="text-reset footer-link-custom"
                      onClick={() => navigate("/image")}
                    >
                      Art from Image
                    </a>
                  </p>
                  <p>
                    <a
                      className="text-reset footer-link-custom"
                      onClick={() => navigate("/template")}
                    >
                      Art from template
                    </a>
                  </p>
                  {authService.getCurrentUser() ?
                    <p>
                    </p> :
                    <p>
                      <a
                        className="text-reset footer-link-custom"
                        onClick={() => navigate("/signin")}
                      >
                        Signin
                      </a>
                    </p>
                  }

                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p>
                    <i className="fas fa-home me-3 text-secondary icons-custom"></i>{" "}
                    Dhulikhel, Kavre, Nepal
                  </p>
                  <p>
                    <i className="fas fa-envelope me-3 text-secondary icons-custom"></i>
                    carreratciao@gmail.com
                  </p>
                  <p>
                    <i className="fas fa-phone me-3 text-secondary icons-custom"></i>{" "}
                    9865532450
                  </p>
                  <p>
                    <i className="fas fa-print me-3 text-secondary icons-custom"></i>{" "}
                    + 021 556621
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="text-center p-4">
            © 2021 Copyright:
            <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
              CIAO
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
