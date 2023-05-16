import React from 'react';
import SideNavBar from '../../components/SideNavBar/SideNavBar';
import TopNavBar from '../../components/TopNavBar/TopNavBar';
import { Link, useNavigate } from 'react-router-dom'

import authService from '../../services/authService'

import jwt_decode from "jwt-decode";

const RealProfile = () => {

    const user = JSON.parse(localStorage.getItem('user'));

    const navigate = useNavigate();

    const handleLogout = () => {
        console.log('test')
        try {
            authService.logout();
            navigate('/login');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="flex flex-row">
            <SideNavBar />
            <div className='w-screen'>
                <TopNavBar />
                {
                    user && user.role === 'artist' ? <Link className='rounded-lg bg-blue-600 top-3 right-3 h-16 w-16 m-3' to={'/UploadMusic'}>Publish Music</Link> : null
                }
                <div className="p-4 rounded shadow-md w-80 align-middle outline outline-white">
                    <h1 className="text-2xl mb-4 text-center">Your Profile</h1>
                    
                    <form>
                        <label className="block mb-2">Username</label>
                        <input className="mb-4 w-full px-3 py-2 border rounded" type="text" placeholder="Username" />

                        <label className="block mb-2">Email</label>
                        <input className="mb-4 w-full px-3 py-2 border rounded" type="email" placeholder="Email Address" />

                        <button className="w-full p-2 mb-4 bg-blue-600 text-white rounded">Update Profile</button>
                    </form>
                    <button onClick={handleLogout} className="w-full p-2 bg-red-600 text-white rounded">Logout</button>
                </div>
            </div>
        </div>
    );
};

export default RealProfile;
