import axios from "axios";
const login = (username, password) => {
  return axios
    .post("http://localhost:5000/login", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        sessionStorage.setItem("user", JSON.stringify(response.data));
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
      return response;
    });
};

const logout = () => {
  sessionStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(sessionStorage.getItem("user"));
};


const authService = {
  login,
  signup,
  logout,
  getCurrentUser,
};

export default authService;
