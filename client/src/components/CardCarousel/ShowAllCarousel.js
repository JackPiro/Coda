import React, { useState } from 'react';
import SongCard from '../SongCard/SongCard';

const ShowAllCarousel = ({ musicList }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showAll, setShowAll] = useState(false);

    const handleNext = () => {
        setCurrentIndex(Math.min(currentIndex + 4, musicList.length - 1));
    };

    const handlePrevious = () => {
        setCurrentIndex(Math.max(currentIndex - 4, 0));
    };

    const handleShowAll = () => {
        setShowAll(!showAll);
    };

    return (
        <div className="flex flex-col m-10 carousel">
            <div className="self-end">
                <button onClick={handleShowAll} className='p-2 rounded hover:bg-gray-700'>{showAll ? 'Show Less' : 'Show More'}</button>
            </div>
            <div className="flex items-center justify-between space-x-9 mt-4 carousel-cards">
                {!showAll && <button onClick={handlePrevious} className='p-2 rounded hover:bg-gray-700'>←</button>}
                <div className="ml-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-6">
                    {musicList.slice(currentIndex, currentIndex + (showAll ? musicList.length : 4)).map((song) => (
                        <SongCard key={song._id} song={song} />
                    ))}
                </div>
                {!showAll && <button onClick={handleNext} className='p-2 rounded hover:bg-gray-700'>→</button>}
            </div>
        </div>
    );
}

export default ShowAllCarousel;
