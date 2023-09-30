const mongoose =  require('mongoose');

// Now we Define the Music Schema music === song should prolly rename this later bc we have songs ad ablums

// mongoose.Schema is a method that takes an object
const SongClipSchema = new mongoose.Schema({
    artist: {
        artistID: {type: mongoose.Schema.Types.ObjectId, ref: 'Artist'},
        name: { type: String }
    },
    title: {type: String, required: true},
    description: {type: String},
    genre: {type: String, required: true},
    coverArt: {type: String, required: true},
    audioFile: {type: String, required: true},
    streamCount: {type: Number},
    upVotes: {type: Number},
    releaseDate: {type: Date, required: true, default: Date.now},
    featuredArtists: [
        {
            artistID: {type: mongoose.Schema.Types.ObjectId, ref: 'Artist'},
            name: {type: String}
        }
    ],
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});

MusicSchema.index({ title: 'text', 'artist.name': 'text', genre: 'text' });


const SongClip = mongoose.model('SongClip', SongClipSchema);
module.exports = SongClip;