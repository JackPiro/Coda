const mongoose = require('mongoose');

const CrowdfundingCampaignSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    isActive: {type: Boolean, default: true},
    campaignID: { type: mongoose.Schema.Types.ObjectId, auto: true },
    artistID: { type: mongoose.Schema.Types.ObjectId, ref: 'Artist', required: true },
    campaignImage: { type: String },
    campaignType: { type: String, required: true, enum: ['single', 'album', 'music_video'] },
    fundingGoal: { type: Number, required: true },
    fundsRaised: { type: Number, default: 0 },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    status: { type: String, required: true, enum: ['active', 'completed', 'canceled'] },
    supporters: [{
        userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        amount: { type: Number, required: true }
    }],
    exclusiveContent: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ExclusiveContent' }],
});





const CrowdfundingCampaign = mongoose.model('CrowdfundingCampaign', CrowdfundingCampaignSchema);
module.exports = CrowdfundingCampaign;
