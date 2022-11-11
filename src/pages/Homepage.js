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

  const handleUpload = (e) => {
    console.log(e.target.files[0]);
  };

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

        <h1 className="second-div-start">What you can do in CIAO</h1>

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

          <div className="services">
            <p>Review</p>
          </div>
          <div className="services">
            <p>Review</p>
          </div>
          <div className="services">
            <p>Review</p>
          </div>
          <div className="services">
            <p>Review</p>
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
                    <i className="fas fa-gem me-3 text-secondary icons-custom"></i>Company name
                  </h6>
                  <p>
                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                  <h6 className="text-uppercase fw-bold mb-4">
                    Products
                  </h6>
                  <p>
                    <a href="#!" className="text-reset">Angular</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">React</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Vue</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Laravel</a>
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                  <h6 className="text-uppercase fw-bold mb-4">
                    Useful links
                  </h6>
                  <p>
                    <a href="#!" className="text-reset">Pricing</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Settings</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Orders</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Help</a>
                  </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p><i className="fas fa-home me-3 text-secondary icons-custom"></i> New York, NY 10012, US</p>
                  <p>
                    <i className="fas fa-envelope me-3 text-secondary icons-custom"></i>
                    info@example.com
                  </p>
                  <p><i className="fas fa-phone me-3 text-secondary icons-custom"></i> + 01 234 567 88</p>
                  <p><i className="fas fa-print me-3 text-secondary icons-custom"></i> + 01 234 567 89</p>
                </div>

              </div>

            </div>
          </section>

          <div className="text-center p-4" >
            © 2021 Copyright:
            <a className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
          </div>

        </footer>

      </div>
    </>
  );
}
