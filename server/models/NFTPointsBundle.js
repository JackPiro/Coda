const mongoose = require('mongoose');

const NFTPointsBundleSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    artistId: { type: mongoose.Schema.Types.ObjectId, ref: 'Artist', required: true },
    points: { type: Number, required: true }, // Number of loyalty points in the NFT bundle
    createdOn: { type: Date, default: Date.now },
    
    // Changed 'listedForSale' to 'status' to provide a clearer state of the NFT
    status: { type: String, enum: ['listed', 'not-listed', 'sold', 'dissolved'], required: true, default: 'not-listed' },
    
    listedPrice: { type: Number, default: null }, // Price for which it's listed on the platform or external marketplace
    
    // A unique identifier for each bundle (can use mongoose's default _id or a custom one if you want more control)
    bundleIdentifier: { type: String, unique: true }, 
    
    // An array to store metadata or history of actions taken on the bundle
    metadata: [{
        action: { type: String }, // e.g., "price change", "listed", "dissolved"
        date: { type: Date, default: Date.now },
        details: { type: String } // e.g., "Price changed from $10 to $15"
    }],
    
    certificateId: { type: mongoose.Schema.Types.ObjectId, ref: 'NFTCertificate', default: null }, // Will link to a certificate if the NFT is dissolved
});

const NFTPointsBundle = mongoose.model('NFTPointsBundle', NFTPointsBundleSchema);
module.exports = NFTPointsBundle;
