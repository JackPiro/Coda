import React from 'react';
import NoSearchNav from '../../components/TopNavBar/NoSearchNav';
import SideNavBar from '../../components/SideNavBar/SideNavBar';
import BarPlay from '../../components/BarPlay/BarPlay';
import LineSongDisplay from '../../components/LineSongDisplay/LineSongDisplay';

const AlbumDetailTwo = () => {
    return (
        <div>
            <div className='flex bg-gradient-to-t from-[#0E121A] from-80% to-[#336dff3b]'>
            <div className='fixed w-48 h-screen'>
                <SideNavBar />
            </div>
            <div className='flex-grow ml-48 overflow-x-hidden'>
                <NoSearchNav />
                <div>
                <div class="min-h-screen flex flex-col items-center justify-center">
                <div class="relative max-w-xl w-full h-36 bg-white rounded-lg shadow-lg mb-32">
                    <div class="absolute inset-0 w-full rounded-lg overflow-hidden bg-red-200">
                        <img src="https://images.unsplash.com/photo-1500099817043-86d46000d58f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&h=250&q=80" alt="" />
                        <div class="absolute inset-0 backdrop backdrop-blur-10 bg-gradient-to-b from-transparent to-black">
                        </div>
                    </div>
                    <div class="absolute flex space-x-6 transform translate-x-6 translate-y-8">
                        <div class="w-36 h-36 rounded-lg shadow-lg overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1543794327-59a91fb815d1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80" alt="" />
                        </div>
                        <div class="text-white pt-12">
                            <h3 class="font-bold">Album</h3>
                            <div class="text-sm opacity-60">Super Interpret</div>
                            <div class="mt-8 text-gray-400">
                                <div class="flex items-center space-x-2 text-xs">
                                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
                                    <span>Easy listening</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="max-w-xl bg-[#181C25] rounded-lg shadow-lg overflow-hidden">
                    <div class="relative">
                        <img
                            src="https://images.unsplash.com/photo-1500099817043-86d46000d58f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&h=250&q=80"
                            class="object-cover" />
                        <div class="absolute p-4 inset-0 flex flex-col justify-end bg-gradient-to-b from-transparent to-gray-900 backdrop backdrop-blur-5 text-white">
                            <h3 class="font-bold">Super Artist</h3>
                            <span class="opacity-70">Albumtitle</span>
                        </div>
                    </div>
                    <div>
                        <div class="relative h-1 bg-gray-200">
                            <div class="absolute h-full w-1/2 bg-green-500 flex items-center justify-end">
                                <div class="rounded-full w-3 h-3 bg-white shadow"></div>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-between text-xs font-semibold text-gray-500 px-4 py-2">
                        <div>
                            1:50
                        </div>
                        <div class="flex space-x-3 p-2">
                            <button class="focus:outline-none">
                                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line></svg>
                            </button>
                            <button class="rounded-full w-8 h-8 flex items-center justify-center pl-0.5 ring-2 ring-gray-100 focus:outline-none">
                                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                            </button>
                            <button class="focus:outline-none">
                                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line></svg>
                            </button>
                        </div>
                        <div>
                            3:00
                        </div>
                    </div>
                    <div class="text-xs sm:text-base divide-y border-t cursor-default">
                        <LineSongDisplay />
                        <LineSongDisplay />

                    </div>
                </div>
            </div>
                </div>
            </div>
            <BarPlay />
        </div>
            
        </div>
    )
}

export default AlbumDetailTwo;


