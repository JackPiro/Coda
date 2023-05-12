const mongoose = require('mongoose');

const ArtistSchema = new mongoose.Schema({
    userID: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    name: {type: String, required: true},
    genre: [{type: String, required: true}],
    bio: {type: String, required: true},
    albums: [{type:mongoose.Schema.Types.ObjectId, ref: 'Music'}], //unfinished music needs to be songs and albums
    socialLinks: [{
        platform: {type: String},
        url: {type: String}
    }],
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});

const Artist = mongoose.model('Artist', ArtistSchema);
module.exports = Artist;
