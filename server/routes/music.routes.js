const express = require('express');
const router = express.Router();
const musicController = require('../controllers/musicController');

router.post('/create', musicController.createMusic);
router.get('/', musicController.getAllMusic);
router.get('/:id', musicController.getMusicById);
router.patch('/:id', musicController.updateMusic);
router.delete('/:id', musicController.deleteMusic);
router.get('/artist/:artistId', musicController.getMusicByArtist);
module.exports = router;
