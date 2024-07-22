import react from 'react';
import NewEvents from '../Components/Events/NewEvents';
import InduvidualEvent from "../Components/Events/InduvidualEvents"
import Footer from '../Components/Footer/Footer';

function Events(){

    return(
        <div>
            <NewEvents />

            <InduvidualEvent />

            <Footer />
        </div>
    )
}

export default Events