import React, { useState } from 'react';

const SubscriptionPaywall = ({isOpen, setIsOpen}) => {

    return (
        <div>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="fixed inset-0 bg-black opacity-10"></div>
                    <div className="bg-white p-6 rounded shadow-lg z-10">
                        <h1 className="text-xl font-bold mb-4">Confirm Purchase</h1>
                        <p className="text-gray-700 mb-4">The price is: $20.00</p>
                        <button
                            className="py-2 px-4 bg-blue-500 text-white rounded shadow"
                            onClick={() => alert('Going to payment')}
                        >
                            Go to Payment
                        </button>
                        <button 
                            className="py-2 px-4 bg-red-500 text-white rounded shadow mt-4"
                            onClick={() => setIsOpen(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SubscriptionPaywall;
