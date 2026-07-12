import { useEffect, useRef } from 'react';
import './DosserSection.css';

export default function DossierSection() {
    const line1Ref = useRef(null);
    const line2Ref = useRef(null);
    const line3Ref = useRef(null);
    const hrRef = useRef(null);

    useEffect(() => {
        const lines = [line1Ref, line2Ref, line3Ref];

        const handleScroll = () => {
            lines.forEach((ref, i) => {
                if (!ref.current) return;
                const rect = ref.current.getBoundingClientRect();
                const windowH = window.innerHeight;
                const start = windowH - i * 60;
                const progress = Math.max(0, Math.min(1, (start - rect.top) / (windowH * 0.4)));
                ref.current.style.transform = `translateY(${110 - progress * 110}%)`;
            });

            if (hrRef.current) {
                const rect = hrRef.current.getBoundingClientRect();
                const windowH = window.innerHeight;
                const progress = Math.max(0, Math.min(1, (windowH - rect.top - 100) / (windowH * 0.4)));
                hrRef.current.style.transform = `scaleX(${progress})`;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="dossier">
            <p className="dossier__eyebrow">A Barberplug Dossier</p>
            <div className="dossier__lines">
                <div className="dossier__line-wrap">
                    <span className="dossier__line dossier__line--1" ref={line1Ref}>One city.</span>
                </div>
                <div className="dossier__line-wrap">
                    <span className="dossier__line dossier__line--2" ref={line2Ref}>One shop.</span>
                </div>
                <div className="dossier__line-wrap">
                    <span className="dossier__line dossier__line--3" ref={line3Ref}>One standard.</span>
                </div>
            </div>
            <div className="dossier__hr" ref={hrRef}></div>
        </section>
    );
}