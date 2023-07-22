const mongoose = require('mongoose');

const ArtistSubscriptionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    artistId: { type: mongoose.Schema.Types.ObjectId, ref: 'Artist', required: true },
    status: { type: String, enum: ['active', 'inactive', 'cancelled'], default: 'inactive' },
    stripeSubscriptionId: { type: String, required: true }, // Only if you're using Stripe for artist subscriptions.
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const ArtistSubscription = mongoose.model('ArtistSubscription', ArtistSubscriptionSchema);
module.exports = ArtistSubscription;
