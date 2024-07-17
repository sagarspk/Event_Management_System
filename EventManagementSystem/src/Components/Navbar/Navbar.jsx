import './Navbar.css'
import logo from '../Assets/logo.png'
import cart from '../Assets/cart.png'

function Navbar(){
    return(
        <div className='navbar'>

            <div className='nav-logo'>
                <img className= 'logo' src={logo} alt='' />
            </div>

            <ul className='nav-menu'>
                <li>Home</li>
                <li>Events</li>
                <li>Store</li>
            </ul>

            <div className='nav-cart'>
                <img className='cart' src={cart} alt='' />
            </div>

        </div>
    );
}

export default Navbar