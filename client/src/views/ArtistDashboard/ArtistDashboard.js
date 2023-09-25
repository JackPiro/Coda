import React from 'react';
import NoSearchNav from '../../components/TopNavBar/NoSearchNav';
import SideNavBar from '../../components/SideNavBar/SideNavBar';
import PlayBar from '../../components/Playbar/Playbar';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


function ArtistDashboard() {

    // useEffect(() => {
    //     axios.put("http://localhost:5001/")
    // });

    // const navigate = useNavigate();

    // const navigateToStripe = () => {
    //     navigate(`https://connect.stripe.com/oauth/authorize?response_type=code&client_id=${process.env.STRIPE_CLIENT_ID_TEST}&scope=read_write`);
    // }

    const navigateToStripe = () => {
        const stripeURL = `https://connect.stripe.com/oauth/authorize?response_type=code&client_id=ca_OfxkuzhopDpIUU6ycVww9fHxneDF3AHZ&scope=read_write`;
        window.open(stripeURL, '_self');
        console.log(process.env.REACT_APP_STRIPE_CLIENT_ID_TEST);
    }

    return (
        <div className="min-h-screen">
            <div className='flex bg-gradient-to-t from-[#0E121A] from-80% to-[#336dff3b]'>
                <div className='fixed w-48 h-screen'>
                    <SideNavBar />
                </div>
                <div className='flex-grow ml-48 overflow-x-hidden'>
                    <NoSearchNav />
                    <div>
                        
                        <div className="max-w-7xl mx-auto p-4">
                            <header className="mb-6">
                            <h1 className="text-4xl font-bold">Artist Dashboard</h1>
                            </header>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-[#202530] p-6 rounded-md shadow-md">
                                    <h2 className="text-xl font-semibold mb-4">Streams this Month</h2>
                                    <p className="text-3xl font-bold">250,000</p>
                                </div>

                                <div className="bg-[#202530] p-6 rounded-md shadow-md">
                                    <h2 className="text-xl font-semibold mb-4">Followers</h2>
                                    <p className="text-3xl font-bold">85,000</p>
                                </div>

                                <div className="bg-[#202530] p-6 rounded-md shadow-md">
                                    <h2 className="text-xl font-semibold mb-4">Subscribers</h2>
                                    <p className="text-3xl font-bold">3,500</p>
                                </div>

                                <div className="bg-[#202530] p-6 rounded-md shadow-md">
                                    <h2 className="text-xl font-semibold mb-4">Monthly Earnings</h2>
                                    <p className="text-3xl font-bold">$7,500</p>
                                </div>
                            </div>

                            <button 
                                className='mb-6 p-1 border-2 border-white rounded-full opacity-60 hover:opacity-80' 
                                onClick={navigateToStripe}>
                                    Setup Your Subscription Group
                            </button>

                            <div className="bg-[#202530] p-6 rounded-md shadow-md">
                                <header className="mb-6">
                                    <h2 className="text-2xl font-semibold">Manage Subscription Group</h2>

                                </header>

                                <label>Update Subscription Price:</label>
                                <input type='number' placeholder='$20.00'  className='p-1 mx-3 rounded-md bg-[#181C25]'/>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center space-x-3">
                                            <img src="/path-to-avatar.jpg" alt="Subscriber Name" className="w-10 h-10 rounded-full" />
                                            <div>
                                                <h3 className="font-medium">Subscriber Name</h3>
                                                <p className="text-sm text-gray-500">Username Number</p>
                                            </div>
                                        </div>
                                        <button className="bg-red-500 text-white px-4 py-1 rounded">Remove</button>
                                    </div>
                                    {/* ... Add more subscribers as needed ... */}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <PlayBar />
            </div>
        </div>
    );
}

export default ArtistDashboard;
