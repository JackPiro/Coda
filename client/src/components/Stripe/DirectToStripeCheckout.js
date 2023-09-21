import React from 'react'
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import jwt_decode from "jwt-decode";

const STRIPE_PUBLIC_TEST_KEY = 'pk_test_51NTWkiI9bg9V8KasCINtLK3d456OnlVpHxdJoa5wYOTChCFLCj1tMN0jHfBkkNjuUtHkPjLkGSAds6v4nHVNxH4M00QhZGT9eA';
const stripePromise = loadStripe(STRIPE_PUBLIC_TEST_KEY);

const DirectToStripeCheckout = () => {

    const initiateSubscription = async () => {
        try {
            const userData = JSON.parse(localStorage.getItem('user'));
            if (!userData || !userData.userToken) {
                throw new Error("User not logged in");
            }
            
            const decodedToken = jwt_decode(userData.userToken);
            console.log("Decoded Token:", decodedToken);
            const userId = decodedToken.id;  // Assuming the decoded token contains a userId field
            console.log("Sending userId:", userId);

            const response = await axios.post('http://localhost:5001/api/subscription/subscribe', {
                userId: userId
            });
    
            const { sessionId } = response.data;
            const stripe = await stripePromise;
            await stripe.redirectToCheckout({ sessionId });
    
        } catch (error) {
            console.error("Failed to initiate subscription:", error);
            // You can add a notification or alert here to inform the user about the error
        }
    };

    return (
        <div className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mb-4 w-full'>
            <button onClick={initiateSubscription}>Subscribe</button>
        </div>
    );
}

export default DirectToStripeCheckout;
