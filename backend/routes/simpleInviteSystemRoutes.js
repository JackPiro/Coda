const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Send an invite
router.post('/api/invites', async (req, res) => {
    try {
        const { inviterId, inviteeEmail } = req.body;

        // Check if invitee is already registered
        const existingUser = await User.findOne({ email: inviteeEmail });
        if (existingUser) {
            return res.status(400).json({ message: 'Invitee is already registered.' });
        }

        // Update inviter's successfulInvites count
        const inviter = await User.findById(inviterId);
        inviter.successfulInvites++;
        inviter.subscriptionPrice = calculateNewSubscriptionPrice(inviter.successfulInvites);
        await inviter.save();

        // Send the invite (add your invite sending logic here)
        // e.g., send an email to the invitee

        res.status(200).json({ message: 'Invite sent.' });
    } catch (error) {
        res.status(500).json({ message: 'Error sending invite.', error });
    }
});

module.exports = router;
