import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import registerRoute from "./routes/register.js";
import loginRoute from "./routes/login.js";
import userRoute from "./routes/userdata.js";
import getFavoriteRoute from "./routes/getFavorite.js";
import setFavoriteRoute from "./routes/setFavorite.js";
import saveArt from "./routes/saveArt.js";
import getSaved from "./routes/getSaved.js";
import changeProfile from "./routes/changeProfile.js";
import deleteAccount from "./routes/deleteAccount.js";
import deleteArt from "./routes/deleteArt.js";

import env from "dotenv";
env.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/register", registerRoute);
app.use("/login", loginRoute);
app.use("/userdata", userRoute);
app.use("/getfavorite", getFavoriteRoute);
app.use("/setfavorite", setFavoriteRoute);
app.use("/saveart", saveArt);
app.use("/getsaved", getSaved);
app.use("/changeprofile", changeProfile);
app.use("/deleteaccount", deleteAccount);
app.use("/deleteart", deleteArt);

app.listen(process.env.PORT, () => {
  console.log(`app is listening in port ${process.env.PORT}`);
});

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch(function (error) {
    console.log(`Unable to connect to the Mongo db  ${error} `);
  });

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB connection established successfully");
});

mongoose.connection.on("error", (err) => {
  console.log(`failed to connect to MongoDB ${err}`);
});
