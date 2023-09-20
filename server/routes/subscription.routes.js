const express = require('express');
const router = express.Router();
const subscriptionHandler = require('../utils/subscriptionHandler')

// router.post("/create-payment-intent", transactionController.createPaymentIntent);

const bodyParser = require('body-parser');

router.post("/subscribe", subscriptionHandler.subscribe);
router.post("/successfully-subscribed", subscriptionHandler.successfullySubscribed);
router.post("/successfully-unsubscribed", subscriptionHandler.successfullyUnsubscribed);

router.post("/stripe-webhook", bodyParser.raw({ type: 'application/json', limit: '5mb' }), subscriptionHandler.stripeWebhook);

module.exports = router;
