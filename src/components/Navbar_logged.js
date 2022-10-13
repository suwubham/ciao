import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import Authservice from "../services/auth.service";

export default function Navbar() {
  let navigate = useNavigate();

  const handleClick = (e) => {
    Authservice.logout();
    navigate("/home", { state: true });
  };

  useEffect(() => {
    if (Authservice.getCurrentUser() === null) {
      navigate("/signin", { state: true });
    }
  });

  return (
    <nav
      className="navbar navbar-custom sticky-top navbar-expand-lg "
      style={{ postion: "fixed" }}
    >
      <div className="container-fluid">
        <a className="navbar-title" onClick={() => navigate("/home")}>
          CIAO
        </a>

        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon my-toggler"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link"
                aria-current="page"
                onClick={() => navigate("/home")}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                aria-current="page"
                onClick={() => navigate("/about")}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => navigate("/yourarts")}>
                Your Arts{" "}
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Draw
              </a>
              <ul className="dropdown-menu navbar-custom">
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => navigate("/template")}
                  >
                    From Template
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    From Image
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    ASCII art
                  </a>
                </li>
              </ul>
            </li>

          </ul>

          <form className="d-flex" role="search">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle" /*className="nav-link special"*/
                  /*aria-current="page"*/
                  hfer="#"
                  role="button"
                  data-bs-toggle="dropdown"
                aria-expanded="false"
                  /*onClick={handleClick}*/
                >
                  Profile
                </a>
                <ul className="dropdown-menu navbar-custom">
                <li>
                  <a
                    className="dropdown-item" href="#"
                  >
                    UserName
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" onClick={handleClick}>
                  Log Out
                  <span className="material-symbols-outlined">logout</span>
                  </a>
                </li>
              </ul>
              </li>
            </ul>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="search-btn" type="submit">
              Search
            </button>
          </form>

          {/* <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link navbar-custom"
                id="Profile-btn"
                onClick={() => navigate("/profile")}
              >
                Profile
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    </nav>
  );
}