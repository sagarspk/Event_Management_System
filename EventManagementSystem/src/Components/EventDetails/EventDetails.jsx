import { useParams, useResolvedPath } from "react-router-dom";
import { events } from "../utils/EventsDatabase";
import { Link } from "react-router-dom";
import './EventDetails.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

function EventDetails(){
    
    const {productId} = useParams()
    const numId = Number(productId)

    const filteredEvent = events.find((eventDetail) =>{
        return eventDetail.id === numId;
    }) 
    
    //console.log(filteredEvent)

    return(
        <div className="EventDetail">
            <h1>Event Details</h1>
            
            <div>
                <img src={filteredEvent.image} alt="Event"/>
            </div>

            <div className="EventDetailsContent">
                <h3><i className='fas fa-building'></i> Event : {filteredEvent.title} </h3>
                <h3><i className='fas fa-map-marker-alt'></i> Location : {filteredEvent.address}</h3>
                <Link >
                    <button className="button-49">Buy Tickets</button>
                </Link>
            </div>

        </div>
    )
}

export default EventDetails