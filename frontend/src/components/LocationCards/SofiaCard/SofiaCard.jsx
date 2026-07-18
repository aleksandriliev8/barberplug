import './SofiaCard.css';
import sofiaImg from '../../../assets/locations/sofia_wallpaper.jpg';
import { forwardRef, useEffect, useRef } from 'react';

const SofiaCard = forwardRef(function SofiaCard(props, ref) {
    const bgRef = useRef(null);
    const overlayRef = useRef(null);

    useEffect(() => {
        let rafId = 0;

        const update = () => {
            if (!bgRef.current || !overlayRef.current) return;
            const rect = bgRef.current.parentElement.getBoundingClientRect();
            const windowH = window.innerHeight;

            const enterProgress = Math.max(0, Math.min(1, (windowH - rect.top) / (windowH * 0.5)));

            const exitThreshold = windowH * 0.5;
            const exitProgress = rect.bottom > exitThreshold
                ? 0
                : Math.max(0, Math.min(1, 1 - rect.bottom / exitThreshold));
            const progress = enterProgress * (1 - exitProgress);

            const blur = 20 - progress * 20;
            const opacity = 1 - progress * 0.35;

            const cardH = rect.height;
            const cardCenter = rect.top + cardH / 2;
            const viewportCenter = windowH / 2;
            const distFromCenter = Math.abs(cardCenter - viewportCenter) / (cardH / 2 + viewportCenter);
            const zoomScale = 1.08 - 0.08 * (1 - distFromCenter);

            bgRef.current.style.filter = `blur(${blur}px)`;
            bgRef.current.style.transform = `scale(${zoomScale})`;
            overlayRef.current.style.background = `rgba(9,9,9,${opacity})`;
        };

        const handleScroll = () => {
            cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(update);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        update();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <section className="loc-card" ref={ref}>
            <div
                className="loc-card__bg"
                ref={bgRef}
                style={{ backgroundImage: `url(${sofiaImg})` }}
            ></div>
            <div className="loc-card__overlay" ref={overlayRef}></div>
            <div className="loc-card__bg-number">01</div>

            <div className="loc-card__content">
                <div className="loc-card__left">
                    <div className="loc-card__salons-header">
                        <span>Salons</span>
                        <span className="loc-card__line-long"></span>
                        <span>01</span>
                    </div>
                    <div className="loc-card__salon-divider"></div>
                    <a href="https://www.fresha.com/bg" target="_blank" rel="noopener noreferrer" className="loc-card__salon-row">
                        <span className="loc-card__salon-num">01</span>
                        <span className="loc-card__salon-name">Barberplug Sofia</span>
                        <span className="loc-card__salon-book">Book →</span>
                    </a>
                    <div className="loc-card__salon-divider"></div>
                </div>

                <div className="loc-card__right">
                    <div className="loc-card__country-header">
                        <span>Bulgaria</span>
                        <span className="loc-card__line-short"></span>
                        <span>01</span>
                        <span className="loc-card__line-short loc-card__line--short"></span>
                        <span className="saloon-number">01</span>
                    </div>
                    <h2 className="loc-card__city-name">Sofia</h2>
                    <div className="loc-card__divider" />
                    <p className="loc-card__tagline">Capital craft. Premium finish.</p>
                    <div className="loc-card__coords">
                        <div><span className="loc-card__coord-label">Latitude</span><span className="loc-card__coord-value">42.6977° N</span></div>
                        <div><span className="loc-card__coord-label">Longitude</span><span className="loc-card__coord-value">23.3219° E</span></div>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default SofiaCard;