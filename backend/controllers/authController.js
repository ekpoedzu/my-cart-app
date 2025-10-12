
import User from '../models/User.js'; // User model (MongoDB collection)
import jwt from 'jsonwebtoken'; // JWT for authentication
import bcrypt from 'bcryptjs'; // Hashing passwords
import crypto from 'crypto'; // Generate secure tokens
import nodemailer from 'nodemailer'; // Send emails

// Generate JWT token for user authentication
const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email, isAdmin: user.isAdmin }, // payload
    process.env.JWT_SECRET, // secret key
    { expiresIn: '30d' } // token valid for 30 days
  );
};

// REGISTER NEW USER
export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email }); // check if user exists
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = await User.create({ name, email, password }); // create user

    res.status(201).json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      },
      token: generateToken(user), // return JWT token
    });
  } catch (error) {
    res.status(500).json({ message: 'Registration failed', error: error.message });
  }
};

// LOGIN USER
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email }); // find user by email
    if (!user || !(await user.matchPassword(password))) { // check password
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    res.json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      },
      token: generateToken(user), // return JWT token
    });
  } catch (error) {
    res.status(500).json({ message: 'Login failed', error: error.message });
  }
};

// FORGOT PASSWORD
export const forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email }); // find user by email
    if (!user) return res.status(404).json({ message: 'User not found' });

    const token = crypto.randomBytes(32).toString('hex'); // create reset token
    user.resetToken = token; 
    user.resetTokenExpires = Date.now() + 3600000; // token valid 1 hour
    await user.save();

    const resetLink = `http://localhost:5175/reset-password/${token}`; // reset link to frontend

    // configure Mailtrap email
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS,
      },
    });

    await transporter.sendMail({
      to: user.email,
      subject: 'Reset Your Password',
      html: `<p>Click <a href="${resetLink}">here</a> to reset your password. This link expires in 1 hour.</p>`,
    });

    res.status(200).json({ message: 'Reset link sent to email' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to send reset email', error: err.message });
  }
};

// RESET PASSWORD
export const resetPassword = async (req, res) => {
  const { token } = req.params; // token from URL
  const { newPassword } = req.body;
  try {
    const user = await User.findOne({
      resetToken: token,
      resetTokenExpires: { $gt: Date.now() }, // check expiration
    });

    if (!user) return res.status(400).json({ message: 'Invalid or expired token' });

    user.password = newPassword; // update password
    user.resetToken = undefined; // clear reset token
    user.resetTokenExpires = undefined;
    await user.save(); // triggers password hash

    res.status(200).json({ message: 'Password reset successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Password reset failed', error: err.message });
  }
};

// GET USER PROFILE
export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password'); // exclude password
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.status(200).json(user); // return user info
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch user profile', error: err.message });
  }
};









