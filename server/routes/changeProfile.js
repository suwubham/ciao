import express from "express";
import User from "../models/user.model.js";
import authToken from "../middleware/authenticateToken.js";

const router = express.Router();
router.post("/", authToken, async (req, res) => {
  try {
    const { usernamee, name, email, password } = req.body;
    let username = req.user;
    const currentUser = await User.findOne({ username });
    currentUser.username = usernamee;
    currentUser.name = name;
    currentUser.email = email;
    currentUser.password = password;

    await currentUser.save();

    return res.status(200).json({
      status: "success",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      errors: [
        {
          msg: "Server error",
        },
      ],
    });
  }
});

export default router;
