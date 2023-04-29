const express = require('express');
const router = express.Router();
const musicController = require('../controllers/music.controller');

router.post('/api/create', musicController.createMusic);
router.get('/api/', musicController.getAllMusic);
router.get('/api/:id', musicController.getMusicById);
router.patch('/api/:id', musicController.updateMusic);
router.delete('/api/:id', musicController.deleteMusic);
router.get('/api/artist/:artistId', musicController.getMusicByArtist);

module.exports = router;
