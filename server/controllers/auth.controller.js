const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

module.exports.registerUser = async (req, res) => {
    const { firstName, lastName, email, username, password, role } = req.body;

    try {
        // Check if email and username are unique
        const existingEmail = await User.findOne({ email });
        const existingUsername = await User.findOne({ username });

        if (existingEmail) {
            return res.status(400).json({ message: 'There is already an account with this email.' });
        }
        
        if (existingUsername) {
            return res.status(400).json({ message: 'Someone got here first, this username is already in use.' });
        }        

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create user account in the database
        const newUser = new User({
            firstName,
            lastName,
            email,
            username,
            password: hashedPassword,
            role
        });

        await newUser.save();

        // Send a confirmation email
        const token = jwt.sign({ userId: newUser._id }, process.env.EMAIL_SECRET, { expiresIn: '1h' });
        const emailData = {
            from: 'noreply@CodaStreaming.com',
            to: email,
            subject: 'Account Confirmation',
            text: `Click on this link to confirm your email address: ${process.env.CLIENT_URL}/confirm-email/${token}`
        };

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        await transporter.sendMail(emailData);

        // Return a success response
        res.status(201).json({ message: 'User registered successfully. Please check your email to confirm your account.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Check if email is confirmed
        if (!user.isEmailConfirmed) {
            return res.status(400).json({ message: 'Please confirm your email address' });
        }

        // Sign and return JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN,
        });

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in user' });
    }
};

const crypto = require('crypto');
const sendEmail = require('../utils/sendEmail');

exports.requestPasswordReset = async (req, res) => {
    try {
        const { email } = req.body;

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Generate and set password reset token
        const resetToken = crypto.randomBytes(32).toString('hex');
        user.resetPasswordToken = resetToken;
        user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

        await user.save();

        // Send password reset email
        const resetUrl = `${req.protocol}://${req.get('host')}/password-reset/${resetToken}`;
        const message = `You are receiving this email because you (or someone else) requested a password reset for your account. Please click on the following link, or copy and paste it into your browser to complete the process: ${resetUrl}`;

        await sendEmail({
            email: user.email,
            subject: 'Password Reset',
            message,
        });

        res.status(200).json({ message: 'Password reset email sent' });
    } catch (error) {
        res.status(500).json({ message: 'Error requesting password reset' });
    }
};

exports.resetPassword = async (req, res) => {
    try {
        const { token } = req.params;
        const { password } = req.body;

        // Check if user with the reset token exists and if the token has not expired
        const user = await User.findOne({
            resetPasswordToken: token,
            resetPasswordExpires: { $gt: Date.now() },
        });

        if (!user) {
            return res.status(400).json({ message: 'Invalid or expired password reset token' });
        }

        // Update the user's password and clear the reset token
        user.password = await bcrypt.hash(password, 12);
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;

        await user.save();

        res.status(200).json({ message: 'Password reset successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error resetting password' });
    }
};


