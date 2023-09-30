import React, { useState } from 'react';
import SongCard from '../SongCard/SongCard';
import ArtistCard from '../ArtistCards/ArtistCard';

const CardCarousel = ({ artistList }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex(Math.min(currentIndex + 4, artistList.length - 1));
    };

    const handlePrevious = () => {
        setCurrentIndex(Math.max(currentIndex - 4, 0));
    };

    return (
        <div className="flex items-center justify-between m-10 space-x-9 carousel">
            <button onClick={handlePrevious} className='p-2 rounded hover:bg-gray-700'>←</button>
            <div className="flex space-x-9 carousel-cards">
                {artistList.slice(currentIndex, currentIndex + 4).map((song) => (
                    <ArtistCard key={song._id} song={song} />
                ))}
            </div>
            <button onClick={handleNext} className='p-2 rounded hover:bg-gray-700'>→</button>
        </div>
    );
}

export default CardCarousel;

