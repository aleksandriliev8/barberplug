import './Footer.css'
import { FaInstagram, FaFacebook, FaXTwitter } from 'react-icons/fa6'

function Footer() {
    return (
        <footer>
            <div className="footer-top">
                <div className="footer-col">
                    <h4>NAVIGATION</h4>
                    <hr />
                    <ul>
                        <li><a href="#">Learn More</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="/gallery">Gallery</a></li>
                        <li><a href="#">Location</a></li>
                        <li><a href="https://www.fresha.com/bg" target="_blank">Book Now</a></li>
                        <li><a href="#">Help</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>FOLLOW US</h4>
                    <hr />
                    <div className="footer-socials">
                        <a href="https://www.instagram.com/barberplug.bul/" target="_blank" aria-label="Instagram"><FaInstagram /></a>
                        <a href="#" aria-label="Facebook"><FaFacebook /></a>
                        <a href="#" aria-label="Twitter"><FaXTwitter /></a>
                    </div>
                </div>

                <div className="footer-col">
                    <h4>CONTACT</h4>
                    <hr />
                    <ul>
                        <li>Zhk. Poligona, Block 11</li>
                        <li>+359 888 888 8888</li>
                        <li>evgeni@barberplug.com</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; BARBERPLUG 2026</p>
            </div>
        </footer>
    )
}

export default Footer