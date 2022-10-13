import React from "react";
import Navbar from "../components/Navbar";
import "../styles/About.css";
import LoggedNavbar from "../components/Navbar_logged";
import authService from "../services/auth.service";

export default function About() {
  return (
    <>
      {authService.getCurrentUser() ? <LoggedNavbar /> : <Navbar />}
      <div className="about">
        <div>About</div>
        <button
          class="btn btn-primary"
          type="button"
          data-toggle="collapse"
          data-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Button with data-target
        </button>
        <div class="collapse" id="collapseExample">
          <div class="card card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </div>
      </div>
    </>
  );
}
