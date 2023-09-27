const NFTPointsBundle = require('../models/NFTPointsBundle');
const User = require('../models/User');
const Artist = require('../models/Artist')

// 1. Create NFT Bundle
module.exports.createNFTBundle = async (req, res) => {
    try {
        const { userId, artistId, points } = req.body;

        // Validate the user and artist
        const user = await User.findById(userId);
        const artist = await Artist.findById(artistId);
        if (!user || !artist) {
            return res.status(404).json({ message: 'User or artist not found' });
        }

        // Check if the user has enough loyalty points
        if (user.loyaltyPoints < points) {
            return res.status(400).json({ message: 'Not enough loyalty points to create the NFT bundle' });
        }

        // Optional: Rate limiting or minimum threshold for NFT creation can be added here.

        // Deduct loyalty points from user's total and update in the database
        user.loyaltyPoints -= points;
        await user.save();

        // Create the NFT bundle
        const nftBundle = new NFTPointsBundle({ userId, artistId, points });
        await nftBundle.save();

        return res.json(nftBundle);
    } catch(err) {
        console.error(err);
        return res.status(500).json({ message: 'Server error' });
    }
};
// 2. List NFT Points Bundle for Sale
module.exports.listNFTForSale = async (req, res) => {
    try {
        const { bundleId, price } = req.body;
        const nftBundle = await NFTPointsBundle.findById(bundleId);
        nftBundle.status = 'listed';
        nftBundle.listedPrice = price;
        nftBundle.metadata.push({ action: "listed", details: `Listed for $${price}` });
        await nftBundle.save();
        return res.json(nftBundle);
    } catch(err) {
        console.error(err);
        return res.status(500).json({ message: 'Server error' });
    }
};

// 3. Delist NFT Points Bundle from Sale
module.exports.delistNFT = async (req, res) => {
    try {
        const { bundleId } = req.body;
        const nftBundle = await NFTPointsBundle.findById(bundleId);
        nftBundle.status = 'not-listed';
        nftBundle.metadata.push({ action: "delisted" });
        await nftBundle.save();
        return res.json(nftBundle);
    } catch(err) {
        console.error(err);
        return res.status(500).json({ message: 'Server error' });
    }
};

// 4. Purchase NFT Points Bundle
module.exports.purchaseNFTBundle = async (req, res) => {
    try {
        // Will require transaction mechanisms, checking balances, transferring ownership etc.
        // Also might involve integration with a payment provider or smart contracts.
        // This is just a basic layout.

        const { buyerId, bundleId } = req.body;
        const nftBundle = await NFTPointsBundle.findById(bundleId);
        nftBundle.userId = buyerId;
        nftBundle.status = 'sold';
        nftBundle.metadata.push({ action: "sold", details: `Purchased by user ${buyerId}` });
        await nftBundle.save();
        return res.json(nftBundle);
    } catch(err) {
        console.error(err);
        return res.status(500).json({ message: 'Server error' });
    }
};

// 5. Dissolve NFT Bundle
module.exports.dissolveNFTBundle = async (req, res) => {
    try {
        const { bundleId } = req.body;
        const nftBundle = await NFTPointsBundle.findById(bundleId);
        
        // Convert NFT back into loyalty points
        const user = await User.findById(nftBundle.userId);
        user.points += nftBundle.points;
        await user.save();

        // Create NFT Certificate
        // This assumes there's a Certificate model set up
        const certificate = new NFTCertificate({ bundleId });
        await certificate.save();

        nftBundle.status = 'dissolved';
        nftBundle.certificateId = certificate._id;
        nftBundle.metadata.push({ action: "dissolved" });
        await nftBundle.save();
        return res.json(nftBundle);
    } catch(err) {
        console.error(err);
        return res.status(500).json({ message: 'Server error' });
    }
};
