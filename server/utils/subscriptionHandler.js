const stripe = require('stripe')(process.env.STRIPE_SECRET);
const User = require('../models/User');

module.exports.subscribe = async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [{
                price: process.env.STRIPE_STANDARD_SUBSCRIPTION_PRICE_ID, // Ensure this environmental variable is set correctly
                quantity: 1,
            }],
            mode: 'subscription',
            success_url: 'https://example.com/success?session_id={CHECKOUT_SESSION_ID}', // Replace with your actual website URL
            cancel_url: 'https://example.com/cancel', // Replace with your actual website URL
        });

        res.json({ sessionId: session.id });
    } catch (err) {
        console.error("Error creating checkout session:", err);
        res.status(500).json({ error: 'Failed to create checkout session' });
    }
};

module.exports.successfullySubscribed = async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
        
        if (session.mode === 'subscription' && session.payment_status === 'paid') {
            // TODO: Extract the user's ID from the session or from your authentication middleware 
            const userId = // Fetch user ID logic goes here...

            // Retrieve the user from the database, update their subscription status, and store Stripe's subscription ID
            const user = await User.findById(userId);
            user.platformSubscriptionStatus = 'active';
            user.platformSubscription.stripeSubscriptionId = session.subscription;
            await user.save();

            res.redirect('https://example.com/successful-subscription'); // Redirect to a success page. Update the URL accordingly.
        } else {
            // Payment was not successful
            res.redirect('https://example.com/failed-subscription'); // Redirect to a failure page. Update the URL accordingly.
        }
    } catch (err) {
        console.error("Error handling successful subscription:", err);
        res.status(500).json({ error: 'An error occurred while processing your subscription.' });
    }
};

module.exports.successfullyUnsubscribed = async (req, res) => {
    try {
        // TODO: Extract the user's ID from your authentication middleware 
        const userId = // Fetch user ID logic goes here...

        // Retrieve the specific user from the database and get their associated Stripe subscription ID
        const user = await User.findById(userId);
        const stripeSubscriptionId = user.platformSubscription.stripeSubscriptionId;

        try {
            await stripe.subscriptions.del(stripeSubscriptionId);

            // Update the user's subscription status in the database
            user.platformSubscriptionStatus = 'canceled';
            await user.save();

            res.json({ status: 'unsubscribed' });
        } catch (err) {
            console.error("Error cancelling Stripe subscription:", err);
            res.status(500).json({ error: 'Failed to cancel subscription' });
        }
    } catch (err) {
        console.error("Error handling unsubscription:", err);
        res.status(500).json({ error: 'An error occurred while processing your unsubscription.' });
    }
};
