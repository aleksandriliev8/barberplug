import { useEffect, useRef } from 'react';
import './EndDossier.css';

export default function EndDossier() {
    const sectionRef = useRef(null);
    const eyebrowRef = useRef(null);
    const headingRef = useRef(null);
    const buttonsRef = useRef(null);

    useEffect(() => {
        let rafId = 0;

        const update = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const windowH = window.innerHeight;

            const eyebrowProgress = Math.max(0, Math.min(1, (windowH - rect.top) / (windowH * 0.4)));
            const headingProgress = Math.max(0, Math.min(1, (windowH - rect.top - 100) / (windowH * 0.4)));
            const buttonsProgress = Math.max(0, Math.min(1, (windowH - rect.top - 250) / (windowH * 0.4)));

            if (eyebrowRef.current) {
                eyebrowRef.current.style.opacity = eyebrowProgress;
                eyebrowRef.current.style.transform = `translateY(${20 - eyebrowProgress * 20}px)`;
            }
            if (headingRef.current) {
                headingRef.current.style.opacity = headingProgress;
                headingRef.current.style.transform = `translateY(${30 - headingProgress * 30}px)`;
            }
            if (buttonsRef.current) {
                buttonsRef.current.style.opacity = buttonsProgress;
                buttonsRef.current.style.transform = `translateY(${20 - buttonsProgress * 20}px)`;
            }
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
        <section className="end-dossier" ref={sectionRef}>
            <p className="end-dossier__eyebrow" ref={eyebrowRef}>End of Dossier</p>
            <h2 className="end-dossier__heading" ref={headingRef}>Find your chair.</h2>
            <div className="end-dossier__buttons" ref={buttonsRef}>
                <a href="https://www.fresha.com/bg" target="_blank" className="end-dossier__btn end-dossier__btn--primary">
                    Book Now <span className="end-dossier__arrow">→</span>
                </a>
                <a href="/" target="_blank" className="end-dossier__btn end-dossier__btn--outline">
                    Barberplug.com
                </a>
            </div>
            <p className="end-dossier__copy">© 2026 · Barberplug</p>
        </section>
    );
}
