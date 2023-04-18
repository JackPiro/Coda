const User = require('../models/User');
const Artist = require('../models/Artist');
const UserEngagementMetrics = require('../models/UserEngagementMetrics');

exports.createUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();

        const newUserEngagementMetrics = new UserEngagementMetrics({ user: newUser._id });
        await newUserEngagementMetrics.save();

        if (newUser.role === 'artist') {
            const newArtist = new Artist({ user: newUser._id });
            await newArtist.save();
        }

        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateUserById = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteUserById = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json({ message: 'User deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateSubscriptionPrice = async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await User.findById(userId);
        const newSubscriptionPrice = calculateNewSubscriptionPrice(user.successfulInvites);
        user.subscriptionPrice = newSubscriptionPrice;
        await user.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error updating subscription price', error });
    }
};

exports.getSubscriptionPrice = async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await User.findById(userId);
        res.status(200).json({ subscriptionPrice: user.subscriptionPrice });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching subscription price', error });
    }
};
