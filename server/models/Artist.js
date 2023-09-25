const mongoose = require('mongoose');

const ArtistSchema = new mongoose.Schema({
    userID: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    artistName: {type: String},
    genre: [{type: String}],
    bio: {type: String},
    stripeAccountID: {type: String},
    albums: [{type:mongoose.Schema.Types.ObjectId, ref: 'Albums'}], //unfinished music needs to be songs and albums
    songs: [{type: mongoose.Schema.Types.ObjectId, ref: 'Music'}],
    stripeUserId: {type: String},
    socialLinks: [{
        platform: {type: String},
        url: {type: String}
    }],
    loyaltyRewards: [
        {
            description: { type: String },
            pointsRequired: { type: Number },
        }
    ],
    subscriptionGroupPrice: { type: Number, required: true, default: 15.00 },
    exclusiveContent: [{
        contentID: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'ExclusiveContent' },
        contentType: { type: String, required: true, enum: ['NFT', 'music', 'update_post', 'goal_based_release', 'crowdfunding_campaign'] },
    }],
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});

const Artist = mongoose.model('Artist', ArtistSchema);
module.exports = Artist;
