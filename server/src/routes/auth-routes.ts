import { Router, Request, Response } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const login = async (req: Request, res: Response) => {
  // TODO: If the user exists and the password is correct, return a JWT token
  const { username, password } = req.body;
  try {
    const user = await User .findOne({ where: { username } });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
  const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    // Create a JWT token
    const secretKey = process.env.JWT_SECRET || 'asdf'; // Use a secret key from environment variables
    const token = jwt.sign(
      { userId: user.id, username: user.username },
      secretKey,
      { expiresIn: '1h' } // Token expires in 1 hour
    );
    // Return the token in the response
    return res.json({token});
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const router = Router();

// POST /login - Login a user
router.post('/login', login);

export default router;
