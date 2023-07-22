import React from 'react'
import MarketCard from '../../components/MarketCards/LoyaltyPointsCard'
import PlayBar from '../../components/Playbar/Playbar'
import SideNavBar from '../../components/SideNavBar/SideNavBar'
import NoSearchNav from '../../components/TopNavBar/NoSearchNav'

export default function Market() {
    return (
        <div className='flex bg-gradient-to-t from-[#0E121A] from-80% to-[#336dff3b]'>
            <div className='fixed w-48 h-screen'>
                <SideNavBar />
            </div>
            <div className='flex-grow ml-48 overflow-x-hidden'>
                <NoSearchNav />
                <div>
                    <h1 className='block m-5 ml-8 text-2xl text-left'>Welcome</h1>
                    <div className="flex flex-row flex-wrap justify-center m-3">
                        <MarketCard />
                    </div>
                </div>
            </div>
            <PlayBar />
        </div>
    )
}
