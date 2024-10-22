import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './NewEvents.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { events } from '../utils/EventsDatabase';

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
        }, 20000); // Change slide every 20 seconds

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
                            <p><i className='fas fa-building'></i> Venue: {event.venue}</p>
                        </div>

                        <div className='event-address'>
                            <p><i className='fas fa-map-marker-alt'></i> Address: {event.address}</p>
                        </div>

                        <Link to={`/product/${event.id}`} >        
                            <div className='event-btn'>
                                <button className='eventButton'> BOOK NOW</button>
                            </div>
                        </Link>
                    </div>
                ))}
                <button className='nav-button prev' onClick={handlePrev}>❮</button>
                <button className='nav-button next' onClick={handleNext}>❯</button>
            </div>
      
    );
}

export default NewEvents;
