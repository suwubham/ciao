import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import profileService from "../services/profile.service";
import Navbar from "../components/Navbar";
import LoggedNavbar from "../components/Navbar_logged";
import authService from "../services/auth.service";
import "../styles/Profile.css";
import Profileicon from "../assets/icons/profilepageicion.jpeg";
import styled from "styled-components";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";

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

  const [open, setOpen] = React.useState(false);

  const [userData, setUserData] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    profileService.getProfile().then((res) => {
      setCurrentUser(res.data.currentUser);
      setUserData(res.data.currentUser);
    });
  }, []);

  const handleSubmit = async () => {
    setEdit(false);
    try {
      await profileService.updateProfile(userData).then((res) => {
        console.log(res);
        alert("Please sign in again with new username and password");
        authService.logout();
        navigate("/signin", { state: true });
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleCancel = () => {
    setEdit(false);
    setUserData(currentUser);
  };

  const handleDelete = () => {
    try {
      profileService.deleteProfile().then((res) => {
        console.log(res);
        authService.logout();
        navigate("/home");
      });
    } catch (err) {
      console.log(err);
    }
  };

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
                      {edit ? (
                        <input
                          type="text"
                          className="inputfields"
                          onChange={(e) => {
                            setUserData({
                              ...userData,
                              username: e.target.value,
                            });
                          }}
                        ></input>
                      ) : (
                        <p className="text-muted">{userData.username}</p>
                      )}
                      {edit ? (
                        <>
                          <Btn onClick={handleSubmit}>
                            Submit
                            <span className="material-symbols-outlined control">
                              done
                            </span>
                          </Btn>
                          <Btn onClick={handleCancel}>
                            Cancel
                            <span className="material-symbols-outlined control">
                              close
                            </span>
                          </Btn>
                        </>
                      ) : (
                        <Btn
                          onClick={() => {
                            setEdit(true);
                            alert("please enter password before submitting");
                          }}
                        >
                          Edit Profile
                          <span className="material-symbols-outlined control">
                            edit
                          </span>
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
                                  setUserData({
                                    ...userData,
                                    name: e.target.value,
                                  });
                                }}
                              ></input>
                            ) : (
                              <p className="text-muted">{userData.name}</p>
                            )}
                          </div>
                          <div className="col-6 mb-3">
                            <h6>Email</h6>
                            {edit ? (
                              <input
                                type="text"
                                className="inputfields"
                                onChange={(e) => {
                                  setUserData({
                                    ...userData,
                                    email: e.target.value,
                                  });
                                }}
                              ></input>
                            ) : (
                              <p className="text-muted">{userData.email}</p>
                            )}
                          </div>
                          <div className="col-6 mb-3">
                            <h6>Password</h6>
                            {edit ? (
                              <input
                                type="text"
                                className="inputfields"
                                onChange={(e) => {
                                  setUserData({
                                    ...userData,
                                    password: e.target.value,
                                  });
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
                              onClick={() => navigate("/yourarts")}
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
                            <Btn
                              style={{ marginTop: 5 }}
                              onClick={() => {
                                setOpen(true);
                              }}
                            >
                              <span className="material-symbols-outlined">
                                delete
                              </span>
                            </Btn>
                          </div>
                          <div className="col-6 mb-3">
                            <Btn
                              className="logoutbutton"
                              onClick={() => {
                                authService.logout();
                                navigate("/signin");
                              }}
                            >
                              Log Out
                            </Btn>
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
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Confirm account deletion?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You can't recover your account once it is deleted and all your
            favorites and saved arts will be lost
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpen(false);
            }}
          >
            Cancel
          </Button>
          <Button onClick={handleDelete}>Continue</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
