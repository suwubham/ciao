import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Register-Login.css";
import Navbar from "./Navbar";
import * as Components from "../styles/signincontainer";

export default function RegisterLogin() {
  const location = useLocation();
  const [name, setname] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [signIn, toggle] = useState(location.state);

  function registerUser(event) {
    event.preventDefault();
    fetch("http://localhost:5000/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name,
        username,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("signup successful");
        console.log(data, "userRegisterd");
      });
  }

  function loginUser(event) {
    event.preventDefault();
    fetch("http://localhost:5000/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "Success");
        if (data.status == "ok") {
          alert("login successful");
          window.location.href = "/template";
        } else {
          alert("User does not exist");
        }
      });
  }

  return (
    <>
      <Navbar />
      <Components.Container>
        <Components.SignUpContainer signinIn={signIn}>
          <Components.Form>
            <Components.Title>Register</Components.Title>
            <Components.InputField>
              <i className="fa-solid fa-id-card"></i>
              <Components.Input
                type="text"
                placeholder="Fullname"
                onChange={(e) => {
                  setname(e.target.value);
                }}
              />
            </Components.InputField>
            <Components.InputField>
              <i className="fas fa-user"></i>
              <Components.Input
                type="text"
                placeholder="Username"
                onChange={(e) => {
                  setusername(e.target.value);
                }}
              />
            </Components.InputField>
            <Components.InputField>
              <i className="fas fa-envelope"></i>
              <Components.Input
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
            </Components.InputField>
            <Components.InputField>
              <i className="fas fa-lock"></i>
              <Components.Input
                type="passsword"
                placeholder="Password"
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
            </Components.InputField>
            <Components.Button onClick={registerUser}>
              Sign Up
            </Components.Button>
          </Components.Form>
        </Components.SignUpContainer>
        <Components.SignInContainer signinIn={signIn}>
          <Components.Form>
            <Components.Title>Sign in</Components.Title>
            <Components.InputField>
              <i className="fas fa-user"></i>
              <Components.Input
                type="text"
                placeholder="Username"
                onChange={(e) => {
                  setusername(e.target.value);
                }}
              />
            </Components.InputField>

            <Components.InputField>
              <i className="fas fa-lock"></i>
              <Components.Input
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
            </Components.InputField>

            <Components.Button onClick={loginUser}>Sign In</Components.Button>
          </Components.Form>
        </Components.SignInContainer>

        <Components.OverlayContainer signinIn={signIn}>
          <Components.Overlay signinIn={signIn}>
            <Components.LeftOverlayPanel signinIn={signIn}>
              <Components.Title>Already have an account?</Components.Title>
              <Components.Paragraph>
                Log in now and make awesome arts!
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(true)}>
                Sign In
              </Components.GhostButton>
            </Components.LeftOverlayPanel>

            <Components.RightOverlayPanel signinIn={signIn}>
              <Components.Title>Don't have an account?</Components.Title>
              <Components.Paragraph>
                Register now and discover awesome generative arts!
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(false)}>
                Sigin Up
              </Components.GhostButton>
            </Components.RightOverlayPanel>
          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>
    </>
  );
}
