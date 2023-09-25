const express = require('express');
const router = express.Router();
const artistSubscriptionGroup = require('../controllers/artistSubscriptionGroup.controller');

// router.post('/api/', artistSubscriptionGroup.createGroup);
// router.get('/api/', artistSubscriptionGroup.getAllGroups);
// router.get('/api/:id', artistSubscriptionGroup.getGroupById);
// router.put('/api/:id', artistSubscriptionGroup.updateGroupById);
// router.delete('/api/:id', artistSubscriptionGroup.deleteGroupById);

router.get('/handle-redirect', artistSubscriptionGroup.handleStripeRedirect);

module.exports = router;
