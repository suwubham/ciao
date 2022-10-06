import mongoose from "mongoose";
const UserDetailSchema = new mongoose.Schema(
  {
    name: String,
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    password: String,
  },
  {
    collection: "UserInfo",
  }
);

const model = mongoose.model("UserInfo", UserDetailSchema);

export default model;
