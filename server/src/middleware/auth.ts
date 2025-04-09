import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  username: string;
  exp?: number;
  iat?: number;
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  // TODO: verify the token exists and add the user data to the request object
  const authHeader = req.headers['authorization'];
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.sendStatus(401);
  }

  const token = authHeader.split(' ')[1];

  try {
    const secret = process.env.JWT_SECRET || 'asdf';
    const decoded = jwt.verify(token, secret) as JwtPayload;
    (req as any).user = decoded;
    return next();
  } catch (error) {
    console.error(error);
    return res.sendStatus(403);
  }
};
