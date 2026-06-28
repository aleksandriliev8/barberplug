import Navbar from '../../components/Navbar/Navbar.jsx';
import heroImg from '../../assets/home/hero-home.jpg'
import photo1 from '../../assets/home/home-frist.jpg'
import photo2 from '../../assets/home/home-second.jpg'
import photo3 from '../../assets/home/home-third.jpg'
import './Home.css'

function Home() {
    return (
        <>
            <Navbar />
            <main>
                <section className="hero">
                    <div className="hero-text">
                        <h1>Precision Cuts. Timeless Style</h1>
                        <p>Experience the craft of precision barbering in a modern, minimalist space. Every cut tells a story</p>
                    </div>
                </section>
                <section className="booking">
                    <h2>BOOK AN APPOINTMENT</h2>
                    <p>We take pride in delivering a premium barbering experience from the moment you walk through our doors. Our online booking system allows you to select your preferred barber and time at your convenience. Should you need to reschedule, we ask that you do so at least 24 hours prior to your appointment.</p>
                    <a href="https://www.fresha.com/bg" target="_blank" className="btn-book">BOOK NOW</a>
                </section>
                <section className="photos-grid">
                    <img src={photo1} alt="" />
                    <img src={photo2} alt="" />
                    <img src={photo3} alt="" />
                </section>
            </main>
        </>
    )
}

export default Home