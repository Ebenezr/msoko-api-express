import { NextFunction, Request, Response, Router } from "express";
const jwt = require("jsonwebtoken");

interface AuthRequest extends Request {
  userId?: string;
}

const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).send("Unauthorized");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // req.userId = decoded.id;
    next();
  } catch (err) {
    res.status(401).send("Unauthorized");
  }
};
