import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  let navigate = useNavigate();
  const handleClick = (e) => {
    navigate("/signin", { state: true });
  };
  return (
    <nav
      className="navbar navbar-custom sticky-top navbar-expand-lg "
      style={{ postion: "fixed" }}
    >
      <div className="container-fluid">
        <button className="navbar-title" onClick={() => navigate("/*")}>
          CIAO
        </button>

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
              <button
                className="nav-link nav-btn"
                aria-current="page"
                onClick={() => navigate("/home")}
              >
                Home
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link nav-btn"
                aria-current="page"
                onClick={() => navigate("/about")}
              >
                About
              </button>
            </li>
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle nav-btn"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Draw
              </button>
              <ul className="dropdown-menu navbar-custom">
                <li>
                  <button
                    className="dropdown-item nav-btn"
                    onClick={() => navigate("/template")}
                  >
                    From Template
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item nav-btn"
                    onClick={() => navigate("/image")}
                  >
                    From Image
                  </button>
                </li>
              </ul>
            </li>
          </ul>

          <form className="d-flex" role="search">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button
                  className="nav-link special"
                  aria-current="page"
                  onClick={handleClick}
                >
                  Login
                  <span className="material-symbols-outlined">login</span>
                </button>
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

        </div>
      </div>
    </nav>
  );
}
