const express = require('express');
const router = express.Router();
const userEngagementController = require('../controllers/userEngagementMetrics.controller');

router.get('/api/listener/:listenerId/top-artists', userEngagementController.getTopArtistsForListener);
router.get('/api/artist/:artistId/supporters', userEngagementController.getSupportersRankingForArtist);

module.exports = router;
