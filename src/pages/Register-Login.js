import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Register-Login.css";
import Navbar from "../components/Navbar";
import * as Components from "../styles/signincontainer";
import AuthService from "../services/auth.service";
import { useNavigate } from "react-router-dom";

export default function RegisterLogin() {
  let navigate = useNavigate();
  const location = useLocation();

  const [name, setname] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [signIn, toggle] = useState(location.state); //to see if we're coming from Login or register

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      await AuthService.signup(name, username, email, password).then(
        (res) => {
          switch (res.status) {
            case 200:
              toggle(true);
              alert("Registered Successfully");
              break;
            case 201:
              alert("Invalid email");
              break;
            case 203:
              alert("Choose a stronger password");
              break;
            case 202:
              alert("Email already exists");
              break;
            default:
              alert("Something went wrong");
          }
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      await AuthService.login(username, password).then(
        (res) => {
          if (res.status === 200) {
            navigate("/home");
          } else if (res.status === 201) {
            alert("Invalid credentials");
          } else if (res.status === 202) {
            alert("Password is invalid");
          }
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Components.Background>
        <Navbar />
        <Components.Wrapper>
          <Components.Container className="itsmemario">
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
                <Components.Button onClick={loginUser}>
                  Sign In
                </Components.Button>
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
                    Sign Up
                  </Components.GhostButton>
                </Components.RightOverlayPanel>
              </Components.Overlay>
            </Components.OverlayContainer>
          </Components.Container>
        </Components.Wrapper>
      </Components.Background>
    </>
  );
}
