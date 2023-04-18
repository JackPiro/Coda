const express = require('express');
const router = express.Router();
const nftCollectibleController = require('../controllers/nftCollectibleController');

router.get('/artist/:artistId/collectibles', nftCollectibleController.getNFTCollectiblesByArtist);
router.put('/purchase/:nftId', nftCollectibleController.purchaseNFTCollectible);

module.exports = (app) => {
    app.use('/api/nft-collectibles', router);
};
