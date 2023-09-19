const express = require('express');
const router = express.Router();
const subscriptionHandler = require('../utils/subscriptionHandler')

router.post("/subscribe", subscriptionHandler.subscribe);
router.post("/create-payment-intent", transactionController.createPaymentIntent);

