import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userRoutes from "./routes/register.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/register", userRoutes);

const mongoUrl =
  "mongodb+srv://suwubham:suwubham1@ciao.jky7m.mongodb.net/?retryWrites=true&w=majority";

app.listen(5000, () => {
  console.log("app is listening in port 5001");
});

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(console.log("connected to database"))
  .catch((e) => {
    console.log(e);
  });
