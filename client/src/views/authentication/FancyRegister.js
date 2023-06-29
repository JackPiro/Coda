import React from 'react';
import '../../components/shared/button/newButton.css'
import PersonIcon from '../../assets/Icons/PersonIcon';
import { Link } from 'react-router-dom'


const FancyRegister = () => {
    return (
        <div>
            <div class="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
                <div class="bg-[#181C25] text-white rounded-3xl shadow-xl w-full overflow-hidden">
                    <div class="md:flex w-full">
                        <div class="hidden md:block w-1/2 bg-[#336CFF] py-10 px-10">
                            <PersonIcon />
                        </div>
                        <div class="w-full md:w-1/2 py-10 px-5 md:px-10">
                            <div class="text-center mb-10">
                                <h1 class="font-bold text-4xl text-white">Welcome to <span className='text-[#336CFF]'>Coda</span></h1>
                                {/* <h3 class="font-bold text-lg text-white">REGISTER</h3> */}
                                <p>We're Glad You Made It  :)</p>
                            </div>
                            <div>
                                <div class="flex -mx-3">
                                    <div class="w-1/2 px-3 mb-5">
                                        <label for="" class="text-xs font-semibold px-1">First name</label>
                                        <div class="flex">
                                            <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-white text-lg"></i></div>
                                            <input type="text" class="w-full bg-[#181C25] -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="William" />
                                        </div>
                                    </div>
                                    <div class="w-1/2 px-3 mb-5">
                                        <label for="" class="text-xs font-semibold px-1">Last name</label>
                                        <div class="flex">
                                            <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                            <input type="text" class="w-full -ml-10 pl-10 pr-3 bg-[#181C25] py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Defroe" />
                                        </div>
                                    </div>
                                </div>
                                <div class="flex -mx-3">
                                    <div class="w-full px-3 mb-5">
                                        <label for="" class="text-xs font-semibold px-1">Email</label>
                                        <div class="flex">
                                            <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                            <input type="email" class="w-full -ml-10 pl-10 pr-3 py-2 bg-[#181C25] rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="williamdefroe@getf$*kinexcited.com" />
                                        </div>
                                    </div>
                                </div>
                                <div class="flex -mx-3">
                                    <div class="w-full px-3 mb-12">
                                        <label for="" class="text-xs font-semibold px-1">Password</label>
                                        <div class="flex">
                                            <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                            <input type="password" class="w-full -ml-10 pl-10 pr-3 py-2 bg-[#181C25] rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************" />
                                        </div>
                                    </div>
                                </div>
                                <div class="flex -mx-3">
                                    <div class="w-full px-3 mb-5">
                                        <button class="block w-full px-2 py-2 max-w-xs mx-auto register-button text-white rounded-lg font-semibold text-sm">See you Inside</button>
                                    </div>
                                </div>
                            </div>
                            <Link className="block mt-5 text-center text-blue-500 hover:text-blue-800" to={'/login'}>or login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FancyRegister;
