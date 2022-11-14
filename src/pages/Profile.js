import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getUserData from "../services/userdata.service";
import Navbar from "../components/Navbar";
import LoggedNavbar from "../components/Navbar_logged";
import authService from "../services/auth.service";
import "../styles/Profile.css";
import Profileicon from "../assets/icons/profilepageicion.jpeg";
import styled from "styled-components";

const Btn = styled.button`
  border-radius: 20px;
  border: none;
  background: linear-gradient(
    135deg,
    rgba(0, 18, 32, 0.4),
    rgba(0, 18, 32, 0.2)
  );
  backdrop-filter: blur(3px);
  color: #ffffff;
  font-size: 15px;
  padding: 10px;
  transition: transform 80ms ease-in;
  &:hover {
    background-color: #c77dff;
  }
  margin: 35px 15px 15px 35px;
`;

export default function Profile() {
  let navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState({});
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [password, setPassword] = useState("");

  useEffect(() => {
    getUserData().then((res) => {
      setCurrentUser(res.data.currentUser);
    });
  }, []);

  return (
    <>
      <div className="ProfileDiv">
        {authService.getCurrentUser() ? <LoggedNavbar /> : <Navbar />}
        <section>
          <div className="container py-5 h-100">
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="col col-lg-6 mb-4 mb-lg-0">
                <div
                  className="card mb-3 profileCard"
                  style={{ borderRadius: ".5rem" }}
                >
                  <div className="row g-0">
                    <div
                      className="col-md-4 gradient-custom text-center text-white"
                      style={{
                        bordertopleftradius: ".5rem",
                        borderbottomleftradius: ".5rem",
                      }}
                    >
                      <img
                        src={Profileicon}
                        alt="Avatar"
                        className="img-fluid my-5 profileimage"
                      />
                      <h5>{currentUser.username}</h5>
                      {edit ? (
                        <Btn onClick={() => setEdit(false)}>Submit</Btn>
                      ) : (
                        <Btn
                          onClick={() => {
                            setEdit(true);
                          }}
                        >
                          Edit Profile
                        </Btn>
                      )}
                    </div>
                    <div className="col-md-8">
                      <div className="card-body p-4">
                        <h6>Information</h6>
                        <hr className="mt-0 mb-4" />
                        <div className="row pt-1">
                          <div className="col-6 mb-3">
                            <h6>Name</h6>
                            {edit ? (
                              <input
                                type="text"
                                className="inputfields"
                                onChange={(e) => {
                                  setName(e.target.value);
                                }}
                              ></input>
                            ) : (
                              <p className="text-muted">{currentUser.name}</p>
                            )}
                          </div>
                          <div className="col-6 mb-3">
                            <h6>Email</h6>
                            {edit ? (
                              <input
                                type="text"
                                className="inputfields"
                                onChange={(e) => {
                                  setEmail(e.target.value);
                                }}
                              ></input>
                            ) : (
                              <p className="text-muted">{currentUser.email}</p>
                            )}
                          </div>
                          <div className="col-6 mb-3">
                            <h6>Password</h6>
                            {edit ? (
                              <input
                                type="text"
                                className="inputfields"
                                onChange={(e) => {
                                  setPassword(e.target.value);
                                }}
                              ></input>
                            ) : (
                              <p className="text-muted">******</p>
                            )}
                          </div>
                        </div>
                        <h6>Projects</h6>
                        <hr className="mt-0 mb-4" />
                        <div className="row pt-1">
                          <div className="col-6 mb-3">
                            <h6>Recent Arts</h6>
                            <a
                              onClick={() => navigate("/dashboard")}
                              className="text-muted RecentBtn"
                            >
                              Recents
                            </a>
                          </div>
                        </div>
                        <hr className="mt-0 mb-4" />
                        <div className="row pt-1">
                          <div className="col-6 mb-3">
                            <h6>Delete Account</h6>
                            <a className="text-muted" href="#">
                              Delete
                            </a>
                          </div>
                          <div className="col-6 mb-3">
                            <button
                              className="logoutbutton"
                              onClick={() => {
                                authService.logout();
                                navigate("/signin");
                              }}
                            >
                              Log Out
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
