// import { NextApiRequest, NextApiResponse } from "next";
// import userModel from "../../backend/models/user.model";
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const { email, password } = req.body;

//   await connection();

//   try {
//     const user = await userModel.findOne({ email });
//     if (!user) {
//       return res
//         .status(404)
//         .json({ success: false, message: "User not found" });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res
//         .status(401)
//         .json({ success: false, message: "Invalid credentials" });
//     }

//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
//       expiresIn: "1h",
//     });

//     res.status(200).json({ success: true, token });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error });
//   }
// }
