//userRoutes.js
/*import express from 'express';
import { registerUser, loginUser, getUserProfile } from '../controllers/userController.js';
import protect from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', registerUser); // ✅ matches /api/users/register
router.post('/login', loginUser);
router.get('/profile', protect, getUserProfile);

export default router;*/



// routes/userRoutes.js//The working work
/*import express from 'express';
import {
 // registerUser,
 // loginUser,
  getUserProfile,
} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js'; // If you use JWT for auth

const router = express.Router();

//router.post('/register', registerUser);
//router.post('/login', loginUser);
router.get('/profile', protect, getUserProfile); // optional protected route
//router.post('/forgot-password', forgotPassword);
//router.post('/reset-password/:token', resetPassword);

export default router;*/


// routes/userRoutes.js
import express from 'express';
import {
  registerUser,
  loginUser,
  getUserProfile,
} from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', protect, getUserProfile);
//router.post('/forgot-password', forgotPassword);
//router.post('/reset-password/:token', resetPassword);

export default router;



