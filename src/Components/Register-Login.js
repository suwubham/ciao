import React, { useState } from "react";
import Logo from "../assets/logo.png";
import "./Register-Login.css";

export default function RegisterLogin() {
  let [RegisterMode, setRegisterMode] = useState("signin");

  const changeRegisterMode = () => {
    setRegisterMode(RegisterMode == "signin" ? "signup" : "signin");
  };

  if (RegisterMode === "signin") {
    return (
      <div className="Main-div">
        <div className="Register-form-container">
          <form className="Register-form">
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
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
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
          <h1>Generate your own Art</h1>
          <h3>
            Work with complex math graphs and <br />
            other image templates to create your art. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Rem doloremque quis a atque quidem
            esse excepturi, architecto amet pariatur impedit. Fuga perspiciatis
            pariatur temporibus veniam. Quod repudiandae eligendi impedit
            beatae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            doloremque quis a atque quidem esse excepturi, architecto amet
            pariatur impedit. Fuga perspiciatis pariatur temporibus veniam. Quod
            repudiandae eligendi impedit beatae! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Rem doloremque quis a atque quidem
            esse excepturi, architecto amet pariatur impedit. Fuga perspiciatis
            pariatur temporibus veniam. Quod repudiandae eligendi impedit
            beatae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            doloremque quis a atque quidem esse excepturi, architecto amet
            pariatur impedit. Fuga perspiciatis pariatur temporibus veniam. Quod
            repudiandae eligendi impedit beatae!
          </h3>
          <img src={Logo} height={100} width={100} />
        </div>
      </div>
    );
  }
  return (
    <div className="Main-div">
      <div className="Register-form-container">
        <form className="Register-form">
          <div className="Register-form-content">
            <h3 className="Register-form-title">Sign Up</h3>
            <div className="text-center">
              Already registered?{" "}
              <span className="signin-link" onClick={changeRegisterMode}>
                Sign In
              </span>
            </div>
            <div className="form-group mt-3">
              <label>First Name</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="e.g Max"
              />
              <label>Last Name</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="e.g Aarons"
              />
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="maxaarons@gmail.comm"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Password"
              />
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="submit-btn">
                  Submit
                </button>
              </div>
              <p className="text-center mt-2">
                Forgot{" "}
                <a href="#" className="link-pwem">
                  password?
                </a>
              </p>
            </div>
          </div>
        </form>
      </div>
      <div className="imageArea">
        <h1>Generate your own Art</h1>
        <h3>
          Work with complex math graphs and <br />
          other image templates to create your art. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Rem doloremque quis a atque quidem esse
          excepturi, architecto amet pariatur impedit. Fuga perspiciatis
          pariatur temporibus veniam. Quod repudiandae eligendi impedit beatae!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
          doloremque quis a atque quidem esse excepturi, architecto amet
          pariatur impedit. Fuga perspiciatis pariatur temporibus veniam. Quod
          repudiandae eligendi impedit beatae! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Rem doloremque quis a atque quidem esse
          excepturi, architecto amet pariatur impedit. Fuga perspiciatis
          pariatur temporibus veniam. Quod repudiandae eligendi impedit beatae!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
          doloremque quis a atque quidem esse excepturi, architecto amet
          pariatur impedit. Fuga perspiciatis pariatur temporibus veniam. Quod
          repudiandae eligendi impedit beatae!
        </h3>
        <img src={Logo} height={100} width={100} />
      </div>
    </div>
  );
}
