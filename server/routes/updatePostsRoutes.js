const express = require('express');
const router = express.Router();
const updatePostController = require('../controllers/updatePostController');

router.post('/artists/:artistId/updates', updatePostController.createUpdatePost);
router.get('/artists/:artistId/updates', updatePostController.getAllUpdatePosts);
router.get('/updates/:updatePostId', updatePostController.getUpdatePost);
router.put('/updates/:updatePostId', updatePostController.updateUpdatePost);
router.delete('/updates/:updatePostId', updatePostController.deleteUpdatePost);

module.exports = router;
