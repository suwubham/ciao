import axios from "axios";
const login = (username, password) => {
  return axios
    .post("http://localhost:5000/login", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response;
    });
};

const signup = (name, username, email, password) => {
  return axios
    .post("http://localhost:5000/register", {
      name,
      username,
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
      }
      return response;
    });
};

const authService = {
  login,
  signup,
};

export default authService;
