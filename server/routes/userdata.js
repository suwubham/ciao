import express from "express";
import User from "../models/user.model";

const router = express.Router();
const JWT_SECRET = "asdfasdf87sa5df7a6sgf4a";

router.post("/", async (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, JWT_SECRET);
    const useremail = user.email;
    User.findOne({ email: useremail })
      .then((data) => {
        res.send({ status: "ok", data: data });
      })
      .catch((error) => {
        res.send({ stauts: "error", data: error });
      });
  } catch (error) {}
});
