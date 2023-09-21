import React from 'react'
import DirectToStripeCheckout from '../../components/Stripe/DirectToStripeCheckout';

import axios from 'axios';
import { Radio } from '@mui/material';
import { useState } from 'react';


const SubscribeView = () => {

    const [isChecked, setIsChecked] = useState(false);

    const handleButtonClick = () => {
        if (isChecked) {
            alert('Checkbox is checked!');
        } else {
            alert('Please check the checkbox before proceeding.');
        }
    };

    return (
        <div className='min-w-screen min-h-screen bg-gradient-to-r from-[#0E121A] to-indigo-700 flex items-center justify-center px-5 py-5'>
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-gray-800 opacity-75 w-full h-full"></div>
                <div className="absolute bg-gray-900 rounded p-8 w-96 h-4/5 z-10 overflow-y-auto">
                    <h2 className="text-2xl mb-4">Almost there!</h2>
                    <p className="mb-4">In order to fairly compensate our artists we charge a $15.00 a month subscription</p>
                    <div className="mb-4">
                        <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded mb-4 w-full" onClick={() => alert('Starting your 30-day free trial...')}>Try for Free for 30 Days</button>
                    </div>
                    <div className="mb-4">
                        <DirectToStripeCheckout />
                    </div>
                    <p>or</p>
                    <div className="mb-4">
                        <input 
                            type="checkbox" 
                            id="confirmationCheckbox" 
                            checked={isChecked}
                            onChange={(e) => setIsChecked(e.target.checked)}
                        />
                        <label htmlFor="confirmationCheckbox" className="ml-2">I hate all music and the artists that make it</label>
                    </div>
                    <button onClick={handleButtonClick} className="text-gray-500 rounded-md outline px-1">
                        maybe later
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SubscribeView;