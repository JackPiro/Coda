import React, { useState } from 'react';
import Card from './Card'; // import your Card component

const CardCarousel = ({ cards }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % cards.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((currentIndex - 1 + cards.length) % cards.length);
    };

    return (
        <div className="carousel">
            <button onClick={handlePrevious}>Prev</button>
            <Card card={cards[currentIndex]} />  // pass the current card to your Card component
            <button onClick={handleNext}>Next</button>
        </div>
    );
};

export default CardCarousel;
