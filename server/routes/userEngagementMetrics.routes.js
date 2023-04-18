const express = require('express');
const router = express.Router();
const userEngagementController = require('../controllers/userEngagementController');

router.get('/listener/:listenerId/top-artists', userEngagementController.getTopArtistsForListener);
router.get('/artist/:artistId/supporters', userEngagementController.getSupportersRankingForArtist);

module.exports = router;
