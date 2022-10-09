import express from "express";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import validator from "validator";
const router = express.Router();

router.post("/", async (req, res) => {
  const { name, username, email, password } = req.body;
  if (!validator.isEmail(email)) {
    return res.status(201).json({ msg: "Invalid email" });
  }
  if (!validator.isStrongPassword(password)) {
    return res.status(203).json({ msg: "Weak password" });
  }

  const encryptedPassword = await bcrypt.hash(password, 10);
  console.log(encryptedPassword);
  try {
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.status(202).json({
        errors: [
          {
            msg: "User already exists",
          },
        ],
      });
    }
    await User.create({
      name,
      username,
      email,
      password: encryptedPassword,
    });
    res.status(200).json({ status: "Ok" });
  } catch (err) {
    console.log(err);
    res.json({ status: "error" });
  }
});

export default router;
