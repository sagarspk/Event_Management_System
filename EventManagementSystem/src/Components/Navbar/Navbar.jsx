import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart from '../Assets/cart.png';
import { Link } from 'react-router-dom';

function Navbar() {
    const [menu, setMenu] = useState("home");

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
                <Link to='/cart'><img className='cart' src={cart} alt='cart' /></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    );
}

export default Navbar;
