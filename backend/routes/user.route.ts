import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/user.model";
import { Module } from "module";

const userRouter = express.Router();

userRouter.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user: any = await userModel.findOne({ email });
    if (user) {
      // Compare passwords
      bcrypt.compare(password, user.password, function (err, result) {
        if (result) {
          // Passwords match, generate token
          const token = jwt.sign(
            { userId: user._id, role: user.role },
            "masai"
          );
          res.status(200).json({ msg: "Login successful", token });
        } else {
          res.status(401).json({ msg: "Invalid credentials" });
        }
      });
    } else {
      res.status(401).json({ msg: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

userRouter.post("/register", async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    // Hash the password
    bcrypt.hash(password, 10, async function (err, hash) {
      if (err) {
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        const newUser = new userModel({ name, email, password: hash });
        await newUser.save();
        res
          .status(201)
          .json({ msg: "User registered successfully", user: newUser });
      }
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default userRouter;
