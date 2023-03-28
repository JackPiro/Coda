const express = require('express');
const router = express.Router();
const Artist = require('../models/Artist');

// Create an artist
router.post('/create', async (req, res) => {
    try {
        const newArtist = new Artist(req.body);
        await newArtist.save();
        res.status(201).json(newArtist);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Read an artist by ID
router.get('/:id', async (req, res) => {
    try {
        const artist = await Artist.findById(req.params.id);
        if (!artist) {
            res.status(404).json({ message: 'Artist not found' });
        } else {
            res.json(artist);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update an artist by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedArtist = await Artist.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedArtist) {
            res.status(404).json({ message: 'Artist not found' });
        } else {
            res.json(updatedArtist);
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete an artist by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedArtist = await Artist.findByIdAndDelete(req.params.id);
        if (!deletedArtist) {
            res.status(404).json({ message: 'Artist not found' });
        } else {
            res.json({ message: 'Artist deleted successfully' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


module.exports = router;
