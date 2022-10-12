import express from "express";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import env from "dotenv";
env.config();

const router = express.Router();

router.post("/", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(201).json({
      errors: [
        {
          msg: "Invalid credentials",
        },
      ],
    });
  }

  let isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(202).json({
      errors: [
        {
          msg: "Email or password is invalid",
        },
      ],
    });
  }

  const accessToken = await jwt.sign(
    { username },
    process.env.ACCESS_TOKEN_SECRET
  );
  res.status(200).json({
    accessToken,
  });
});

export default router;
