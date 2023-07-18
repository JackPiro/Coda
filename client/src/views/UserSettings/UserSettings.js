import React from 'react'
import SideNavBar from '../../components/SideNavBar/SideNavBar'
import NoSearchNav from '../../components/TopNavBar/NoSearchNav'


{/* <div className='fixed w-48 h-screen'>
                <SideNavBar />
            </div>
            <div className='flex-grow ml-48 overflow-x-hidden'>
                <NoSearchNav /> */}

export default function UserSettings() {
    return (
        <div class=" min-h-screen bg-gradient-to-t from-[#0E121A] from-80% to-[#336dff3b]">
            <div className='fixed w-48 h-full'>
                <SideNavBar />
            </div>
            <div class='container mx-auto'> 
            <div className='ml-5'>
                <div className='ml-36'>
                    <NoSearchNav />
                </div>
            </div>
                <div class=" ml-96 w-full max-w-2xl p-6">
                
                    <h2 class="text-2xl">Account Setting</h2>
                    <form class="mt-6 border-t border-gray-400 pt-4" action="your-backend-endpoint" method="POST">
                        {/* <!-- Artist Name --> */}
                        <div class='w-full md:w-full px-3 mb-6'>
                            <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Artist Name</label>
                            <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' placeholder='Enter Artist Name' />
                        </div>

                        {/* <!-- Username --> */}
                        <div class='w-full md:w-full px-3 mb-6'>
                            <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Username</label>
                            <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' placeholder='Enter Username' />
                        </div>

                        {/* <!-- Bio --> */}
                        <div class='w-full md:w-full px-3 mb-6'>
                            <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Bio</label>
                            <textarea class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' placeholder='Enter Bio'></textarea>
                        </div>

                        {/* <!-- Social Media Links --> */}
                        <div class='w-full md:w-full px-3 mb-6'>
                            <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Social Media Links</label>
                            <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' placeholder='Enter Social Media Links' />
                        </div>

                        {/* <!-- Manage Followers --> */}
                        <div class='w-full md:w-full px-3 mb-6'>
                            <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Manage Followers</label>
                            <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' placeholder='Manage Followers' />
                        </div>

                        {/* <!-- Notifications --> */}
                        <div class='w-full md:w-full px-3 mb-6'>
                            <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Notifications</label>
                            <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' placeholder='Manage Notifications' />
                        </div>

                        {/* <!-- Save Changes Button --> */}
                        <div class="flex justify-end">
                            <button class="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3" type="submit">save changes</button>
                        </div>

                        {/* <!-- Logout Button --> */}
                        <div class="flex justify-end mt-4">
                            <button class="appearance-none bg-red-500 text-white px-2 py-1 shadow-sm border border-red-600 rounded-md mr-3" type="button">Logout</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
