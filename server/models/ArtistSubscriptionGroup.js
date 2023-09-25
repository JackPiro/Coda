const mongoose = require('mongoose');

//using this one

const ArtistSubscriptionGroupSchema = new mongoose.Schema({
    artistID: { type: mongoose.Schema.Types.ObjectId, ref: 'Artist', required: true },
    groupName: { type: String, required: true },
    description: { type: String, required: true },
    subscriptionPrice: { type: Number, required: true },
    subscribers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    exclusiveContent: [{
        contentID: { type: mongoose.Schema.Types.ObjectId, required: true, ref:'ExclusiveContent' },
        contentType: { type: String, required: true, enum: ['NFT', 'music', 'update_post', 'goal_based_release', 'crowdfunding_campaign'] },
    }],
});

const ArtistSubscriptionGroup = mongoose.model('ArtistSubscriptionGroup', ArtistSubscriptionGroupSchema);
module.exports = ArtistSubscriptionGroup;

/*
In this schema, we define an exclusiveContent array 
that contains objects with a contentID and a contentType field. 
This way, we can reference different types of exclusive content in the Artist Subscription Group schema.
When querying the exclusive content for a subscription group, 
you can use the contentType field to determine which schema to reference for content data.
*/

