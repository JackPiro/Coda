const ArtistSubscriptionGroup = require('../models/ArtistSubscriptionGroup');
const Artist = require('../models/Artist')
const axios = require('axios');


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
            client_secret: process.env.STRIPE_SECRET_TEST_KEY,
            code,
            grant_type: 'authorization_code'
        });

        console.log(req.user.id)
        console.log(req.body)

        console.log(response.data)
        const stripeUserId = response.data.stripe_user_id;

        // if (!req.params || !req.params.id) {
        //     return res.status(400).json({ message: 'User information is missing params.' });
        // }
        
        if (!req.user || !req.user.id) {
            return res.status(400).json({ message: 'User information is missing.' });
        }
        

        const artist = await Artist.findOne({ userID: req.body.userID });
        artist.stripeUserId = stripeUserId;
        await artist.save();

        console.log('test')

        res.json({ message: "Stripe account linked successfully!" });

        console.log("artist found", artist.userID)

    } catch (error) {
        console.error("Stripe error:", error.response ? error.response.data : error.message);
        res.status(400).json({ message: "Error linking Stripe account.", error: error.response ? error.response.data : error.message });
    }
};



/*
After the artist completes the OAuth process on Stripe's website, Stripe will redirect back to the URI you've specified with a code parameter.
This is where we have set up the route and controller to handle the redirect. Our endpoint captures the code from the query parameters and exchanges it with Stripe for an access_token and stripe_user_id (among other details).
*/


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
