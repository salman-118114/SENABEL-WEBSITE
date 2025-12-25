import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Navbar Component with Critical Scroll Animation
 * 
 * ANIMATION LOGIC:
 * - Uses useState to track scroll position (scrolled state)
 * - useEffect adds scroll event listener on component mount
 * - When user scrolls > 50px, navbar background transitions from transparent to solid
 * - CSS transitions handle smooth background color change (duration-300)
 * - Fixed positioning keeps navbar at top of viewport
 * 
 * RESPONSIVE BEHAVIOR:
 * - Mobile: Hamburger menu (hidden on desktop via md:hidden)
 * - Desktop: Horizontal layout with centered HOME link
 * - Logo on left, HOME center, CONTACT US right
 */

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Scroll event listener to track when user scrolls past 50px
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    // Smooth scroll to section
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-deep-charcoal/95 backdrop-blur-md shadow-lg'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo - Left */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="cursor-pointer"
                        onClick={() => window.location.href = '/'}
                    >
                        <h1 className="text-2xl md:text-3xl font-cinzel font-bold text-gold tracking-wider">
                            SENABEL
                        </h1>
                    </motion.div>

                    {/* Desktop Navigation - Center & Right */}
                    <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
                        <motion.button
                            whileHover={{ scale: 1.1, color: '#D4AF37' }}
                            onClick={() => window.location.href = '/'}
                            className="text-white/90 font-outfit font-medium tracking-widest transition-colors duration-300 hover:text-gold"
                        >
                            HOME
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1, color: '#D4AF37' }}
                            onClick={() => window.location.href = '/gallery'}
                            className="text-white/90 font-outfit font-medium tracking-widest transition-colors duration-300 hover:text-gold"
                        >
                            GALLERY
                        </motion.button>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: '#D4AF37', color: '#050505' }}
                        onClick={() => {
                            if (window.location.pathname !== '/') {
                                window.location.href = '/#contact';
                            } else {
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        className="hidden md:block px-6 py-2.5 border border-gold text-gold font-outfit font-medium tracking-wider transition-all duration-300 hover:bg-gold hover:text-black"
                    >
                        CONTACT US
                    </motion.button>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-gold focus:outline-none"
                        aria-label="Toggle mobile menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {mobileMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-deep-charcoal/98 backdrop-blur-md"
                    >
                        <div className="px-4 py-6 space-y-4">
                            <button
                                onClick={() => scrollToSection('hero')}
                                className="block w-full text-left text-warm-cream font-montserrat font-medium tracking-widest hover:text-gold transition-colors"
                            >
                                HOME
                            </button>
                            <button
                                onClick={() => scrollToSection('bespoke')}
                                className="block w-full text-left text-warm-cream font-montserrat font-medium tracking-widest hover:text-gold transition-colors"
                            >
                                BESPOKE PROCESS
                            </button>
                            <button
                                onClick={() => scrollToSection('collection')}
                                className="block w-full text-left text-warm-cream font-montserrat font-medium tracking-widest hover:text-gold transition-colors"
                            >
                                COLLECTION
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="block w-full mt-4 px-6 py-3 border-2 border-gold text-gold font-montserrat font-medium tracking-wider text-center hover:bg-gold hover:text-midnight-black transition-all"
                            >
                                CONTACT US
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
