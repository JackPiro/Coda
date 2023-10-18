import React, { useState } from 'react';

function SongCardTwo({ title, artist, imageUrl }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className={`relative p-4 ${isHovered ? 'bg-opacity-10' : 'bg-opacity-100'} transition-all duration-300`} 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ width: '200px' }}
        >
            <img src={imageUrl} alt="Music Cover" className="w-full h-48 object-cover rounded-md mb-2" />
            <div className="text-white">
                <span className="block text-sm font-medium">{title}</span>
                <span className="block text-xs">{artist}</span>
            </div>
        </div>
    );
}

export default SongCardTwo;
