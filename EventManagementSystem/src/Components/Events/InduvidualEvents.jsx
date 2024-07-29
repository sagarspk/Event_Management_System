import React from 'react';
import './InduvidualEvent.css';
import { Link } from 'react-router-dom';
import { events } from '../utils/EventsDatabase';

function InduvidualEvent() {
    return (
        <div className='event-grid'>
            {events.map((event) => (
                <div className='event-card' key={event.id}>
                    <Link to={`/product/${event.id}`} >
                        <div className='event-image-container'>
                            <img className='eventImage' src={event.image}/>
                        </div>

                        <div className='event-details'>
                            <h2>{event.title}</h2>
                            <p>{event.description}</p>
                        </div>
                    </Link>
                </div>
            
            ))}
        </div>
    );
}

export default InduvidualEvent;
