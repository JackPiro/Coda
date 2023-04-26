const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

module.exports.registerUser = async (req, res) => {
    const { email, username, password, role } = req.body;

    try {
        // Check if email and username are unique
        const existingEmail = await User.findOne({ email });
        const existingUsername = await User.findOne({ username });

        if (existingEmail || existingUsername) {
            return res.status(400).json({ message: 'Email or username already in use.' });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create user account in the database
        const newUser = new User({
            email,
            username,
            password: hashedPassword,
            role
        });

        await newUser.save();

        // Send a confirmation email
        const token = jwt.sign({ userId: newUser._id }, process.env.EMAIL_SECRET, { expiresIn: '1h' });
        const emailData = {
            from: 'noreply@yourapp.com',
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

