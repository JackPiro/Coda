const mongoose = require('mongoose');

// Define the schema for the user
const UserSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    //removed required for the time being
    platformSubscription: {
        status: { type: String, enum: ['active', 'inactive', 'cancelled'], default: 'inactive' },
        stripeSubscriptionId: { type: String }, // Add this if you're using Stripe for platform subscriptions too.
        subscriptionType: { type: String }, // The type of platform subscription
        updatedAt: { type: Date, default: Date.now }
    },
    username: { type: String, require: true, unique: true },
    displayName: { type: String },
    bio: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['artist', 'listener'], required: true },
    loyaltyPoints: [
        {
            artist: {type: mongoose.Schema.Types.ObjectId, ref: 'Artist'},
            points: {type: Number, default: 0},
            timestamp: {type: Date, default: Date.now},
            reason: {type: String}
        }
    ],
    subscribedGroups: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'ArtistSubscription' }
    ],
    likedSongs: [
        {
            songID: {type: mongoose.Schema.Types.ObjectId, ref: 'Music'},
            likedAt: {type: Date, default: Date.now}
        }
    ],
    sharedSongs: [
        {
            songId: {type: mongoose.Schema.Types.ObjectId, ref: 'Music'},
            timestamp: {type: Date, default: Date.now},
            recipients: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
        }
    ],
    invitesAvailable: { type: Number, default: 0 },
    successfulInvites:{type: Number, default: 0},
    subscriptionPrice: {type: Number, default: 22},
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    notifyOn: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Artist' }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

//Assigns a new subscription price based on the number of successful invites a user has
const calculateNewSubscriptionPrice = (successfulInvites) => {
    let newSubscriptionPrice;

    if (successfulInvites >= 6) {
        newSubscriptionPrice = 9.99;
    } else if (successfulInvites >= 3) {
        newSubscriptionPrice = 14.99;
    } else if (successfulInvites >= 1) {
        newSubscriptionPrice = 18.99;
    } else {
        newSubscriptionPrice = 22.00;
    }

    return newSubscriptionPrice;
};



// Create and export the User model
const User = mongoose.model('User', UserSchema);
module.exports = User;
