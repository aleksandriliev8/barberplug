import Navbar from '../../components/Navbar/Navbar.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import GalleryHero from '../../components/GalleryHero/GalleryHero.jsx';
import GalleryGrid from '../../components/GalleryGrid/GalleryGrid.jsx';
import './Gallery.css';

export default function Gallery() {
    return (
        <>
            <Navbar />
            <main className="gallery-page">
                <GalleryHero />
                <GalleryGrid />
            </main>
            <Footer />
        </>
    );
}
