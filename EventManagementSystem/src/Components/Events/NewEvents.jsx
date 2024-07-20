import React, { useEffect, useState } from 'react';
import './NewEvents.css';
import event1 from '../Assets/event1.jpg';
import event2 from '../Assets/event2.jpg';
// import event3 from '../Assets/event3.jpg';

const events = [
    { id: 1, title: "New Year Eve", description:"This New year, We bring to you the mmost iconiccc evvent in London.", venue:"Tiger Tiger London", address:"29 Haymarket, London, SW1Y 4SP", image: event1 },
    { id: 2, title: "Comedy Show", description:"comedy.", venue:"Tiger Tiger London", address:"29 Haymarket, London, SW1Y 4SP", image: event2 },
    // { id: 3, title: "Event 3", image: event3 },
];

function NewEvents() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
        }, 30000); // Change slide every 10 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='event-slider'>
            {events.map((event, index) => (
                <div
                    key={event.id}
                    className={`event-slide ${index === currentIndex ? 'active' : ''}`}
                >
                    <img src={event.image} alt={event.title} className='event-image' />

                    <div className='event-info'>
                        <h2>{event.title}</h2>
                    </div>

                    <div className='event-descp'>
                        <p>{event.description}</p>
                    </div>

                    <div className='event-venue'>
                        <p> Venue: {event.venue}</p>
                    </div>

                    <div className='event-address'>
                        <p>Address: {event.address}</p>
                    </div>

                    <div className='event-btn'>
                        <button className='eventButton'> BOOK NOW</button>
                    </div>
                </div>
            ))}
            <button className='nav-button prev' onClick={handlePrev}>❮</button>
            <button className='nav-button next' onClick={handleNext}>❯</button>
        </div>
    );
}

export default NewEvents;
