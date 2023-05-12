const express = require('express');
const router = express.Router();
const biggestSupporterController = require('../controllers/biggestSupporters.controllers');

router.get('/api/artist/:artistId', biggestSupporterController.getTopSupportersForArtist);

module.exports = router;
