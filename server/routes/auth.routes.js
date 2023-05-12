const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);
router.post('/logout', authController.logoutUser);
router.post('/password-reset', authController.requestPasswordReset);
router.post('/password-reset/:token', authController.resetPassword);

module.exports = router;
