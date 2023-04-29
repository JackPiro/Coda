const express = require('express');
const router = express.Router();
const artist = require('../controllers/artist.controller');

//add get artist by id later
router.post('/api/create', artist.createArtist);
router.get('/api/:id', artist.getArtists);
router.put('/api/:id', artist.updateArtistById);
router.delete('/api/:id', artist.deleteArtistById);

module.exports = router;

