import axios from "axios";
import authHeader from "./auth-header";

const save = async (data) => {
  return axios
    .post("http://localhost:5000/saveArt", data, {
      headers: authHeader(),
    })
    .then((res) => {
      return res;
    });
};

const getSaved = async () => {
  return axios.get("http://localhost:5000/getsaved", {
    headers: authHeader(),
  });
};

const deleteSaved = (data) => {
  return axios
    .post("http://localhost:5000/deleteart", data, {
      headers: authHeader(),
    })
    .then((response) => {
      return response;
    });
};

const saveService = {
  save,
  getSaved,
  deleteSaved,
};

export default saveService;
