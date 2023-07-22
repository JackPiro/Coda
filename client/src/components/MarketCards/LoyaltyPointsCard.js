import React from 'react'

export default function LoyaltyPointsCard() {
    return (
        <div className="shadow-lg rounded-lg p-3 w-72  bg-[#181c25]">
            <div className="group relative">
                <img src="https://i.pinimg.com/474x/d5/31/be/d531be739b1e807c7043a7afdc713c12.jpg" className="w-full block rounded-lg object-cover h-44" alt="" />
                <div className="absolute p-2 bg-black rounded bg-opacity-0 group-hover:bg-opacity-20 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly"></div>
            </div>
            <div className="p-2 pb-3 text-left">
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="text-neutral-300 font-bold text-lg truncate"> Artist Name </h3>
                        <p className="text-gray-400 text-base truncate">By <span className='hover:underline hover:text-white'>Esthera Jackson</span></p>
                    </div>
                    <p className="text-white font-bold text-base truncate">300k LP</p>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-brand-500"> List Price: $305 <span>DAI</span></p>
                <button href="" className="linear rounded-[20px] bg-brand-900 px-4 py-2 text-base font-medium text-white bg-blue-600 transition duration-100 hover:bg-blue-500 active:bg-brand-700">Buy</button>
            </div>
        </div>
    )
};
