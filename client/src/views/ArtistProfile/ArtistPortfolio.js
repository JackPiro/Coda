import React from 'react'
import TopSupporterCard from '../../components/TopSupporterCard/TopSupporterCard';

const ArtistPortfolio = () => {
    return (
        <div className='mt-6 mx-4 flex'>
            <div id='top-supporters' className='flex space-x-8 w-3/4'>
                <TopSupporterCard />
                <TopSupporterCard />
                <TopSupporterCard />
            </div>
            <div className='w-1/4 space-y-2'>
                <p className='block font-bold'>Your Loyalty Points</p>
                <p className='font-bold text-2xl'>0.0</p>
                <button className='p-1 px-2 border-2 border-white rounded-full opacity-60 hover:opacity-80'>exchange</button>
            </div>
        </div>
    )
}

export default ArtistPortfolio;
