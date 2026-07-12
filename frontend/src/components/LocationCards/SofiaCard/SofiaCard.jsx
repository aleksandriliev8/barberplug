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
        </section>
    );
});

export default SofiaCard;