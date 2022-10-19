import React from "react";
import Navbar from "../components/Navbar";
import "../styles/About.css";
import LoggedNavbar from "../components/Navbar_logged";
import authService from "../services/auth.service";

export default function About() {
  return (
    <>
      <div className="about">
        {authService.getCurrentUser() ? <LoggedNavbar /> : <Navbar />}
        <div>About</div>
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenu2"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Dropdown
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
            <button class="dropdown-item" type="button">
              Action
            </button>
            <button class="dropdown-item" type="button">
              Another action
            </button>
            <button class="dropdown-item" type="button">
              Something else here
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
