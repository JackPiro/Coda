const express = require('express');
const router = express.Router();
const NFTCollectibleController = require('../controllers/NFTCollectible.controller');

router.get('/api/artist/:artistId/collectibles', NFTCollectibleController.getNFTCollectiblesByArtist);
router.put('/api/purchase/:NFTId', NFTCollectibleController.purchaseNFTCollectible);

module.exports = router;
