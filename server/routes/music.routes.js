const express = require('express');
const router = express.Router();
const musicController = require('../controllers/music.controller');
const { authenticate } = require('../config/jwt.config')
const upload = require('../utils/s3Interface');

router.post('/create', authenticate, upload, musicController.createMusic);
router.get('/', musicController.getAllMusic);
router.get('/:id', musicController.getMusicById);
router.patch('/:id', musicController.updateMusic);
router.delete('/:id', musicController.deleteMusic);
router.get('/artist/:userID', musicController.getMusicByArtist);

module.exports = router;
