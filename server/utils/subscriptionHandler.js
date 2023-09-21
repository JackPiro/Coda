const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST_KEY);
const User = require('../models/User');

//http://localhost:3000/subscription-success?session_id={CHECKOUT_SESSION_ID}',

module.exports.subscribe = async (req, res) => {
    try {
        console.log("Received userId in body:", req.body.userId);
        const userId = req.body.userId;

        if (!userId) {
            throw new Error("User ID is required, no userId found");
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [{
                price: process.env.STRIPE_STANDARD_SUBSCRIPTION_PRICE_ID_TEST,
                quantity: 1,
            }],
            mode: 'subscription',
            success_url: 'http://localhost:3000/loading?session_id={CHECKOUT_SESSION_ID}',
            cancel_url: 'https://yourdomain.com/cancel',  // Replace with your actual website URL
            metadata: {
                userId: userId.toString()
            }
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
            const userId = session.metadata.userId;

            // Retrieve the user from the database, update their subscription status, and store Stripe's subscription ID
            const user = await User.findById(userId);
            user.platformSubscription.status = 'active';
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
        const userId = session.metadata.userId;

        // Retrieve the specific user from the database and get their associated Stripe subscription ID
        const user = await User.findById(userId);
        const stripeSubscriptionId = user.platformSubscription.stripeSubscriptionId;

        try {
            await stripe.subscriptions.del(stripeSubscriptionId);

            // Update the user's subscription status in the database
            user.platformSubscription.status = 'canceled';
            await user.save();

            res.json({ status: 'canceled' });
        } catch (err) {
            console.error("Error cancelling Stripe subscription:", err);
            res.status(500).json({ error: 'Failed to cancel subscription' });
        }
    } catch (err) {
        console.error("Error handling unsubscription:", err);
        res.status(500).json({ error: 'An error occurred while processing your unsubscription.' });
    }
};

module.exports.stripeWebhook = async (req, res) => {
    console.log("Webhook triggered!");

    const sig = req.headers['stripe-signature'];
    let event;

    try {
        event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SIGNING_SECRET);
        console.log("Received webhook event:", event.type);
    } catch (err) {
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle the event
    switch (event.type) {
        case 'customer.subscription.created':
            const customerSubscriptionCreated = event.data.object;
            // Update user status in DB
            // Notify user of successful subscription
            console.log(`Subscription created for customer ${customerSubscriptionCreated.customer}`);
            break;
        case 'customer.subscription.deleted':
            const customerSubscriptionDeleted = event.data.object;
            // Update user status in DB
            // Restrict user access to subscription-only resources
            // Notify user of subscription cancellation
            console.log(`Subscription deleted for customer ${customerSubscriptionDeleted.customer}`);
            break;
        // ... handle other event types
        default:
            console.log(`Unhandled event type ${event.type}`);
    }
    

    // Return a 200 response to acknowledge receipt of the event
    res.json({ received: true });
}


/* 
subscribe: This function initiates a Stripe Checkout session for a user to subscribe. Once the user completes this process and pays, Stripe will notify your server through the webhook. Thus, even if you direct a user to a successful page, you would still want to ensure through the webhook that the subscription was indeed created successfully on Stripe's end.

successfullySubscribed: This is a callback from the successful Stripe Checkout session where you directly verify the subscription's success. Note that this will happen before the webhook notification, so while you're marking the user's subscription as active here, Stripe will still send a customer.subscription.created event to your webhook.

successfullyUnsubscribed: This function unsubscribes a user from the platform by communicating with Stripe to delete the subscription. Again, once that's done, Stripe will notify your server that a subscription has been deleted using the customer.subscription.deleted event through your webhook.

Regarding your webhook's stripeWebhook function:

When you handle the customer.subscription.created event in the webhook, you might want to perform additional actions (e.g., sending a welcome email, or logging for analytics). Since your successfullySubscribed function already updates the user's subscription status, you don't need to repeat this in the webhook.

Similarly, for the customer.subscription.deleted event, you could log the event, notify the user, or perform any other secondary actions.

Any TODO comments are just placeholders. They remind you that you might have additional business logic to implement based on the Stripe event.


ABOUT THE WEBHOOKS
Refactor the Middleware: Remove the bodyParser.raw() line from the stripeWebhook function and ensure it's placed as middleware in your routes, as previously mentioned.

Handle the Webhook Events: In the stripeWebhook switch statement, for the events like customer.subscription.created, you can handle any additional logic that isn't covered in your other functions.

Error Handling and Logging: Ensure that your webhook and other functions have proper error handling and logging. This will be crucial to debug any issues that might arise.

Secure Your Webhook: You've done this by verifying the Stripe signature, which is great. This ensures that the POST request to your webhook route is genuinely from Stripe.

Testing: Before deploying, use Stripe's dashboard or the Stripe CLI to send test webhook events to ensure your endpoint processes them correctly.

Concurrency Considerations: Sometimes, webhooks can be delayed or come out of order. Make sure your logic can handle these edge cases (e.g., if Stripe tells you a subscription is deleted but the user just re-subscribed). Properly updating and checking the status in your database can help manage these situations.

*/