const express = require('express');
const router = express.Router();
const {
    createArtist,
    getArtistById,
    updateArtistById,
    deleteArtistById
} = require('../controllers/artist.controller');

router.post('/create', createArtist);
router.get('/:id', getArtistById);
router.put('/:id', updateArtistById);
router.delete('/:id', deleteArtistById);

module.exports = router;

