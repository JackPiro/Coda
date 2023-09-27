// const mongoose = require('mongoose');

// const TransactionSchema = new mongoose.Schema({
//     userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//     artistId: { type: mongoose.Schema.Types.ObjectId, ref: 'Artist', required: true },
//     points: { type: Number, required: true },
//     type: { type: String, enum: ['earn', 'spend', 'sell'], required: true },
//     action: { type: String, required: true },
//     timestamp: { type: Date, default: Date.now },
//     actionDetails: {
//         type: Map,
//         of: String
//     }
// });

// const Transaction = mongoose.model('Transaction', TransactionSchema);
// module.exports = Transaction;



const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    artistId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Artist', 
        required: true 
    },
    points: { 
        type: Number, 
        required: true 
    },
    type: { 
        type: String, //May just change this to earn bundle dissolve list delist purchase
        enum: ['earn', 'spend', 'sell', 'bundle', 'dissolve', 'list', 'purchase'], // Added new transaction types
        required: true 
    },
    action: { 
        type: String, 
        required: true 
    },
    timestamp: { 
        type: Date, 
        default: Date.now 
    },
    actionDetails: {
        type: Map,
        of: String // Maintained flexibility for future expansion. Can add specific details related to a transaction.
    },
    nftId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'NFTBundle', 
        default: null  // Added NFT ID to associate certain transactions with specific NFTs.
    }
});

const Transaction = mongoose.model('Transaction', TransactionSchema);
module.exports = Transaction;



/*
The Transaction model primarily serves as a ledger to keep track of significant actions related to loyalty points. Every time a user earns, spends, or interacts with these points in a meaningful way, a new transaction record is created. This model not only allows you to maintain a history of user interactions but also helps in debugging, accounting, and providing insight into user behavior.
*/