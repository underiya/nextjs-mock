import { NextApiRequest, NextApiResponse } from "next";
const bcrypt = require("bcrypt");

import connect from "@/database/mongo.config";
import userModel from "@/models/user.model";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, password } = req.body;

  await connect();

  try {
    const hashedPassword = await bcrypt.hash(password, 5);
    const newUser = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ success: true, data: newUser });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
}
