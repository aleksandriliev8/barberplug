import { useRef } from 'react'
import DossierSection from '../../components/DossierSection/DosserSection.jsx'
import EndDossier from '../../components/EndDossier/EndDossier.jsx'
import Map from '../../components/Map/Map.jsx'
import NavbarSimple from '../../components/NavbarSimple/NavbarSimple.jsx';
import SofiaCard from '../../components/LocationCards/SofiaCard/SofiaCard.jsx'
import './Location.css'

function Location() {
    const sofiaCardRef = useRef(null);

    const scrollToSofia = () => {
        const el = sofiaCardRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const targetY = window.scrollY + rect.top + rect.height / 2 - window.innerHeight / 2;
        window.scrollTo({ top: targetY, behavior: 'smooth' });
    };

    return (
        <div className="location-page">
            <NavbarSimple />
            <Map onSofiaClick={scrollToSofia} />
            <section className="location-intro">
                <h1>ONE CITY. ONE SHOP. NO COMPROMISES.</h1>
                <p>TAP THE ORIGINAL · BOOK YOUR VISION</p>
                <div className="scroll-hint">
                    <span>Scroll for the story</span>
                    <span className="arrow">↓</span>
                </div>
            </section>
            <hr/>
            <DossierSection />
            <SofiaCard ref={sofiaCardRef} />
            <EndDossier />
        </div>
    )}

export default Location;