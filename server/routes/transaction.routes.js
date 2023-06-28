const express = require('express');
const router = express.Router();
const transactionController = require('./models/transaction');

router.post('/earn', transactionController.earnPoints);

module.exports = router;
