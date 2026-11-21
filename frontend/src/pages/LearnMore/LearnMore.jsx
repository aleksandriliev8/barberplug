import Navbar from '../../components/Navbar/Navbar.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import DossierSection from '../../components/DossierSection/DosserSection.jsx'
import drivisionVideo from '../../assets/learn-more/drivision.mp4'
import './LearnMore.css'

function LearnMore() {
    return (
        <>
            <Navbar solid />
            <main className="learn-more-page">
                <section className="about-section">
                    <div className="about-text">
                        <div className="about-label">
                            <span>ABOUT US</span>
                        </div>
                        <h1>EXCEPTIONAL BY CHOICE, EXTRAORDINARY BY ACTION</h1>
                        <p>
                            Hello and welcome to BarberPhug Studio, where clients and unconventional haircuts meet.
                            We offer quality, excellent care for the appearance of the modern gentleman.
                        </p>
                    </div>
                    <div className="about-video">
                        <video src={drivisionVideo} autoPlay loop muted playsInline />
                    </div>
                </section>
                <DossierSection
                    variant="light"
                    lines={['Exceptional in their choice', 'Extraordinary in their action']}
                />
            </main>
            <Footer />
        </>
    )
}

export default LearnMore
