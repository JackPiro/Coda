import React from 'react'
import loader from '../../assets/sampleStuff/loader.gif';


const LoadingPage = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full'>
            <div className='bg-[#181C25] p-5 m-10 h-full rounded-lg'>
                <h1 className='text-3xl mb-5 mt-5'>Your Profile Is Being Created</h1>
                <img src={loader} alt='loading...'/>
            </div>
        </div>
    )
}

export default LoadingPage;
