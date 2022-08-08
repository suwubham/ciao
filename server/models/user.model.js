import mongoose from "mongoose";
const UserDetailSchema = new mongoose.Schema(
  {
    fname: String,
    lname: String,
    email: { type: String, unique: true },
    password: String,
  },
  {
    collection: "UserInfo",
  }
);
const model = mongoose.model("UserInfo", UserDetailSchema);

export default model;
