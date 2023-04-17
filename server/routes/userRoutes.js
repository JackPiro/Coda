//importing the necessary packages and your User model
const express = require('express');
const User = require('../models/User');
const router = express.Router();
const Artist = require('../models/Artist');
const UserEngagementMetrics = require('../models/UserEngagementMetrics');


//route for creating a new user

router.post('/create', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();

        const newUserEngagementMetrics = new UserEngagementMetrics({ user: newUser._id });
        await newUserEngagementMetrics.save();

        // If the user role is "artist", create an Artist model and link it to the user
        if (newUser.role === 'artist') {
            const newArtist = new Artist({ user: newUser._id });
            await newArtist.save();
        }

        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

/*
^^This code creates a new POST endpoint at /create that allows you to create a new user.
When a client sends a request to this endpoint, 
the Express router creates a new user with the data provided in the request body, 
saves it to the database, and sends the newly created user as the response.
*/

// Get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a user by ID
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update a user by ID
router.put('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete a user by ID
router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json({ message: 'User deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Updates the subscription price for a user based on their successful invites
//Fetch the user with the given userId, update the user's subscription price using the calculateNewSubscriptionPrice function, and save the changes to the database.
router.put('/:userId/update-subscription-price', async (req, res) => {
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
});


//Fetch the user with the given userId and return their current subscription price.
router.get('/:userId/subscription-price', async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await User.findById(userId);
        res.status(200).json({ subscriptionPrice: user.subscriptionPrice });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching subscription price', error });
    }
});



module.exports = router;


