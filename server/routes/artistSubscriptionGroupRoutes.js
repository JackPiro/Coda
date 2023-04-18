const express = require('express');
const router = express.Router();
const {
    createArtistSubscriptionGroup,
    getAllArtistSubscriptionGroups,
    getArtistSubscriptionGroupById,
    updateArtistSubscriptionGroup,
    deleteArtistSubscriptionGroup
} = require('../controllers/artistSubscriptionGroupController');

router.post('/', createArtistSubscriptionGroup);
router.get('/', getAllArtistSubscriptionGroups);
router.get('/:id', getArtistSubscriptionGroupById);
router.put('/:id', updateArtistSubscriptionGroup);
router.delete('/:id', deleteArtistSubscriptionGroup);

module.exports = router;
