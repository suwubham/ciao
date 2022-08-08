import express from "express";
import User from "../models/user.model";
import env from "dotenv";
env.config();

const router = express.Router();

router.post("/", async (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
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
