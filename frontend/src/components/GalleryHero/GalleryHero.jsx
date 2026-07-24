import { useEffect, useRef, useState, lazy, Suspense } from 'react';
const LiquidEther = lazy(() => import('../LiquidEther/LiquidEther.jsx'));
import './GalleryHero.css';

export default function GalleryHero() {
    const [showEffect, setShowEffect] = useState(false);
    const [effectReady, setEffectReady] = useState(false);
    const eyebrowRef = useRef(null);
    const titleRef = useRef(null);
    const hrRef = useRef(null);
    const taglineRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const windowH = window.innerHeight;

            if (eyebrowRef.current) {
                const rect = eyebrowRef.current.getBoundingClientRect();
                const progress = Math.max(0, Math.min(1, (windowH - rect.top) / (windowH * 0.4)));
                eyebrowRef.current.style.opacity = progress;
                eyebrowRef.current.style.transform = `translateY(${20 - progress * 20}px)`;
            }

            if (titleRef.current) {
                const rect = titleRef.current.parentElement.getBoundingClientRect();
                const progress = Math.max(0, Math.min(1, (windowH - rect.top - 60) / (windowH * 0.4)));
                titleRef.current.style.transform = `translateY(${110 - progress * 110}%)`;
            }

            if (hrRef.current) {
                const rect = hrRef.current.getBoundingClientRect();
                const progress = Math.max(0, Math.min(1, (windowH - rect.top - 100) / (windowH * 0.4)));
                hrRef.current.style.transform = `scaleX(${progress})`;
            }

            if (taglineRef.current) {
                const rect = taglineRef.current.getBoundingClientRect();
                const progress = Math.max(0, Math.min(1, (windowH - rect.top - 140) / (windowH * 0.4)));
                taglineRef.current.style.opacity = progress;
                taglineRef.current.style.transform = `translateY(${20 - progress * 20}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const id = setTimeout(() => setShowEffect(true), 100);
        return () => clearTimeout(id);
    }, []);

    useEffect(() => {
        if (!showEffect) return;
        const id = setTimeout(() => setEffectReady(true), 800);
        return () => clearTimeout(id);
    }, [showEffect]);

    return (
        <section className="gallery-hero">
            <div className={`gallery-hero__bg${effectReady ? ' gallery-hero__bg--visible' : ''}`}>
                {showEffect && <Suspense fallback={null}>
                <LiquidEther
                    colors={["#333333", "#aaaaaa", "#ffffff", "#999999", "#222222"]}
                    autoDemo={true}
                    autoSpeed={0.6}
                    autoIntensity={2.5}
                    mouseForce={15}
                    cursorSize={45}
                    resolution={0.1}
                    iterationsPoisson={4}
                    autoResumeDelay={500}
                    dt={0.01}
                />
                </Suspense>}
            </div>
            <div className="gallery-hero__content">
                <span className="gallery-hero__eyebrow" ref={eyebrowRef}>Barberplug</span>
                <div className="gallery-hero__title-wrap">
                    <h1 className="gallery-hero__title" ref={titleRef}>The Look</h1>
                </div>
                <div className="gallery-hero__hr" ref={hrRef}></div>
                <p className="gallery-hero__tagline" ref={taglineRef}>Style beyond the chair.</p>
            </div>
        </section>
    );
}
