
//The working file

//My current authRoutes.js
import express from 'express';
import {
  registerUser,
  loginUser,
  getUserProfile,
  forgotPassword,
  resetPassword,
} from '../controllers/authController.js';

import { protect, adminOnly } from '../middleware/authMiddleware.js';

const router = express.Router();

//router.delete('/products/:id', protect, adminOnly);
// Auth routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', protect, getUserProfile);

// Password reset routes
router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:token', resetPassword);

export default router;






