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

const saveService = {
  save,
  getSaved,
};

export default saveService;
