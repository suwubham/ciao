import React from "react";
import Navbar from "../components/Navbar";
import LoggedNavbar from "../components/Navbar_logged";
import authService from "../services/auth.service";

export default function Profile() {
  return (
    <>
      <div className="div wrapper">
        {authService.getCurrentUser() ? <LoggedNavbar /> : <Navbar />}
        <div>Your Profileeee </div>
      </div>
    </>
  );
}
