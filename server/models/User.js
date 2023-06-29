const mongoose = require('mongoose');

// Define the schema for the user
const UserSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    //removed required for the time being
    username: { type: String, require: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['artist', 'listener'], required: true },
    loyaltyPoints: [
        {
            artist: { type: mongoose.Schema.Types.ObjectId, ref: 'Artist' },
            points: { type: Number, default: 0 },
            timestamp: { type: Date, default: Date.now },
            reason: { type: String },
        }
    ],
    following: [
        {
            followerID: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
        }
    ],
    followers: [
        {
            followerID: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
        }
    ],
    subscribedGroups: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'SubscriptionGroup' }
    ],
    invitesAvailable: { type: Number, default: 0 },
    successfulInvites:{type: Number, default: 0},
    subscriptionPrice: {type: Number, default: 22},
    likedSongs: [{type: mongoose.Schema.Types.ObjectId, ref: 'Music'}], //come back to this need to be the ids of songs
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
