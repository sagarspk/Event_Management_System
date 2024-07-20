import React, { useState, useEffect  } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart from '../Assets/cart.png';
import { Link } from 'react-router-dom';

function Navbar() {
    const [menu, setMenu] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img className='logo' src={logo} alt='logo' />
            </div>

            <ul className='nav-menu'>
                <li onClick={() => { setMenu("home") }}>
                    <Link to='/'>Home</Link>
                    {menu === "home" && <hr />}
                </li>
                <li onClick={() => { setMenu("events") }}>
                    <Link to ='/events'>Events</Link>
                    {menu === "events" && <hr />}
                </li>
                <li onClick={() => { setMenu("store") }}>
                    <Link to='/store'>Store</Link>
                    {menu === "store" && <hr />}
                </li>
            </ul>

            <div className='nav-cart'>
                <button className='ticket-btn'>BUY TICKETS NOW</button>
                <Link to='/cart'><img className='cart' src={cart} alt='cart' /></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    );
}

export default Navbar;
