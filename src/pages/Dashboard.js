import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar_logged";
import profileService from "../services/profile.service";
import AuthService from "../services/auth.service";
import "../styles/Dashboard.css";
export default function Dashboard() {
  let navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    profileService.getProfile().then(
      (res) => {
        setCurrentUser(res.data.currentUser);
      },
      (error) => {
        console.log("Private page", error.response);
        if (error.response && error.response.status === 403) {
          AuthService.logout();
          navigate("/login");
          window.location.reload();
        }
      }
    );
  }, []);
  return (
    <>
      <div className="wrapper">
        <Navbar />
        <h1>Dashboard</h1>
        <h3>Welcome {currentUser.username}</h3>
      </div>
    </>
  );
}
