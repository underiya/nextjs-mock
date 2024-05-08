import { userRouter } from "./routes/user.route";

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const { user, password } = process.env;
const mongoUrl = `mongodb+srv://${user}:${password}@cluster0.9zho5vv.mongodb.net/bugtracker?retryWrites=true&w=majority&appName=Cluster0`;

// console.log(user, password);
const connectDB = mongoose.connect(mongoUrl);

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("/api", userRouter);

app.listen(PORT, async () => {
  try {
    console.log(`Server running on port ${PORT}`);
    await connectDB;
    console.log("connect to db");
  } catch (error) {
    console.log(error);
  }
});
