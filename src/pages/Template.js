import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import TemplateDetail from "../components/TemplateDetail";
import templates from "../data/drawTemplate.json";
import "../styles/Template.css";
import authService from "../services/auth.service";
import LoggedNavbar from "../components/Navbar_logged";
import favService from "../services/fav.service";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

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
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
    17: false,
    18: false,
    19: false,
  });

  const [isLoading, setLoading] = useState(true);

  const [filter, setFilter] = useState(templates);

  const handleFilter = () => {
    const check = (template) => {
      if (favorites[template.id]) {
        return true;
      }
    };
    const filtered = templates.filter(check);
    setFilter(filtered);
  };

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
      <div className="wrapper-template">
        {authService.getCurrentUser() ? <LoggedNavbar /> : <Navbar />}
        {authService.getCurrentUser() ? (
          <div className="filter">
            Filter
            <FormControl
              sx={{ m: 1, minWidth: 100, maxWidth: 100 }}
              size="small"
            >
              <InputLabel id="demo-select-small">
                <span className="material-symbols-outlined">filter_alt</span>
              </InputLabel>
              <Select>
                <MenuItem
                  value={1}
                  onClick={() => {
                    setFilter(templates);
                  }}
                >
                  All
                  <span className="material-symbols-outlined ico">
                    filter_alt_off
                  </span>
                </MenuItem>
                <MenuItem value={2} onClick={handleFilter}>
                  Favs
                  <span className="material-symbols-outlined ico">
                    favorite
                  </span>
                </MenuItem>
              </Select>
            </FormControl>
          </div>
        ) : null}

        <div className="templatecards">
          {filter.map((drawTemplate, index) => {
            return (
              <TemplateDetail
                key={index}
                cardTitle={drawTemplate.templateTitle}
                cardImage={drawTemplate.templateImage}
                cardLink={drawTemplate.redirectTo}
                cardDescp={drawTemplate.templateDescp}
                id={drawTemplate.id}
                favs={favorites}
                setfavs={setFavorites}
                isLoading={isLoading}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
