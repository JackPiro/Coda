const mongoose = require('mongoose');

const ExclusiveContentSchema = new mongoose.Schema({
    contentID: {type: mongoose.Schema.Types.ObjectId},
    contentType: {type: String, enum: ['NFT_collectible', 'music', 'update_post', 'goal_based_release', 'crowdfunding_campaign'], required: true},
    contentData: {type: mongoose.Schema.Types.ObjectId, refPath: 'contentType', required: true},
    contentCreator: {type: mongoose.Schema.Types.ObjectId, ref: 'Artist', required: true},
    // ... (other fields related to exclusive content)
});

const ExclusiveContent = mongoose.model('ExclusiveContent', ExclusiveContentSchema);
module.exports = ExclusiveContent;
