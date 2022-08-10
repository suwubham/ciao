import React from "react";
import "./Template.css";
import Logo from "../assets/ciaologo3.png";


export default function Template() {
  return (
    <>
      <div className="templatecards">
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={Logo} alt="Card cap" />
          <hr class="dropdown-divider" />
          <div className="card-body">
            <h5 className="card-title">Phyllotaxis</h5>
            <p className="card-text">
              Some quick example text to build on the Template 1 and make up the
              bulk of the card's content.
            </p>
            <a
              href="http://localhost:3000/phyllotaxis"
              className="btn btn-primary btn-custom"
            >
              Start Drawing
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={Logo} alt="Card cap" />
          <hr class="dropdown-divider" />
          <div className="card-body">
            <h5 className="card-title">Template 2</h5>
            <p className="card-text">
              Some quick example text to build on the Template 2 and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary btn-custom">
              Start Drawing
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={Logo} alt="Card cap" />
          <hr class="dropdown-divider" />
          <div className="card-body">
            <h5 className="card-title">Template 3</h5>
            <p className="card-text">
              Some quick example text to build on the Template 3 and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary btn-custom">
              Start Drawing
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={Logo} alt="Card cap" />
          <hr class="dropdown-divider" />
          <div className="card-body">
            <h5 className="card-title">Template 4</h5>
            <p className="card-text">
              Some quick example text to build on the Template 4 and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary btn-custom">
              Start Drawing
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={Logo} alt="Card cap" />
          <hr class="dropdown-divider" />
          <div className="card-body">
            <h5 className="card-title">Template 5</h5>
            <p className="card-text">
              Some quick example text to build on the Template 5 and make up the
              bulk of the card's content.
            </p>
            <a href="" className="btn btn-primary btn-custom">
              Start Drawing
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={Logo} alt="Card cap" />
          <hr class="dropdown-divider" style={{ color: "rgb(76, 31, 224)" }} />
          <div className="card-body">
            <h5 className="card-title">Template 6</h5>
            <p className="card-text">
              Some quick example text to build on the Template 6 and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary btn-custom">
              Start Drawing
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={Logo} alt="Card cap" />
          <hr class="dropdown-divider" style={{ color: "rgb(76, 31, 224)" }} />
          <div className="card-body">
            <h5 className="card-title">Template 7</h5>
            <p className="card-text">
              Some quick example text to build on the Template 7 and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary btn-custom">
              Start Drawing
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={Logo} alt="Card cap" />
          <hr class="dropdown-divider" style={{ color: "rgb(76, 31, 224)" }} />
          <div className="card-body">
            <h5 className="card-title">Template 8</h5>
            <p className="card-text">
              Some quick example text to build on the Template 8 and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary btn-custom">
              Start Drawing
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
