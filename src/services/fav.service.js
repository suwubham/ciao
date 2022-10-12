import axios from "axios";
import authHeader from "./auth-header";

const getFav = async () => {
  return axios.get("http://localhost:5000/getfavorite", {
    headers: authHeader(),
  });
};

const setFav = (newFav) => {
  return axios
    .post("http://localhost:5000/setfavorite", newFav, {
      headers: authHeader(),
    })
    .then((response) => {
      return response;
    });
};

const favService = {
  getFav,
  setFav,
};

export default favService;
