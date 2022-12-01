import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import LoggedNavbar from "../components/Navbar_logged";
import authService from "../services/auth.service";
import "../styles/Yourarts.css";
import saveService from "../services/save.service";
import SavedDetail from "../components/SavedDetail";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
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

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function YourArts() {
  const [data, setData] = useState([]);
  useEffect(() => {
    saveService.getSaved().then((res) => {
      setData(res.data.saved); //res.data is an object containing saved:[data..]
    });
  }, []);

  const handleDelete = (e, data) => {
    try {
      saveService.deleteSaved(data).then((res) => {
        console.log(res);
      });
    } catch (err) {
      console.log(err);
    }
    window.location.reload();
  };

  return data.length ? (
    <>
      <div className="wrapper-yourarts SavedDiv ">
        {authService.getCurrentUser() ? <LoggedNavbar /> : <Navbar />}
        <div>
          <Slider {...settings} className="yohohamroslider">
            {data.map((art, index1, index2) => {
              return (
                <div>
                  <SavedDetail key={index1} data={art} />
                  <div className="yourartsdel">
                    <Btn
                      key={index2}
                      className="singleyourart"
                      onClick={(e) => {
                        handleDelete(e, art);
                      }}
                    >
                      <span className="material-symbols-outlined">delete</span>
                    </Btn>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="wrapper-yourarts UnsavedDiv">
        {authService.getCurrentUser() ? <LoggedNavbar /> : <Navbar />}
        {/* how to add inline style to a div with reg background */}
        <div className="unsaved-text">
          <h5 style={{color:"red"}}>No arts saved</h5>
          <h4>Save arts to view them here</h4>
        </div>
      </div>
    </>
  );
}
