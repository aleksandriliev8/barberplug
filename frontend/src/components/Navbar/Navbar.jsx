import './Navbar.css'
import logo from '../../assets/logo/barberplug_logo.PNG'
import logoTransparent from '../../assets/logo/barberplug_logo_transparent.PNG'
import { FaInstagram, FaFacebook, FaXTwitter } from 'react-icons/fa6'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={scrolled ? 'scrolled' : ''}>
            {!scrolled && (
                <div className="nav-banner">
                    <p><b>TO BOOK APPOINTMENT IN SOFIA </b><span>|</span> <a href="https://www.fresha.com/bg" target="_blank">CLICK HERE</a></p>
                </div>
            )}
            <div className="nav-top">
                <div className="nav-socials">
                    <a href="https://www.instagram.com/barberplug.bul/" target="_blank" aria-label="Instagram">
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
                    <Link to="/" aria-label="Barberplug">
                        <img src={scrolled ? logo : logoTransparent} alt="Barberplug" height="38px"/>
                    </Link>
                </div>

                <div className="nav-right"></div>
            </div>

            <div className="nav-links">
                <a href="#">Learn More</a>
                <a href="#">Shop</a>
                <Link to="/gallery">Gallery</Link>
                <Link to="/location" target="_blank" rel="noopener noreferrer">Location</Link>
                <a href="https://www.fresha.com/bg" target="_blank">Book Now</a>
                <a href="#">Help</a>
            </div>
        </nav>
    )
}

export default Navbar