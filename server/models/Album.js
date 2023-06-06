const mongoose = require('mongoose');

const AlbumSchema = new mongoose.Schema({
    artistID: {type: mongoose.Schema.Types.ObjectId, ref: 'Artist'},
    songs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Music' }],
    title: {type: String, required: true},
    description: {type: String},
    genre: {type: String, required: true},
    coverArt: {type: String, required: true},
    offer: {type: Boolean, required: true, default: false},
    releaseDate: {type: Date, required: true, default: Date.now},
    NFTType: {type: String, enum: ['royaltySharing', 'collectible', 'none'], default: 'none'},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
})

const Album = mongoose.model('Album', AlbumSchema);
module.exports = Album