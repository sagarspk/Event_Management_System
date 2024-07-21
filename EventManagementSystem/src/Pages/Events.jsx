import react from 'react';
import NewEvents from '../Components/Events/NewEvents';
import InduvidualEvent from "../Components/Events/InduvidualEvents"

function Events(){

    return(
        <div>
            <NewEvents />

            <InduvidualEvent />
        </div>
    )
}

export default Events