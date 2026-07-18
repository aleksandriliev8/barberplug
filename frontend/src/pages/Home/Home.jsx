import Navbar from '../../components/Navbar/Navbar.jsx';
import Footer from '../../components/Footer/Footer.jsx';
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
                        <h1>Our vision</h1>
                        <p>To be the standard gentleman's choice, offering quality, style and attention to every detail</p>
                    </div>
                </section>
                <section className="booking">
                    <h2>BOOK AN APPOINTMENT</h2>
                    <p>We take pride in delivering a premium barbering experience from the moment you walk through our doors.
                        Our online booking system allows you to select your preferred barber and time at your convenience.
                        you need to reschedule, we ask that you do so at least 24 hours prior to your appointment.</p>
                    <a href="https://www.fresha.com/bg" target="_blank" className="btn-book">BOOK NOW</a>
                </section>
                <section className="photos-grid">
                    <img src={photo1} alt="A man sitting on chair" />
                    <img src={photo2} alt="A man holding hair clippers" />
                    <img src={photo3} alt="" />
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Home