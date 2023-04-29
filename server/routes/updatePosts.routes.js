const express = require('express');
const router = express.Router();
const updatePostController = require('../controllers/updatePost.controller');

router.post('/api/artists/:artistId/updates', updatePostController.createUpdatePost);
router.get('/api/artists/:artistId/updates', updatePostController.getAllUpdatePosts);
router.get('/api/updates/:updatePostId', updatePostController.getUpdatePost);
router.put('/api/updates/:updatePostId', updatePostController.updateUpdatePost);
router.delete('/api/updates/:updatePostId', updatePostController.deleteUpdatePost);

module.exports = router;
