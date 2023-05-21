import React from 'react';
import { Link } from 'react-router-dom';

const ProfileHeader = () => {

    const user = JSON.parse(localStorage.getItem('user'));

    
    return (
        <div className="h-56 p-6 text-white bg-gray-800 -ml-8 -mt-6 pl-20">
            <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                    <img 
                        src= ''
                        alt= ''
                        className="object-cover w-24 h-24 border-2 border-gray-600 rounded-full"
                    />
                </div>
                <div className=''>
                    <h2 className="text-3xl font-bold ">{'user.username'}</h2>
                    <div className='flex'>
                        <p className="text-sm"> Supporters: {'user.supporters.length'} @ </p>
                        <p className="text-sm"> Supporting: {'user.supporting.length'} @ </p>
                        <p className="text-sm"> Circles: {'user.circles.length'} @ </p>
                    </div>
                </div>
            </div>
            {
                    user && user.role === 'artist' ? <Link className='w-16 h-16 p-3 m-3 bg-blue-600 rounded-full top-3 right-3' to={'/UploadMusic'}>+ Music</Link> : null
            }
        </div>
    )
}

export default ProfileHeader;
