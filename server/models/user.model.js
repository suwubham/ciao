import mongoose from "mongoose";

const UserDetailSchema = new mongoose.Schema(
  {
    name: String,
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    password: String,
    favorites: {
      1: { type: Boolean, default: false },
      2: { type: Boolean, default: false },
      3: { type: Boolean, default: false },
      4: { type: Boolean, default: false },
      5: { type: Boolean, default: false },
      6: { type: Boolean, default: false },
      7: { type: Boolean, default: false },
      8: { type: Boolean, default: false },
      9: { type: Boolean, default: false },
    },
  },
  {
    collection: "UserInfo",
  }
);

const model = mongoose.model("UserInfo", UserDetailSchema);

export default model;
