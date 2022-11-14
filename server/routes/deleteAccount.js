import express from "express";
import User from "../models/user.model.js";
import authToken from "../middleware/authenticateToken.js";

const router = express.Router();
router.delete("/", authToken, async (req, res) => {
  const username = req.user;
  try {
    const currentUser = await User.findOne({ username });

    await currentUser.delete();
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
