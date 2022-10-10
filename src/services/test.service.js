import axios from "axios";
import authHeader from "./auth-header";

export default function getUserData() {
  return axios.get("http://localhost:5000/userdata", { headers: authHeader() });
}
