const express = require('express');
const router = express.Router();
const subscriptionHandler = require('../utils/subscriptionHandler')

router.post("/create-payment-intent", transactionController.createPaymentIntent);

