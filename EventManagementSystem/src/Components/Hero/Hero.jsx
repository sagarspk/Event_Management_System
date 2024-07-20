import react from "react";
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow_icon.png'

import hero from '../Assets/hero.png'

function Hero(){

        return(
            <div className="hero">

                <div className="hero-left">
                    <h2>UPCOMMING EVENTS</h2>
                    <div>
                        <div className="hero-hand-icon">
                            <p>new</p>
                            <img className="handIcon" src={hand_icon} alt=""/>
                        </div>    
                        <p>events everyday </p>
                        <p>for everyone</p>    
                    </div>

                    <div className="hero-latest-btn">
                        <div>Upcomming Events</div>
                        <img className="arrowIcon" src={arrow_icon} alt=""/>
                    </div>
                </div>

                <div className="hero-right">
                    <img className="heroIcon" src={hero} alt=""/>
                    
                </div>
            </div>
        )
} 

export default Hero