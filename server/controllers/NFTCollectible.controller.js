const Music = require('../models/Music');
const NFTCollectible = require('../models/NFTCollectible');

module.exports.getNFTCollectiblesByArtist = async (req, res) => {
    try {
        const artistId = req.params.artistId;
        const NFTCollectibles = await NFTCollectible.find({ artistId: artistId });
        res.status(200).json(NFTCollectibles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports.purchaseNFTCollectible = async (req, res) => {
    try {
        const NFTId = req.params.NFTId;
        const buyerId = req.body.buyerId;

        const NFTCollectible = await NFTCollectible.findById(NFTId);
        if (!NFTCollectible) {
            return res.status(404).json({ message: 'NFT collectible not found' });
        }

        // Implement purchase logic here, e.g., transfer funds, update owner, etc.

        NFTCollectible.ownerID = buyerId;
        await NFTCollectible.save();

        res.status(200).json(NFTCollectible);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
