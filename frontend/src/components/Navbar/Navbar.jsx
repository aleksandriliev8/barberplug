import './Navbar.css'
import logo from '../../assets/logo/barberplug_logo.PNG'
import logoTransparent from '../../assets/logo/barberplug_logo_transparent.PNG'
import { FaInstagram, FaFacebook, FaXTwitter, FaBars, FaXmark } from 'react-icons/fa6'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

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
                    <a href="/" aria-label="Barberplug">
                        <img src={scrolled ? logo : logoTransparent} alt="Barberplug" height="38px"/>
                    </a>
                </div>

                <div className="nav-right">
                    <button className="nav-hamburger" aria-label="Menu" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FaXmark /> : <FaBars />}
                    </button>
                </div>
            </div>

            <div className="nav-links">
                <a href="#">Learn More</a>
                <a href="#">Shop</a>
                <a href="/gallery">Gallery</a>
                <a href="/location">Location</a>
                <a href="https://www.fresha.com/bg" target="_blank" rel="noopener noreferrer">Book Now</a>
                <a href="#">Help</a>
            </div>

            <div className={`nav-mobile-menu${menuOpen ? ' nav-mobile-menu--open' : ''}`}>
                <a href="#" onClick={() => setMenuOpen(false)}>Learn More</a>
                <a href="#" onClick={() => setMenuOpen(false)}>Shop</a>
                <a href="/gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
                <a href="/location" onClick={() => setMenuOpen(false)}>Location</a>
                <a href="https://www.fresha.com/bg" target="_blank" onClick={() => setMenuOpen(false)}>Book Now</a>
                <a href="#" onClick={() => setMenuOpen(false)}>Help</a>
                <div className="nav-mobile-socials">
                    <a href="https://www.instagram.com/barberplug.bul/" target="_blank" aria-label="Instagram"><FaInstagram /></a>
                    <a href="#" aria-label="Facebook"><FaFacebook /></a>
                    <a href="#" aria-label="Twitter"><FaXTwitter /></a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar