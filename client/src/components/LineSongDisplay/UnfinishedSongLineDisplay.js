import React from 'react'
import { useNavigate } from 'react-router-dom';


const UnfinishedSongLineDisplay = () => {
    const navigate = useNavigate();

    return (
        <div className='hover:bg-[#202530] hover:rounded-md border-b border-[#202530]'>
            <div class="flex flex-grow py-2 mx-3 items-center space-x-3  ">
                <div className="flex items-center ml-6">
                    <img src="https://images.unsplash.com/photo-1531316282956-d38457be0993?ixid=MXwxMjA3fDB8MHxwaG90by1wYWgelFhx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" alt="cover art" className="w-10 h-10 rounded-md mr-2"/>
                    <div>
                        <span className="text-white block">Song Name</span>
                        <span className="text-gray-400">Artist Name</span>
                    </div>
                </div>
                <button class="p-2 m-1 hover:bg-[#336CFF] group focus:outline-none rounded-full">
                    <svg class="w-4 h-4 group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </button>
                <div class="flex-1">
                    
                </div>
                <div class="text-xs text-gray-400">
                    2:58
                </div>
                <button class="focus:outline-none pr-4 group">
                    <svg class="w-6 h-6 group-hover:bg-[#336CFF] rounded-full p-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5"/></svg>
                </button>
            </div>
            <div className='flex items-center mx-3'>
                <p className='text-left p-3 w-2/3'>"Till It Hurts" is a song by Dutch electronic trio Yellow Claw, featuring vocals performed by Dutch singer Ayden (stage name of Sanne Veerbeek). It was released digitally as a single in November 2014 through Spinnin' Records"</p>
                <div className='w-1/3 justify-center flex align-middle'>
                    <button onClick={() => navigate("/suggestion")} className='bg-[#336CFF] rounded-md h-8 px-2 py-1 text-sm'>leave a suggestion</button>
                </div>
            </div>
        </div>
    )
}

export default UnfinishedSongLineDisplay;