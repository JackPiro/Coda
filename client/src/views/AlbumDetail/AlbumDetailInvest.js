import React from 'react';
import NoSearchNav from '../../components/TopNavBar/NoSearchNav';
import SideNavBar from '../../components/SideNavBar/SideNavBar';
import Playbar from '../../components/Playbar/Playbar';
import LineSongDisplay from '../../components/LineSongDisplay/LineSongDisplay';
import CreditsCard from '../../components/ArtistCards/CreditsCard';
import { useState } from 'react';

const AlbumDetailInvest = () => {
    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(0);
    const price = 5.00;

    return (
        <div>
            <div className='flex bg-gradient-to-t from-[#0E121A] from-80% to-[#336dff3b]'>
                <div className='fixed w-48 h-screen'>
                    <SideNavBar />


                </div>
                <div className='flex-grow ml-48 overflow-x-hidden'>
                    <NoSearchNav />
                    <div>
                        <div class="min-h-screen p-5 flex space-x-5  justify-center ">
                            <div className=' w-3/5 min-h-screen flex flex-col space-y-3'>
                                <h1 className='font-bold text-3xl text-left'>Artist Name</h1>
                                <p className='text-left text-slate-700 text-xs'>Credited</p>
                                <div className='flex space-x-3 overflow-x-scroll overflow-y-hidden scrollable-x pb-3'>
                                    <CreditsCard />
                                    <CreditsCard />
                                    <CreditsCard />
                                    <CreditsCard />
                                </div>
                                <p className='text-left'>
                                "Till It Hurts" is a song by Dutch electronic trio Yellow Claw, featuring vocals performed by Dutch singer Ayden (stage name of Sanne Veerbeek). It was released digitally as a single in November 2014 through Spinnin' Records
                                </p>
                                <div className='flex justify-start space-x-8'>
                                    <button className="hover:scale-110 text-white transform">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-play-circle-fill" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                                        </svg>
                                    </button>
                                    <button className="hover:scale-110 text-white transform ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                            <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                        </svg>
                                    </button>
                                    <button className="hover:scale-110 text-white transform">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="scrollable-section max-h-72 overflow-y-scroll pr-6 ">
                                    <LineSongDisplay />
                                    <LineSongDisplay />
                                    <LineSongDisplay />
                                    <LineSongDisplay />
                                    <LineSongDisplay />
                                    <LineSongDisplay />
                                    <LineSongDisplay />
                                    <LineSongDisplay />
                                    <LineSongDisplay />



                                </div>
                            </div>
                            <div className=' w-2/5 flex flex-col space-y-3'>
                                <img src="https://i.pinimg.com/474x/d5/31/be/d531be739b1e807c7043a7afdc713c12.jpg" className="rounded-lg" alt="" />
                                <div className='bg-gray-800 flex justify-between rounded-md p-2 px-4'>
                                    <p>Price Per</p>
                                    <p>$5.00</p>
                                </div>
                                <div className='bg-gray-800 flex justify-between rounded-md p-2 px-4'>
                                    <p>Offer: Equity</p>
                                    <p>0.001%</p>
                                </div>
                                <div className='bg-[#336CFF] flex items-center justify-between rounded-md p-2 px-4'>
                                    <p className='text-white'>Total: $ { (count * price).toFixed(2) }</p>
                                        <button>
                                            Confirm Purchase
                                        </button>
                                    <div className=' flex flex-col items-center justify-center'>
                                        <div onClick={() => setCount(count + 1)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            </svg>
                                        </div>
                                        <span className='text-xs'>{count}</span>
                                        <div onClick={() => count > 0 ? setCount(count - 1) : null}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Playbar />
            </div>
        </div>
    )
}

export default AlbumDetailInvest;


