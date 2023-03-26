const mongoose = require('mongoose');

const GoalBasedReleaseSchema = new mongoose.Schema({
    releaseID: {type: mongoose.Schema.Types.ObjectId},
    artistID: {type: mongoose.Schema.Types.ObjectId, ref: 'Artist', required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    songURL: {type: String, required: true},
    creationDate: {type: Date, default: Date.now},
    targetType: {type: String, required: true},
    targetValue: {type: Number, required: true},
    currentValue: {type: Number, default: 0},
    status: {type: String, enum: ['locked', 'released'], default: 'locked'}
});

const GoalBasedRelease = mongoose.model('GoalBasedRelease', GoalBasedReleaseSchema);
module.exports = GoalBasedRelease;

/*
In this updated schema, targetType represents the engagement metric the artist chooses 
(such as followers, plays, etc.), and targetValue is the numeric goal for that metric. 
currentValue will store the current value for the targetType. 
The status field will indicate whether the song is locked (not yet released) or released 
(available to listeners).
*/

