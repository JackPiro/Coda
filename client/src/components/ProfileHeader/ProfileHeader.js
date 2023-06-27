import React from 'react';
import { Link } from 'react-router-dom';
import TopNavBar from '../TopNavBar/TopNavBar';


const ProfileHeader = () => {
    const profileImg = ''
    
    const user = JSON.parse(localStorage.getItem('user'));

    
    return (
        <div className="fixed top-0 h-64 w-full bg-sky-950 text-white">
            <TopNavBar className='fixed w-full'/>
            <div className="flex items-center p-4">
                <img className="h-16 w-16 rounded-full mr-4" src={profileImg} alt="Artist Profile" />
                <div>
                    <h2 className="text-2xl font-bold">Artist Name</h2>
                    <p className="text-sm">10 Supporters • 10 Groups • 10 Supporting</p>
                </div>
            </div>
        </div>
    )
}

{
        // user && user.role === 'artist' ? <Link className='w-16 h-16 p-3 m-3 bg-blue-600 rounded-full top-3 right-3' to={'/UploadMusic'}>+ Music</Link> : null
}
export default ProfileHeader;
