import React from 'react';
import './InduvidualEvent.css';
import event1 from '../Assets/event1.jpg';
import event2 from '../Assets/event2.jpg';

const events = [
    { id: 1, title: "New Year Eve", description: "This New year, we bring to you the most iconic event in London.", image: event1 },
    { id: 2, title: "Comedy Show", description: "A night of laughter with top comedians.", image: event2 },
    { id: 3, title: "Haha Show", description: "A night of laughter with top comedians.", image: event2 }
    // Add more events here
    // Add more events here
];

function InduvidualEvent() {
    return (
        <div className='event-grid'>
            {events.map((event) => (
                <div className='event-card' key={event.id}>
                   
                   <div className='event-image-container'>
                      <img className='eventImage' src={event.image}/>
                    </div>

                    <div className='event-details'>
                        <h2>{event.title}</h2>
                        <p>{event.description}</p>
                    </div>

                </div>
            ))}
        </div>
    );
}

export default InduvidualEvent;
