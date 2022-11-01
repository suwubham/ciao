import express from "express";
import User from "../models/user.model.js";
import authToken from "../middleware/authenticateToken.js";

const router = express.Router();
router.get("/", authToken, async (req, res) => {
  try {
    let username = req.user;
    const currentUser = await User.findOne({ username });
    let saved = currentUser.arts;
    return res.status(200).json({
      saved,
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
