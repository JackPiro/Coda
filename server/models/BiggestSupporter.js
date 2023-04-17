const mongoose = require('mongoose');

const BiggestSupporterSchema = new mongoose.Schema({
    userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    artistID: { type: mongoose.Schema.Types.ObjectId, ref: 'Artist', required: true },
    totalEngagementForArtist: { type: Number, default: 0 },
    rankForEngagementWithArtist: { type: Number, default: 0 },
    lastUpdated: { type: Date, default: Date.now }
});

const BiggestSupporter = mongoose.model('BiggestSupporter', BiggestSupporterSchema);
module.exports = BiggestSupporter;


/*
Keep in mind that you'll need to update the rankForEngagementWithArtist and totalEngagementForArtist 
fields whenever the user's engagement with the artist changes. 
You can handle this logic later in your application code.
*/