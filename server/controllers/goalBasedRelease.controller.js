const Song = require('../models/GoalsBasedRelease');

module.exports = {
    getSongsWithActiveGoals: async (req, res) => {
        try {
            const songsWithActiveGoals = await Song.find({ 'goal.active': true });
            res.status(200).json(songsWithActiveGoals);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    createGoalForSong: async (req, res) => {
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
    },

    getGoalForSong: async (req, res) => {
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
    },

    updateGoalForSong: async (req, res) => {
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
    },

    deleteGoalForSong: async (req, res) => {
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
    },

    contributeToGoal: async (req, res) => {
        // Your implementation here for handling contributions
    },

    getContributionsForGoal: async (req, res) => {
        // Your implementation here for fetching and returning all contributions for a specific song's goal
    }
};
