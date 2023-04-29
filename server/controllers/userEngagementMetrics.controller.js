const UserEngagementMetrics = require('../models/UserEngagementMetrics');

exports.getTopArtistsForListener = async (req, res) => {
    try {
        const listenerId = req.params.listenerId;
        const engagementData = await UserEngagementMetrics.find({ userID: listenerId });

        const artistScores = {};

        engagementData.forEach(data => {
            const artistId = data.artistID.toString();
            const score = data.totalEngagementScore;

            if (artistScores[artistId]) {
                artistScores[artistId] += score;
            } else {
                artistScores[artistId] = score;
            }
        });

        const topArtists = Object.entries(artistScores)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 30)
            .map(([artistId, score]) => ({ artistId, score }));

        res.json(topArtists);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving top artists for listener' });
    }
};

exports.getSupportersRankingForArtist = async (req, res) => {
    try {
        const artistId = req.params.artistId;
        const engagementData = await UserEngagementMetrics.find({ artist: artistId });

        const supporterScores = {};

        engagementData.forEach(data => {
            const listenerId = data.listener.toString();
            const score = data.score; // Assuming you have a 'score' field in your UserEngagementMetrics model

            if (supporterScores[listenerId]) {
                supporterScores[listenerId] += score;
            } else {
                supporterScores[listenerId] = score;
            }
        });

        const rankedSupporters = Object.entries(supporterScores)
            .sort((a, b) => b[1] - a[1])
            .map(([listenerId, score]) => ({ listenerId, score }));

        res.json(rankedSupporters);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving supporters ranking for artist' });
    }
};
