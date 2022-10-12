import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import TemplateDetail from "../components/TemplateDetail";
import templates from "../data/drawTemplate.json";
import "../styles/Template.css";
import authService from "../services/auth.service";
import LoggedNavbar from "../components/Navbar_logged";
import favService from "../services/fav.service";

export default function Template() {
  const [favorites, setFavorites] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
  });
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      favService.getFav().then(
        (res) => {
          setFavorites(res.data.favs);
          setLoading(false);
        },
        (error) => {
          console.log(error.response);
        }
      );
    };
    if (authService.getCurrentUser()) {
      fetchData();
    }
    console.log(authService.getCurrentUser());
  }, []);

  return (
    <>
      {authService.getCurrentUser() ? <LoggedNavbar /> : <Navbar />}
      <div className="templatecards">
        {templates.map((drawTemplate, index) => {
          return (
            <TemplateDetail
              key={index}
              cardTitle={drawTemplate.templateTitle}
              cardImage={drawTemplate.templateImage}
              cardLink={drawTemplate.redirectTo}
              id={drawTemplate.id}
              favs={favorites}
              setfavs={setFavorites}
              isLoading={isLoading}
            />
          );
        })}
      </div>
    </>
  );
}
