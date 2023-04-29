const express = require('express');
const router = express.Router();
const crowdfundingCampaignController = require('../controllers/crowdfundingCampaign.controller');

router.post('/api/', crowdfundingCampaignController.createCampaign);
router.get('/api/artist/:artistId', crowdfundingCampaignController.getCampaignsByArtist);
router.get('/api/:campaignId', crowdfundingCampaignController.getCampaignById);
router.delete('/api/:campaignId', crowdfundingCampaignController.deleteCampaign);
router.post('/api/:campaignId/contribute', crowdfundingCampaignController.contributeToCampaign);
router.get('/api/:campaignId/contributions', crowdfundingCampaignController.getCampaignContributions);
router.put('/api/:campaignId/close', crowdfundingCampaignController.closeCampaign);

module.exports = router;
