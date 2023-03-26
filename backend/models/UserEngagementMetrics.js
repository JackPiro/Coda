const mongoose = require('mongoose');

// Define EngagementDetailSchema
const EngagementDetailSchema = new mongoose.Schema({
    type: { type: String, required: true },
    count: { type: Number, required: true, default: 0 },
    timestamp: { type: Date, required: true, default: Date.now },
    weight: { type: Number, required: true }
});

// Define UserEngagementMetricsSchema
const UserEngagementMetricsSchema = new mongoose.Schema({
    userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    artistID: { type: mongoose.Schema.Types.ObjectId, ref: 'Artist', required: true },
    engagementDetails: [EngagementDetailSchema],
    totalEngagementScore: { type: Number, default: 0 },
    lastUpdated: { type: Date, default: Date.now }
});

const UserEngagementMetrics = mongoose.model('UserEngagementMetrics', UserEngagementMetricsSchema);
module.exports = UserEngagementMetrics;
