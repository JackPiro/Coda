const Music = require('../models/Music');
const NFTCollectible = require('../models/NFTCollectible');

module.exports.getNFTCollectiblesByArtist = async (req, res) => {
    try {
        const artistId = req.params.artistId;
        const nftCollectibles = await NFTCollectible.find({ artistId: artistId });
        res.status(200).json(nftCollectibles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports.purchaseNFTCollectible = async (req, res) => {
    try {
        const nftId = req.params.nftId;
        const buyerId = req.body.buyerId;

        const nftCollectible = await NFTCollectible.findById(nftId);
        if (!nftCollectible) {
            return res.status(404).json({ message: 'NFT collectible not found' });
        }

        // Implement purchase logic here, e.g., transfer funds, update owner, etc.

        nftCollectible.ownerID = buyerId;
        await nftCollectible.save();

        res.status(200).json(nftCollectible);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
