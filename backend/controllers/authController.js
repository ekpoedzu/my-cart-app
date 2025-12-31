
/*import User from '../models/User.js'; // User model (MongoDB collection)
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

    const resetLink = `http://localhost:5173/reset-password/${token}`; // reset link to frontend

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
};*/



//current file
/*import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import nodemailer from 'nodemailer';

/* ===============================
   EMAIL TRANSPORT (Mailtrap)
================================ */
/*const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS,
  },
 
});
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ Mailtrap connection failed:', error);
  } else {
    console.log('✅ Mailtrap is ready to send emails');
  }
});

/* ===============================
   JWT TOKEN
================================ */
/*const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email, isAdmin: user.isAdmin },
    process.env.JWT_SECRET,
    { expiresIn: '30d' }
  );
};

/* ===============================
   REGISTER
================================ */
/*export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: 'User already exists' });

    const user = await User.create({ name, email, password });

    res.status(201).json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      },
      token: generateToken(user),
    });
  } catch (error) {
    res.status(500).json({
      message: 'Registration failed',
      error: error.message,
    });
  }
};

/* ===============================
   LOGIN
================================ */
/*export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    res.json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      },
      token: generateToken(user),
    });
  } catch (error) {
    res.status(500).json({
      message: 'Login failed',
      error: error.message,
    });
  }
};

/* ===============================
   FORGOT PASSWORD
================================ */
/*export const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user)
      return res.status(404).json({ message: 'User not found' });

    // Generate token
    const resetToken = crypto.randomBytes(32).toString('hex');

    // Hash token before saving
    const hashedToken = crypto
      .createHash('sha256')
      .update(resetToken)
      .digest('hex');

    user.resetToken = hashedToken;
    user.resetTokenExpires = Date.now() + 60 * 60 * 1000; // 1 hour
    await user.save();

    const resetLink = `http://localhost:5173/reset-password/${resetToken}`;

    await transporter.sendMail({
      from: '"Support" <support@yourapp.com>',
      to: user.email,
      subject: 'Reset Your Password',
      html: `
        <h3>Password Reset</h3>
        <p>Click the link below to reset your password:</p>
        <a href="${resetLink}">${resetLink}</a>
        <p>This link expires in 1 hour.</p>
      `,
    });

    res.status(200).json({ message: 'Password reset email sent' });
  } catch (error) {
    console.error('FORGOT PASSWORD ERROR:', error);
    res.status(500).json({
      message: 'Failed to send reset email',
      error: error.message,
    });
  }
};*/


/*export const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user)
      return res.status(404).json({ message: 'User not found' });

    const resetToken = crypto.randomBytes(32).toString('hex');

    const hashedToken = crypto
      .createHash('sha256')
      .update(resetToken)
      .digest('hex');

    user.resetToken = hashedToken;
    user.resetTokenExpires = Date.now() + 60 * 60 * 1000;
    await user.save();

    const resetLink = `http://localhost:5173/reset-password/${resetToken}`;

    // ✅ DEV MODE
    console.log('🔐 PASSWORD RESET LINK:', resetLink);

    res.status(200).json({
      message: 'Password reset link generated (dev mode)',
      resetLink,
    });

  } catch (error) {
    console.error('FORGOT PASSWORD ERROR:', error);
    res.status(500).json({
      message: 'Failed to generate reset link',
      error: error.message,
    });
  }
};*/


