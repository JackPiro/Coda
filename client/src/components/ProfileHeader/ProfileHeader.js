import React from 'react';
import { Link } from 'react-router-dom';
import NoSearchNav from '../TopNavBar/NoSearchNav';
import { useState } from 'react';
import SubscriptionPaywall from '../SubscriptionPaywall/SubscriptionPaywall';



const ProfileHeader = ({ artistId, active, setActive }) => {
    // const [isOpen, setIsOpen] = useState(true);
    const user = JSON.parse(localStorage.getItem('user'));


    return (
        <div>
            <div className="top-0 h-64 w-full mb-16 text-white flex-grow">
                <NoSearchNav />
                <div className="flex items-center mt-4 space-x-12 p-4">
                    {/* <img className="h-16 w-16 ml-6 rounded-full mr-4" src={profileImg} alt="Artist Profile" /> */}
                    <div class="w-36 h-36 ml-20 rounded-lg shadow-lg overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1543794327-59a91fb815d1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80" alt="" />
                        </div>
                    <div>
                        <h2 className="text-2xl font-bold">Artist Name</h2>
                        <p className="text-sm">(10) Supporters • (10) Circles • (10) Supporting</p>
                    </div>
                        <button className="p-2 border-2 border-white rounded-full opacity-60 hover:opacity-80">
                            Join Circle
                        </button>
                </div>
            </div>
            <div className=" flex flex-grow ">
                <button
                    onClick={() => setActive("portfolio")}
                    className={`py-1 px-4 w-1/2 text-sm rounded-lg shadow-md text-white ${active === "portfolio" ? "bg-[#336CFF]" : "bg-[#181C25]"}`}
                >
                    Portfolio
                </button>
                <button
                    onClick={() => setActive("discography")}
                    className={`py-1 px-4 w-1/2 text-sm rounded-lg shadow-md text-white ${active === "discography" ? "bg-[#336CFF]" : "bg-[#181C25]"}`}
                >
                    Discography
                </button>
            </div>
            {/* {isOpen === true ? <SubscriptionPaywall isOpen={isOpen} setIsOpen={setIsOpen} /> : null} */}
            <div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}


{
        // user && user.role === 'artist' ? <Link className='w-16 h-16 p-3 m-3 bg-blue-600 rounded-full top-3 right-3' to={'/UploadMusic'}>+ Music</Link> : null
}
export default ProfileHeader;
