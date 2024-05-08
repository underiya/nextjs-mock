import { NextApiRequest, NextApiResponse } from "next";
const jwt = require("jsonwebtoken");

const authenticate =
  (handler: any) => async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.userId = (decoded as { userId: string }).userId;
      return handler(req, res);
    } catch (error) {
      return res.status(401).json({ message: "Unauthorized" });
    }
  };

export default authenticate;
