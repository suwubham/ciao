import axios from "axios";
import authHeader from "./auth-header";

const getProfile = async () => {
  return axios.get("http://localhost:5000/userdata", { headers: authHeader() });
};

const updateProfile = async (data) => {
  return axios
    .post("http://localhost:5000/changeprofile", data, {
      headers: authHeader(),
    })
    .then((res) => {
      return res;
    });
};

const deleteProfile = async () => {
  return axios
    .delete("http://localhost:5000/deleteaccount", {
      headers: authHeader(),
    })
    .then((res) => {
      return res;
    });
};

const profileService = {
  updateProfile,
  getProfile,
  deleteProfile,
};

export default profileService;
