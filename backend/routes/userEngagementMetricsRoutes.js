const express = require('express');
const Music = require('../models/Music');
const router = express.Router();


//Route to get the top 30 artists for a listener:
const UserEngagementMetrics = require('../models/userEngagementMetrics');

router.get('/listener/:listenerId/top-artists', async (req, res) => {
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
});
/*
^This route retrieves a listener's top 30 artists based on their engagement score.
First, it receives the listenerId from the request URL parameters.
Then, it queries the UserEngagementMetrics model to find all the documents with the matching userID.
It creates an empty object artistScores to store the engagement scores for each artist.
It iterates through the retrieved engagement data and accumulates the engagement scores for each artist in the artistScores object.
Next, it sorts the artistScores object by the engagement score in descending order and takes the first 30 entries (top 30 artists).
It then maps the top 30 artists into a new array containing the artistId and the corresponding engagement score.
Finally, it sends the top 30 artists back as a JSON response
*/


//Route to get the ranking of supporters for a specific artist:
router.get('/artist/:artistId/supporters', async (req, res) => {
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
});

/*
^This route retrieves the ranking of supporters for a specific artist based on their engagement score.
First, it receives the artistId from the request URL parameters.
Then, it queries the UserEngagementMetrics model to find all the documents with the matching artistID.
It creates an empty object supporterScores to store the engagement scores for each listener.
It iterates through the retrieved engagement data and accumulates the engagement scores for each listener in the supporterScores object.
Next, it sorts the supporterScores object by the engagement score in descending order, effectively ranking the supporters.
It then maps the ranked supporters into a new array containing the listenerId and the corresponding engagement score.
Finally, it sends the ranked supporters back as a JSON response.
*/
