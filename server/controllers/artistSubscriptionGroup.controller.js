const ArtistSubscriptionGroup = require('../models/ArtistSubscriptionGroup');
const Artist = require('../models/Artist')

// module.exports.createGroup = async (req, res) => {
//     try {
//         const newGroup = new ArtistSubscriptionGroup(req.body);
//         await newGroup.save();
//         res.status(201).json(newGroup);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };

module.exports.handleStripeRedirect = async (req, res) => {
    const { code } = req.query;

    try {
        const response = await axios.post('https://connect.stripe.com/oauth/token', {
            client_secret: process.env.REACT_APP_STRIPE_CLIENT_ID_TEST,
            code,
            grant_type: 'authorization_code'
        });

        const stripeUserId = response.data.stripe_user_id;

        // You would also update your database to store the stripeUserId for the user.
        // This will involve using your model (e.g., Artist or User) to make the update.
        
        // For example (assuming Artist model is related):
        const artist = await Artist.findOne({ user: req.user.id }); // Assuming you have user info on req object
        artist.stripeUserId = stripeUserId;
        await artist.save();

        res.json({ message: "Stripe account linked successfully!" });

    } catch (error) {
        res.status(400).json({ message: "Error linking Stripe account." });
    }
};


module.exports.getAllGroups = async (req, res) => {
    try {
        const groups = await ArtistSubscriptionGroup.find();
        res.status(200).json(groups);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports.getGroupById = async (req, res) => {
    try {
        const group = await ArtistSubscriptionGroup.findById(req.params.id);
        if (!group) {
            return res.status(404).json({ message: 'Subscription group not found' });
        }
        res.status(200).json(group);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports.updateGroupById = async (req, res) => {
    try {
        const updatedGroup = await ArtistSubscriptionGroup.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedGroup) {
            return res.status(404).json({ message: 'Subscription group not found' });
        }
        res.status(200).json(updatedGroup);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteGroupById = async (req, res) => {
    try {
        const deletedGroup = await ArtistSubscriptionGroup.findByIdAndDelete(req.params.id);
        if (!deletedGroup) {
            return res.status(404).json({ message: 'Subscription group not found' });
        }
        res.status(200).json({ message: 'Subscription group deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
