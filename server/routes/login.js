import express from "express";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import env from "dotenv";
env.config();

const router = express.Router();

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ error: "User not found" });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET);
    return res.json({ status: "ok", data: token });
  } else {
    res.json({ status: "error", error: "Invalid password" });
  }
});

export default router;
