const mongoose = require('mongoose');

const SimpleInviteSystemSchema = new mongoose.Schema({
    senderID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    receiverEmail: { type: String, required: true },
    status: { type: String, required: true, default: 'pending', enum: ['pending', 'accepted', 'expired'] },
    inviteCode: { type: String, required: true },
    creationDate: { type: Date, default: Date.now },
    expiryDate: { type: Date, required: true },
    rewardPoints: { type: Number, default: 0 }
});

const Invite = mongoose.model('Invite', InviteSchema);
module.exports = Invite;
