const mongoose = require('mongoose');

const SimpleInviteSystemSchema = new mongoose.Schema({
    senderID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    receiverEmail: { type: String, required: true },
    status: { type: String, required: true, default: 'pending', enum: ['pending', 'accepted', 'expired'] },
    creationDate: { type: Date, default: Date.now },
    expiryDate: { type: Date, required: true },
    rewardPoints: { type: Number, default: 0 }
});

const SimpleInviteSystem = mongoose.model('SimpleInviteSystem', SimpleInviteSystemSchema);
module.exports = SimpleInviteSystem;
