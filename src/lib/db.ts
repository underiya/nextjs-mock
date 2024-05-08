import mongoose from "mongoose";

const { username, password } = process.env;
export const mongoUrl =
  "mongodb+srv://" +
  username +
  ":" +
  password +
  "@cluster0.9zho5vv.mongodb.net/bugtracker?retryWrites=true&w=majority&appName=Cluster0";


  export const connection =()=>{
      mongoose.connect(mongoUrl);
  }