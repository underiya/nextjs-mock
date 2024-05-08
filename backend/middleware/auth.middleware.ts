import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface DecodedToken {
  userId: string;
  role: string;
}

const auth = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  try {
    if (!token) {
      return res
        .status(401)
        .json({ message: "Authorization token is missing" });
    }

    jwt.verify(token, "masai", (err, decoded: any) => {
      if (err) {
        return res.status(401).json({ message: "Invalid token" });
      }

      if (decoded) {
        const { userId } = decoded as DecodedToken;
        console.log(decoded);

        next();
      } else {
        return res.status(401).json({ message: "Invalid token" });
      }
    });
  } catch (error) {
    res.status(400).json({ message: "Bad request", error });
  }
};

export { auth };
