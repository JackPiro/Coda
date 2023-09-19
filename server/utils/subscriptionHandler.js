// transactionController.js

const stripe = require('stripe')(process.env.STRIPE_SECRET);
const User = require('../models/User');

// module.exports.calculateOrderAmount = (items) => {
//   // Replace this constant with a calculation of the order's amount
//   // Calculate the order total on the server to prevent
//   // people from directly manipulating the amount on the client
//     return 1400;
// };

// module.exports.createPaymentIntent = async (req, res) => {
//     const { items } = req.body;

//   // Create a PaymentIntent with the order amount and currency
//     const paymentIntent = await stripe.paymentIntents.create({
//         amount: calculateOrderAmount(items),
//         currency: "usd",
//         automatic_payment_methods: {
//             enabled: true,
//         },
//     });

//     res.send({
//         clientSecret: paymentIntent.client_secret,
//     });
// }

module.exports.subscribe = async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [{
                price: process.env.STRIPE_STANDARD_SUBSCRIPTION_PRICE_ID,
                quantity: 1,
            }],
            mode: 'subscription',
            success_url: 'YOUR_WEBSITE_URL/success?session_id={CHECKOUT_SESSION_ID}',
            cancel_url: 'YOUR_WEBSITE_URL/cancel',
        });

        res.json({ sessionId: session.id });
    } catch (err) {
        res.status(500).json({ error: 'Failed to create checkout session' });
    }
}

module.exports.successfullySubscribed = async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
    
        if (session.mode === 'subscription' && session.payment_status === 'paid') {
            // Retrieve user from your database and update platformSubscriptionStatus
            // Make sure to also store the subscription ID from Stripe, 
            // so you can manage the subscription later (e.g., cancel it)
        }
        
        res.redirect('/some-page-on-your-platform-indicating-success');
    } catch {

    };
}
module.exports.successfullyUnsubscribed = async (req, res) => {
    try {
        // Retrieve user's Stripe subscription ID from your database
        const stripeSubscriptionId = User.platformSubscription.stripeSubscriptionId

        try {
            await stripe.subscriptions.del(stripeSubscriptionId);
            // Update the user's platformSubscriptionStatus in your database to 'canceled'
            res.json({ status: 'unsubscribed' });
        } catch (err) {
            res.status(500).json({ error: 'Failed to cancel subscription' });
        }
    } catch {

    }
}