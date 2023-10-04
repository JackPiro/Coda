import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SubscriptionPaywall from '../SubscriptionPaywall/SubscriptionPaywall';
import NavWithSettings from '../TopNavBar/NavWithSettings';

import jwt_decode from "jwt-decode";
import axios from 'axios';


const YourProfileHeader = ({ active, setActive }) => {

    let decodedToken = null;

    const user = JSON.parse(localStorage.getItem('user') || '{}');

    if (user && user.userToken) {
        try {
            decodedToken = jwt_decode(user.userToken);
        } catch (error) {
            console.error("Error decoding the token:", error);
        }
    } else {
        console.warn("No user or user token found in local storage.");
    }

    useEffect(() => {
        axios.get('http://localhost:5001/api/users/')
    }, [])

    return (
        <div className='bg-gradient-to-t from-[#0E121A] from-80% to-[#336dff3b]'>
            <div className=" top-0 h-64 w-full mb-16 text-white flex-grow">
                <NavWithSettings />
                <div className="flex items-center mt-4 space-x-12 p-4">
                    {/* <img className="h-16 w-16 ml-6 rounded-full mr-4" src={profileImg} alt="Artist Profile" /> */}
                    <div class="w-36 h-36 ml-20 rounded-lg shadow-lg overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1543794327-59a91fb815d1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80" alt="" />
                        </div>
                    <div>
                        <h2 className="text-2xl font-bold">{decodedToken.firstName.toUpperCase()}</h2>
                        <p className="text-sm">(10) Supporters • (10) Circles • (10) Supporting</p>
                    </div>
                    { decodedToken.role === 'artist' ?
                        <Link to={'/add-music'} className="p-2 border-2 border-white rounded-full opacity-60 hover:opacity-80">
                                + Music
                        </Link> :
                        null
                    }
                </div>
            </div>
            <div className=" flex flex-grow ">
                <button
                    onClick={() => setActive("portfolio")}
                    className={`py-1 px-4 w-1/2 text-sm rounded-lg shadow-md text-white ${active === "portfolio" ? "bg-[#336CFF]" : "bg-[#181C25]"}`}
                >
                    Your Collection
                </button>
                <button
                    onClick={() => setActive("discography")}
                    className={`py-1 px-4 w-1/2 text-sm rounded-lg shadow-md text-white ${active === "discography" ? "bg-[#336CFF]" : "bg-[#181C25]"}`}
                >
                    Your Music
                </button>
            </div>
        </div>
    )
}

{
        // user && user.role === 'artist' ? <Link className='w-16 h-16 p-3 m-3 bg-blue-600 rounded-full top-3 right-3' to={'/UploadMusic'}>+ Music</Link> : null
}
export default YourProfileHeader;
