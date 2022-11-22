import express from "express";
import User from "../models/user.model.js";
import authToken from "../middleware/authenticateToken.js";

const router = express.Router();
router.post("/", authToken, async (req, res) => {
  const username = req.user;
  try {
    let currentUser = await User.findOne({ username });
    currentUser.arts = currentUser.arts.filter(
      (art) => JSON.stringify(art) !== JSON.stringify(req.body)
    );
    await currentUser.save();
    return res.status(200).json({
      currentUser,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
});

export default router;
