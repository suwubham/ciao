import React, { useState } from "react";
import Logo from "../assets/ciaologo3.png";
import "../styles/Register-Login.css";
import Navbar from "./Navbar";

export default function RegisterLogin() {
  let [RegisterMode, setRegisterMode] = useState("signup");
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
        <div className="Main-div">
          <div className="Register-form-container">
            <form className="Register-form" onSubmit={loginUser}>
              <div className="Register-form-content">
                <h3 className="Register-form-title">Sign In</h3>
                <div className="text-center">
                  Not registered yet?{" "}
                  <span className="signin-link" onClick={changeRegisterMode}>
                    Sign Up
                  </span>
                </div>
                <div className="form-group mt-3">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control mt-1"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control mt-1"
                    placeholder="Enter password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="d-grid gap-2 mt-3">
                  <button type="submit" className="submit-btn">
                    Log In
                  </button>
                </div>
                <p className="text-center mt-2">
                  Forgot{" "}
                  <a href="#" className="link-pwem">
                    password?
                  </a>
                </p>
              </div>
            </form>
          </div>
          <div className="imageArea">
            <h1 className="slogan">Generate your own Art</h1>
            <div className="infographics">
              <div className="infogaphics-box-1"></div>
              <div className="infogaphics-box-2"></div>
              <div className="infogaphics-box-3"></div>
              <div className="infogaphics-box-4"></div>
              <div className="infogaphics-box-5"></div>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <Navbar />
      <div className="Main-div">
        <div className="Register-form-container">
          <form className="Register-form" onSubmit={registerUser}>
            <div className="Register-form-content">
              <h3 className="Register-form-title">Sign Up</h3>
              <div className="text-center">
                Already registered?{" "}
                <span className="signin-link" onClick={changeRegisterMode}>
                  Sign In
                </span>
              </div>
              <div className="form-group mt-1">
                <label>First Name</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="e.g Max"
                  onChange={(e) => setFname(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label>Last Name</label>
                <input
                  type="text"
                  className="form-control mt-2"
                  placeholder="e.g Aarons"
                  onChange={(e) => setLname(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="maxaarons@gmail.comm"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="d-grid gap-2 mt-3">
                  <button type="submit" className="submit-btn">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="imageArea">
          <h1 className="slogan">Generate your own Art</h1>
          <div className="infographics">
              <div className="infogaphics-box-1"></div>
              <div className="infogaphics-box-2"></div>
              <div className="infogaphics-box-3"></div>
              <div className="infogaphics-box-4"></div>
              <div className="infogaphics-box-5"></div>
            </div>
        </div>
      </div>
    </>
  );
}
