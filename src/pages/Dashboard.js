import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar_logged";
import getUserData from "../services/test.service";
import AuthService from "../services/auth.service";
export default function Dashboard() {
  let navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    getUserData().then(
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
      <Navbar />
      <div>Dashboard</div>
      <h1>Welcome {currentUser.username}</h1>
    </>
  );
}
