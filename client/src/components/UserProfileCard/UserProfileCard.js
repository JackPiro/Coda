import React from 'react';

function UserProfileCard({ imageUrl, username, joinDate, userId }) {
    return (
        <div className="bg-black p-4 rounded-lg w-96">
            <div className="flex items-center mb-4">
                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cntraveler.com%2Fgallery%2Fswitzerland-winter-wonderland&psig=AOvVaw2VoxLuHsPe1maGFGPxC3Bu&ust=1697514055269000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKCF6ePS-YEDFQAAAAAdAAAAABAE" alt="User Avatar" className="w-20 h-20 object-cover rounded-md mr-4" />
                <div className="text-white">
                    <h1 className="font-medium text-xl">username</h1>
                    <p className="text-xs mt-1">Joined, January 2022</p>
                </div>
                <button className="ml-auto bg-gray-800 text-white rounded-full px-4 py-1 text-sm">Follow</button>
            </div>
            <div className="bg-gray-800 p-2 rounded-md text-white text-xs">
                273451739429386402384
            </div>
        </div>
    );

    
}

export default UserProfileCard;
