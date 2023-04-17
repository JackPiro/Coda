const mongoose = require('mongoose');

const UpdatePostSchema = new mongoose.Schema({
    postID: {type: mongoose.Schema.Types.ObjectId},
    title: {type: String, required: true},
    content: {type: String, required: true},
    artistID: {type: mongoose.Schema.Types.ObjectId, ref: 'Artist', required: true},
    // ... (other fields related to update posts)
});

const UpdatePost = mongoose.model('UpdatePost', UpdatePostSchema);
module.exports = UpdatePost;
