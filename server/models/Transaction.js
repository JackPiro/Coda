const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    artistId: { type: mongoose.Schema.Types.ObjectId, ref: 'Artist', required: true },
    points: { type: Number, required: true },
    type: { type: String, enum: ['earn', 'spend', 'sell'], required: true },
    action: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
});

const Transaction = mongoose.model('Transaction', TransactionSchema);
module.exports = Transaction;

