import './GalleryGrid.css';
import images from '../../assets/gallery';

export default function GalleryGrid() {
    return (
        <section className="gallery-grid">
            <div className="gallery-grid__container">
                {images.map((src, i) => (
                    <div className="gallery-grid__item" key={i}>
                        <img src={src} alt="" loading="lazy" />
                    </div>
                ))}
            </div>
        </section>
    );
}
