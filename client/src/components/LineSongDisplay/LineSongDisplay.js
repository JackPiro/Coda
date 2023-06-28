import React from 'react'

const LineSongDisplay = () => {
    return (
        <div class="flex items-center space-x-3 bg-[#181C25]">
            <button class="p-3 hover:bg-[#336CFF] group focus:outline-none">
                <svg class="w-4 h-4 group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            </button>
            <div class="flex-1">
                Artist - Title
            </div>
            <div class="text-xs text-gray-400">
                2:58
            </div>
            <button class="focus:outline-none pr-4 group">
                <svg class="w-4 h-4 group-hover:bg-[#336CFF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5"/></svg>
            </button>
        </div>
    )
}

export default LineSongDisplay;
