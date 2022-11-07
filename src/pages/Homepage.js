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

          <div className="main-page-down">
            <div className="shape2">
              <h2 className="shape-text">ASCII</h2>
            </div>
            <div className="divi">
              <h2 className="divi-title">ASCII Art</h2>
              <p>
                A modern CSS UI library based on the glassmorphism design
                principles that will help you quickly design and build beautiful
                websites and applications.
              </p>
              <a href="https://ui.glass">Read more</a>
            </div>
          </div>
        </div>

        <div className="bottom-page">
          <h1 className="quote">Popular Arts</h1>

          <div className="services">
            <div className="service1">
              <p>Review</p>
              <div className="nothing">
                <p>hello</p>
              </div>
            </div>
            <div className="service1">
              <p>Review</p>
            </div>
            <div className="service1">
              <p>Review</p>
            </div>
            <div className="service1">
              <p>Review</p>
            </div>
          </div>
        </div>

        <section className="green">
          <h1>Nice Curves</h1>
          <p>
            Modi officia neque totam laborum. Maiores, molestias. Rem asperiores
            similique reprehenderit consequuntur vero nesciunt nihil nostrum
            ullam maxime nobis pariatur tenetur, atque iusto ad ipsam minus odio
            ipsum omnis veritatis?
          </p>
        </section>
        <div className="spacer layer1 flip"></div>
        <section className="yellow">
          <h1>Nice Curves</h1>
          <p>
            Tenetur ad similique hic debitis ducimus magnam, numquam eaque
            veritatis officia cumque culpa laboriosam dolorem voluptatibus illo
            ratione ex at quas suscipit dolores earum delectus? Voluptatem,
            tenetur! Explicabo, nihil eos!
          </p>
        </section>
        <div className="spacer layer1"></div>
        <section className="orange">
          <h1>Nice Curves</h1>
          <p>
            Illum temporibus aspernatur, enim asperiores reiciendis unde
            doloremque ratione quia, dolore nesciunt iusto sed ut! Laboriosam
            iste nostrum voluptatibus non, aperiam assumenda sit repellendus
            quos nemo necessitatibus adipisci iusto accusamus.
          </p>
        </section>
        <div className="spacer layer1"></div>
        <section className="darkorange">
          <h1>Nice Curves</h1>
          <p>
            Veniam, omnis. Debitis molestias pariatur perferendis ex
            consequuntur mollitia molestiae saepe tempora natus optio. Autem
            aspernatur quae quos eligendi explicabo veniam labore itaque error
            nostrum laborum ut cupiditate, veritatis quaerat!
          </p>
        </section>
        <div className="spacer layer1"></div>
        <section className="red">
          <h1>Nice Curves</h1>
          <p>
            Reiciendis amet odio explicabo. Natus nulla veniam ex dignissimos
            dolorum dicta nostrum, eum sint magni nam harum maiores ratione?
            Quam excepturi ut, sint facilis quo quos temporibus dicta delectus
            aut.
          </p>
        </section>
        <section>
          <h1>Nice Curves</h1>
          <p>
            Quis, quod, molestias ratione animi aliquam asperiores provident
            maxime quasi ipsa unde cum eius dignissimos harum accusantium cumque
            laborum sequi facilis, quidem veritatis quos autem molestiae
            assumenda possimus fuga! Quidem!
          </p>
        </section>
        <section>
          <h1>Nice Curves</h1>
          <p>
            Quo natus dolorum aut sed rem corporis fugit exercitationem quaerat,
            eaque nobis corrupti quam voluptas, nostrum, cum deserunt sit magnam
            id veritatis labore assumenda voluptatem incidunt consequuntur autem
            perspiciatis. Dolores?
          </p>
        </section>
      </div>
    </>
  );
}
