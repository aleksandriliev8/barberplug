import { useEffect, useRef } from 'react';
import './DosserSection.css';

const DEFAULT_LINES = ['One city.', 'One shop.', 'One standard.'];

export default function DossierSection({
    eyebrow = 'A Barberplug Dossier',
    lines = DEFAULT_LINES,
    variant = 'dark',
}) {
    const lineRefs = useRef([]);
    const hrRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            lineRefs.current.forEach((el, i) => {
                if (!el) return;
                const rect = el.getBoundingClientRect();
                const windowH = window.innerHeight;
                const start = windowH - i * 60;
                const progress = Math.max(0, Math.min(1, (start - rect.top) / (windowH * 0.4)));
                el.style.transform = `translateY(${110 - progress * 110}%)`;
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
        <section className={`dossier dossier--${variant}`}>
            <p className="dossier__eyebrow">{eyebrow}</p>
            <div className="dossier__lines">
                {lines.map((line, i) => (
                    <div className="dossier__line-wrap" key={line}>
                        <span
                            className={`dossier__line dossier__line--${i + 1}`}
                            ref={(el) => { lineRefs.current[i] = el; }}
                        >
                            {line}
                        </span>
                    </div>
                ))}
            </div>
            <div className="dossier__hr" ref={hrRef}></div>
        </section>
    );
}
