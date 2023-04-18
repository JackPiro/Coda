const mongoose =  require('mongoose');

// Now we Define the Music Schema

// mongoose.Schema is a method that takes an object
const MusicSchema = new mongoose.Schema({
    artistID: {type: mongoose.Schema.Types.ObjectId, ref: 'Artist'},
    title: {type: String, required: true},
    description: {type: String, required: true},
    genre: {type: String, required: true},
    coverArt: {type: String, required: true},
    audioFile: {type: String, required: true},
    offer: {type: Boolean, required: true, default: false},
    releaseDate: {type: Date, required: true, default: Date.now},
    createdAt: {type: Date, default: Date.now},
    nftType: {type: String, enum: ['royaltySharing', 'collectible', 'none'], default: 'none'},
    updatedAt: {type: Date, default: Date.now}
});

const Music = mongoose.model('Music', MusicSchema);
module.exports = Music;