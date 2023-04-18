const BiggestSupporter = require('../models/BiggestSupporter');

exports.getTopSupportersForArtist = async (req, res) => {
    try {
        const artistId = req.params.artistId;
        const topSupporters = await BiggestSupporter.find({ artistID: artistId })
            .sort({ totalEngagementForArtist: -1 })
            .limit(10);

        res.status(200).json(topSupporters);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving top supporters for artist' });
    }
};
