import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BespokeProcess from '../components/BespokeProcess';
import LookbookGallery from '../components/LookbookGallery';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

function Home() {
    return (
        <div className="bg-dark min-h-screen">
            {/* Navigation Bar with Scroll Animation */}
            <Navbar />

            {/* Hero Section - Full Viewport Height */}
            <Hero />

            {/* Bespoke Process Section - Image Left, Text Right */}
            <BespokeProcess />

            {/* Lookbook Gallery Section - Full Grid */}
            <LookbookGallery />

            {/* Contact Form Section */}
            <ContactForm />

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Home;
