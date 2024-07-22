import React, { useState, useEffect  } from 'react';
import './Footer.css';
import logo from '../Assets/logo.png'
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer(){

    return(
        <div className='footer-grid'>
                <div className='store-logo'>
                    <img src= {logo}/>
                </div>

                <div className='store-address'>
                    <h2>ADDRESS</h2>
                    <p>47 Lakedale Rd, London SE18 1PR</p>
                </div>

                <div className='store-number'>
                    <h2>Email Us</h2>
                    <p>hello@977shop.com</p>
                </div>

                <div className='store-socialMedia'>
                    <h2>Follow Us</h2>
                    <ul className='footer-social'>
                        <li>
                            <a href='https://www.facebook.com/9seven7shop'>
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                        </li>
                        

                        <li>
                            <a href=''> 
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </li>
                        
                        <li>
                            <a href='https://www.tiktok.com/@977events'>
                                 <i className="fa-brands fa-tiktok"> </i>
                            </a>
                        </li>
                    </ul>

                </div>
        </div>
    )

}

export default Footer