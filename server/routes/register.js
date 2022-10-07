import express from "express";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

const router = express.Router();

router.post("/", async (req, res) => {
  console.log(req.body);
  const { name, username, email, password } = req.body;
  const encryptedPassword = await bcrypt.hash(password, 10);
  console.log(encryptedPassword);
  try {
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.send({ error: "User exists" });
    }
    await User.create({
      name,
      username,
      email,
      password: encryptedPassword,
    });
    res.json({ status: "Ok" });
  } catch (err) {
    console.log(err);
    res.json({ status: "error" });
  }
});

export default router;
