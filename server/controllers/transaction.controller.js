const User = require('../models/User');
const Artist = require('../models/Artist');
const Transaction = require('../models/Transaction')

module.exports.earnPoints = async (req, res) => {
    try {
        // Validate the request body
        const { userId, artistId, action } = req.body;
        if (!userId || !artistId || !action) {
            return res.status(400).json({ message: 'Missing user id, artist id, or action' });
        }

        // Fetch the user and artist
        const user = await User.findById(userId);
        const artist = await Artist.findById(artistId);
        if (!user || !artist) {
            return res.status(404).json({ message: 'User or artist not found' });
        }

        // Calculate the number of points to be earned
        let basePoints;
        switch (action) {
            case 'listened':
                basePoints = 1;
                break;
            case 'liked':
                basePoints = 1;
                break;
            case 'shared music':
                basePoints = 5;
                break;
            //Maybe implement follower link for the future where they follow through a link connected to that user and make it more points.
            case 'shared profile': //with click through?
                basePoints = 5;
                break;
            case 'bought merch':
                basePoints = 25;
                break;
            case 'bought collectable':
                basePoints = 30;
                break;
            case 'bought royalties':
                basePoints = 50;
                break;
            case 'donated':
                basePoints = 50;
                break;
            default:
                return res.status(400).json({ message: 'Invalid action' });
        }
        const followerMultiplier = 1000 * Math.exp(-0.00001 * artist.followers.length);
        const points = Math.round(basePoints * followerMultiplier);

        // Create a new transaction
        const transaction = new Transaction({ userId, artistId, points, type: 'earn', action });
        await transaction.save();

        // Update the user's total points
        user.points += points;
        await user.save();

        // Return the new transaction
        return res.json(transaction);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Server error' });
    }
};

module.exports.spendPoints = async (req, res) => {
    try {
        const { userId, requiredPoints } = req.body;
        if (!userId || !requiredPoints) {
            return res.status(400).json({ message: 'Missing user id or points' });
        }

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (user.loyaltyPoints < requiredPoints) {
            return res.status(400).json({ message: 'Not enough points' });
        }

        // Create a new transaction
        const transaction = new Transaction({ userId, loyaltyPoints: -requiredPoints, type: 'spend', action: 'spent points' }); // Adjust action as needed
        await transaction.save();

        // Update the user's total points
        user.loyaltyPoints -= requiredPoints;
        await user.save();

        // Return the new transaction
        return res.json(transaction);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Server error' });
    }
};




