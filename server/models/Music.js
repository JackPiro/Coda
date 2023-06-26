const mongoose =  require('mongoose');
const mongooseFuzzySearching = require('mongoose-fuzzy-searching');

// Now we Define the Music Schema music === song should prolly rename this later bc we have songs ad ablums

// mongoose.Schema is a method that takes an object
const MusicSchema = new mongoose.Schema({
    artist: {
        artistID: {type: mongoose.Schema.Types.ObjectId, ref: 'Artist'},
        name: { type: String }
    },
    title: {type: String, required: true},
    description: {type: String},
    genre: {type: String, required: true},
    coverArt: {type: String, required: true},
    audioFile: {type: String, required: true},
    offer: {type: Boolean, required: true, default: false},
    releaseDate: {type: Date, required: true, default: Date.now},
    NFTType: {type: String, enum: ['royaltySharing', 'collectible', 'none'], default: 'none'},
    streamCount: {type: Number},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});

MusicSchema.index({ title: 'text', 'artist.name': 'text', genre: 'text' });

MusicSchema.plugin(mongooseFuzzySearching, { fields: ['title', 'artist.name'] });


const Music = mongoose.model('Music', MusicSchema);
module.exports = Music;