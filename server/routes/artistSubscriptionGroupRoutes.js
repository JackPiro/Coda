const express = require('express');
const router = express.Router();
const ArtistSubscriptionGroup = require('../models/ArtistSubscriptionGroup');

// Create a new subscription group
router.post('/', async (req, res) => {
    try {
        const newGroup = new ArtistSubscriptionGroup(req.body);
        await newGroup.save();
        res.status(201).json(newGroup);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all subscription groups
router.get('/', async (req, res) => {
    try {
        const groups = await ArtistSubscriptionGroup.find();
        res.status(200).json(groups);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a specific subscription group by ID
router.get('/:id', async (req, res) => {
    try {
        const group = await ArtistSubscriptionGroup.findById(req.params.id);
        if (!group) {
            return res.status(404).json({ message: 'Subscription group not found' });
        }
        res.status(200).json(group);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update a subscription group by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedGroup = await ArtistSubscriptionGroup.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedGroup) {
            return res.status(404).json({ message: 'Subscription group not found' });
        }
        res.status(200).json(updatedGroup);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a subscription group by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedGroup = await ArtistSubscriptionGroup.findByIdAndDelete(req.params.id);
        if (!deletedGroup) {
            return res.status(404).json({ message: 'Subscription group not found' });
        }
        res.status(200).json({ message: 'Subscription group deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
