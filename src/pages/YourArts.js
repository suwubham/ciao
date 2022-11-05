import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import LoggedNavbar from "../components/Navbar_logged";
import authService from "../services/auth.service";
import "../styles/Yourarts.css";
import saveService from "../services/save.service";
import SavedDetail from "../components/SavedDetail";
export default function YourArts() {
  const [data, setData] = useState([]);
  useEffect(() => {
    saveService.getSaved().then((res) => {
      setData(res.data.saved); //res.data is an object containing saved:[data..]
    });
  }, []);

  return data.length ? (
    <>
      <div className="wrapper-yourarts">
        {authService.getCurrentUser() ? <LoggedNavbar /> : <Navbar />}
        {data.map((art, index) => {
          return <SavedDetail key={index} data={art} />;
        })}
      </div>
    </>
  ) : (
    <>
      <div className="wrapper-yourarts">
        {authService.getCurrentUser() ? <LoggedNavbar /> : <Navbar />}
        {/* how to add inline style to a div with reg background */}
        <div className="title">Add arts to favorties to view them here</div>
      </div>
    </>
  );
}
