import './Navbar.css'
import logo from '../../assets/barberplug_logo.PNG'
import { FaInstagram, FaFacebook, FaXTwitter } from 'react-icons/fa6'

function Navbar() {
    return (
        <nav>
            <div className="nav-top">
                <div className="nav-socials">
                    <a href="#" aria-label="Instagram">
                        <FaInstagram />
                    </a>
                    <a href="#" aria-label="Facebook">
                        <FaFacebook />
                    </a>
                    <a href="#" aria-label="Twitter">
                        <FaXTwitter />
                    </a>
                </div>

                <div className="nav-logo">
                    <a href="#" aria-label="Barberplug">
                        <img src={logo} alt="Barberplug" height="38px"/>
                    </a>
                </div>

                <div className="nav-right"></div>
            </div>

            <div className="nav-links">
                <a href="#">Learn More</a>
                <a href="#">Shop</a>
                <a href="#">Location</a>
                <a href="#">Book Now</a>
                <a href="#">Help</a>
            </div>
        </nav>
    )
}

export default Navbar