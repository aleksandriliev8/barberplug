import './NavbarSimple.css'
import logoTransparent from '../../assets/logo/barberplug_logo_transparent.PNG'
import { Link } from 'react-router-dom'

function NavbarSimple() {
    return (
        <nav className="navbar-simple">
            <Link to="/">
                <img src={logoTransparent} alt="Barberplug" height="38px" />
            </Link>
        </nav>
    )
}

export default NavbarSimple