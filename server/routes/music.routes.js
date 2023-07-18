const express = require('express');
const router = express.Router();
const musicController = require('../controllers/music.controller');
const { authenticate } = require('../config/jwt.config')
const upload = require('../utils/s3Interface');

router.post('/create', authenticate, upload, musicController.createMusic);
router.get('/get-all-music', musicController.getAllMusic);
router.get('/get-most-recent', musicController.getMostRecent);
router.get('/search', musicController.musicSearch);
router.get('/:id', musicController.getMusicById);
router.patch('/update/:id', musicController.updateMusic);
router.delete('/delete/:id', musicController.deleteMusic);
router.get('/stream/:id', upload.getMusicStreaming);
router.get('/get-music-by-artist/:id', musicController.getMusicByArtist);
router.get('/get-albums-by-artist/:id', musicController.getAlbumsByArtist);
router.get('/get-singles-by-artist/:id', musicController.getSinglesByArtist);
router.get('/get-top-ten-songs-by-artist/:id', musicController.getTopTenSongsByArtist);





module.exports = router;
