const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transaction.controller');

router.post('/earn', transactionController.earnPoints);
router.post('/spend', transactionController.spendPoints);

module.exports = router;