/*export const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user)
      return res.status(404).json({ message: 'User not found' });

    const resetToken = crypto.randomBytes(32).toString('hex');

    const hashedToken = crypto
      .createHash('sha256')
      .update(resetToken)
      .digest('hex');

    user.resetToken = hashedToken;
    user.resetTokenExpires = Date.now() + 60 * 60 * 1000; // 1 hour
    await user.save();

    const resetLink = `http://localhost:5173/reset-password/${resetToken}`;

    // 🔥 DEV MODE (no Mailtrap needed)
    console.log('🔐 PASSWORD RESET LINK:', resetLink);

    return res.status(200).json({
      message: 'Password reset link generated (dev mode)',
      resetLink,
    });

  } catch (error) {
    console.error('FORGOT PASSWORD ERROR:', error);
    return res.status(500).json({
      message: 'Failed to generate reset link',
      error: error.message,
    });
  }
};



/* ===============================
   RESET PASSWORD
================================ */
/*export const resetPassword = async (req, res) => {
  const { token } = req.params;
  const { newPassword } = req.body;

  try {
    // Hash incoming token
    const hashedToken = crypto
      .createHash('sha256')
      .update(token)
      .digest('hex');

    const user = await User.findOne({
      resetToken: hashedToken,
      resetTokenExpires: { $gt: Date.now() },
    });

    if (!user)
      return res.status(400).json({ message: 'Invalid or expired token' });

    user.password = newPassword;
    user.resetToken = undefined;
    user.resetTokenExpires = undefined;

    await user.save();

    res.status(200).json({ message: 'Password reset successful' });
  } catch (error) {
    console.error('RESET PASSWORD ERROR:', error);
    res.status(500).json({
      message: 'Password reset failed',
      error: error.message,
    });
  }
};*/

/*export const resetPassword = async (req, res) => {
  const { token } = req.params;

  // ✅ Accept both names (frontend-proof)
  const newPassword = req.body.newPassword || req.body.password;

  if (process.env.NODE_ENV !== "production") {
  return res.status(200).json({
    message: "Password reset token generated (dev)",
    resetLink,
    resetToken, // optional — remove later
  });
}

  if (!newPassword || newPassword.length < 6) {
    return res.status(400).json({
      message: 'Password must be at least 6 characters',
    });
  }
  

  try {
    const hashedToken = crypto
      .createHash('sha256')
      .update(token)
      .digest('hex');

      console.log("🔎 Incoming token (plain):", token);
      console.log("🔎 Incoming token (hashed):", hashedToken);
      console.log('RESET_TOKEN_ONLY:', resetToken);


     const debugUser = await User.findOne({ resetToken: hashedToken });
     console.log("🔎 User found by token?", !!debugUser);
     if (debugUser) {
     console.log("🔎 Token expires:", debugUser.resetTokenExpires);
      console.log("🔎 Expired?", debugUser.resetTokenExpires < Date.now());
}


    const user = await User.findOne({
      resetToken: hashedToken,
      resetTokenExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ message: 'Invalid or expired token' });
    }

    user.password = newPassword;
    user.resetToken = undefined;
    user.resetTokenExpires = undefined;

    await user.save(); // triggers bcrypt hash

    console.log("✅ RESET TOKEN (plain):", resetToken);
    console.log("✅ RESET TOKEN (hashed saved):", hashedToken);
    console.log("✅ RESET EXPIRES:", new Date(user.resetTokenExpires).toISOString());
    console.log("✅ USER EMAIL:", user.email);


    return res.status(200).json({
      message: 'Password reset successful',
    });
  } catch (error) {
    console.error('RESET PASSWORD ERROR:', error);
    return res.status(500).json({
      message: 'Password reset failed',
      error: error.message,
    });
  }
};


/* ===============================
   PROFILE
================================ */
/*export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user)
      return res.status(404).json({ message: 'User not found' });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      message: 'Failed to fetch profile',
      error: error.message,
    });
  }
};*/




// backend/controllers/authController.js (UPDATED FULL FILE)

import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import nodemailer from 'nodemailer';

/* ===============================
   EMAIL TRANSPORT (Mailtrap)
================================ */
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS,
  },
});

transporter.verify((error) => {
  if (error) {
    console.error('❌ Mailtrap connection failed:', error);
  } else {
    console.log('✅ Mailtrap is ready to send emails');
  }
});

