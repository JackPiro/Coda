const express = require('express');
const router = express.Router();
const {
    createCampaign,
    getCampaignsByArtist,
    getCampaignById,
    deleteCampaign,
    contributeToCampaign,
    getCampaignContributions,
    closeCampaign,
} = require('../controllers/crowdfundingCampaignController');

router.post('/', createCampaign);
router.get('/artist/:artistId', getCampaignsByArtist);
router.get('/:campaignId', getCampaignById);
router.delete('/:campaignId', deleteCampaign);
router.post('/:campaignId/contribute', contributeToCampaign);
router.get('/:campaignId/contributions', getCampaignContributions);
router.put('/:campaignId/close', closeCampaign);

module.exports = router;
