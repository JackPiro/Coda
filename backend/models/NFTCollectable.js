const mongoose = require('mongoose');

const NFTCollectibleSchema = new mongoose.Schema({
    artistID: {type: mongoose.Schema.Types.ObjectId, ref: 'Artist', required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    imageURL: {type: String, required: true},
    creationDate: {type: Date, required: true, default: Date.now},
    ownerID: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    price: {type: Number, required: true},
    royaltiesPercentage: {type: Number, required: true, default: 0}
});

const NFTCollectible = mongoose.model('NFTCollectible', NFTCollectibleSchema);
module.exports = NFTCollectible;
