import React, { useState } from "react";
import "../styles/Register-Login.css";
import Navbar from "./Navbar";
import pic from "../assets/illustrations/undraw_color_palette_re_dwy7.svg";

export default function RegisterLogin() {
  let [RegisterMode, setRegisterMode] = useState("signin");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function registerUser(event) {
    event.preventDefault();
    console.log(fname, lname, email, password);
    fetch("http://localhost:5000/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        fname,
        lname,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegisterd");
      });
  }

  function loginUser(event) {
    event.preventDefault();
    console.log(email, password);
    fetch("http://localhost:5000/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "Success");
        if (data.status == "ok") {
          alert("login successful");
          window.location.href = "/home";
        } else {
          alert("User does not exist");
        }
      });
  }

  const changeRegisterMode = () => {
    setRegisterMode(RegisterMode == "signin" ? "signup" : "signin");
  };

  if (RegisterMode === "signin") {
    return (
      <>
        <Navbar />
        <div className="signuppannel">
          <div className="sstitle">New here?</div>
          Sign up now to make awesome arts!
          <button className="signin-link" onClick={changeRegisterMode}>
            Sign Up
          </button>
        </div>
        <div className="container-si">
          <form action="#" class="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" class="btn solid" />
          </form>
        </div>
      </>
    );
  } else
    return (
      <>
        <Navbar />
        <div className="signuppannel">
          <div style={{ fontSize: 30, fontWeight: 600 }}>
            Already have an account?
          </div>
          <button className="signin-link" onClick={changeRegisterMode}>
            Log in
          </button>
        </div>
        <div className="container-su">
          <form action="#" class="sign-up-form">
            <h2 class="title">Sign up</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>

            <div class="input-field">
              <i class="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>

            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" class="btn" value="Sign up" />
          </form>
        </div>
      </>
    );
}
