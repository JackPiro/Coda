const express = require('express');
const router = express.Router();
const Goal = require('../models/GoalsBasedRelease'); // Import the Goals model

//List all songs with active goals:
router.get('/songs/active-goals', async (req, res) => {
    try {
        const songsWithActiveGoals = await Song.find({ 'goal.active': true });
        res.status(200).json(songsWithActiveGoals);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});  

//Create a goal for a song:
router.post('/songs/:songId/goals', async (req, res) => {
    try {
        const { songId } = req.params;
        const { goalAmount, endDate } = req.body;

        const song = await Song.findById(songId);
        if (!song) {
        return res.status(404).json({ message: 'Song not found' });
        }

        song.goal = { goalAmount, endDate, active: true };
        await song.save();

        res.status(201).json(song);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//Get the goal for a specific song:
router.get('/songs/:songId/goals', async (req, res) => {
    try {
        const { songId } = req.params;

        const song = await Song.findById(songId);
        if (!song) {
        return res.status(404).json({ message: 'Song not found' });
        }

        res.status(200).json(song.goal);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//Update the goal for a specific song:
router.put('/songs/:songId/goals', async (req, res) => {
    try {
        const { songId } = req.params;
        const { goalAmount, endDate, active } = req.body;

        const song = await Song.findById(songId);
        if (!song) {
        return res.status(404).json({ message: 'Song not found' });
        }

        song.goal = { goalAmount, endDate, active };
        await song.save();

        res.status(200).json(song);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//Delete the goal for a specific song:
router.delete('/songs/:songId/goals', async (req, res) => {
    try {
        const { songId } = req.params;

        const song = await Song.findById(songId);
        if (!song) {
        return res.status(404).json({ message: 'Song not found' });
        }

        song.goal = undefined;
        await song.save();

        res.status(200).json({ message: 'Goal deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// later will need to implement the logic to handle contributions, e.g., updating the user's balance, the total contribution amount, and the goal's progress.
router.post('/songs/:songId/goals/contribute', async (req, res) => {
    // Your implementation here
});

// You will need to implement the logic to fetch and return all contributions for a specific song's goal.
router.get('/songs/:songId/goals/contributions', async (req, res) => {
    // Your implementation here
});