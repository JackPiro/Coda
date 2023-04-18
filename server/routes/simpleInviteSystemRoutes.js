const express = require('express');
const router = express.Router();
const inviteController = require('../controllers/inviteController');

router.post('/api/invites', inviteController.sendInvite);

module.exports = router;