/* ===============================
   JWT TOKEN
================================ */
const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email, isAdmin: user.isAdmin },
    process.env.JWT_SECRET,
    { expiresIn: '30d' }
  );
};

/* ===============================
   REGISTER
================================ */
export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: 'User already exists' });

    const user = await User.create({ name, email, password });

    res.status(201).json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      },
      token: generateToken(user),
    });
  } catch (error) {
    res.status(500).json({
      message: 'Registration failed',
      error: error.message,
    });
  }
};

/* ===============================
   LOGIN
================================ */
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    res.json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      },
      token: generateToken(user),
    });
  } catch (error) {
    res.status(500).json({
      message: 'Login failed',
      error: error.message,
    });
  }
};

/* ===============================
   FORGOT PASSWORD
   - Generates random token
   - Stores HASHED token + expiry in DB
   - Returns reset link in dev mode
================================ */
export const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const resetToken = crypto.randomBytes(32).toString('hex');

    const hashedToken = crypto
      .createHash('sha256')
      .update(resetToken)
      .digest('hex');

    user.resetToken = hashedToken;
    user.resetTokenExpires = Date.now() + 60 * 60 * 1000; // 1 hour
    await user.save();

    const resetLink = `http://localhost:5173/reset-password/${resetToken}`;

    // ✅ DEV MODE: return the link (Mailtrap optional)
    console.log('🔐 PASSWORD RESET LINK:', resetLink);

    // OPTIONAL: If you want to email via Mailtrap, uncomment this:
    /*
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || "no-reply@mycartapp.com",
      to: user.email,
      subject: "Reset your password",
      text: `Reset your password using this link: ${resetLink}`,
      html: `<p>Reset your password using this link:</p><p><a href="${resetLink}">${resetLink}</a></p>`,
    });
    */

    return res.status(200).json({
      message: 'Password reset link generated',
      resetLink,
    });
  } catch (error) {
    console.error('FORGOT PASSWORD ERROR:', error);
    return res.status(500).json({
      message: 'Failed to generate reset link',
      error: error.message,
    });
  }
};

/* ===============================
   RESET PASSWORD
   - Receives PLAIN token in URL
   - Hashes it to compare with DB
   - Updates password, clears token fields
   IMPORTANT: No resetLink/resetToken variables here
================================ */
export const resetPassword = async (req, res) => {
  const { token } = req.params;

  // ✅ Accept both names (frontend-proof)
  const newPassword = req.body.newPassword || req.body.password;

  if (!newPassword || newPassword.length < 6) {
    return res.status(400).json({
      message: 'Password must be at least 6 characters',
    });
  }

  try {
    const hashedToken = crypto
      .createHash('sha256')
      .update(token)
      .digest('hex');

    const user = await User.findOne({
      resetToken: hashedToken,
      resetTokenExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ message: 'Invalid or expired token' });
    }

    user.password = newPassword; // should hash via pre-save in User model
    user.resetToken = undefined;
    user.resetTokenExpires = undefined;

    await user.save();

    return res.status(200).json({
      message: 'Password reset successful',
    });
  } catch (error) {
    console.error('RESET PASSWORD ERROR:', error);
    return res.status(500).json({
      message: 'Password reset failed',
      error: error.message,
    });
  }
};

/* ===============================
   PROFILE
================================ */
export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      message: 'Failed to fetch profile',
      error: error.message,
    });
  }
};




/* Correct reset 
$r = Invoke-RestMethod -Method POST -Uri "http://localhost:5000/api/auth/forgot-password" -ContentType "application/json" -Body (@{ email="john@example.com" } | ConvertTo-Json)

$token = ($r.resetLink -split "/")[-1]
$token

Invoke-RestMethod -Method POST -Uri "http://localhost:5000/api/auth/reset-password/$token" -ContentType "application/json" -Body (@{ newPassword="awa12345" } | ConvertTo-Json)
*/





