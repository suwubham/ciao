import express from "express";
import User from "../models/user.model.js";
import authToken from "../middleware/authenticateToken.js";
const router = express.Router();
router.get("/", authToken, async (req, res) => {
  let username = req.user;
  const currentUser = await User.findOne({ username });
  return res.status(200).json({
    currentUser,
  });
});

export default router;
