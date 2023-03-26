const mongoose = require('mongoose');

// Define the schema for the user
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['artist', 'listener'], required: true },
    invitesAvailable: { type: Number, default: 0 },
    subscribedGroups: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SubscriptionGroup' }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    notifyOn: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Artist' }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

// Create and export the User model
const User = mongoose.model('User', UserSchema);
module.exports = User;
