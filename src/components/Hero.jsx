import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../images/hero_image.png';

const Hero = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image with Zoom Effect */}
            <motion.div
                className="absolute inset-0"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 10, ease: "easeOut" }}
            >
                <img
                    src={heroImg}
                    alt="Senabel Couture"
                    className="w-full h-full object-cover object-[center_30%]"
                />
                {/* Darker Overlay for Text Contrast */}
                <div className="absolute inset-0 bg-black/40"></div>
            </motion.div>

            {/* Content Overlay */}
            <div className="relative h-full flex flex-col justify-center items-center text-center px-4 z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="max-w-5xl"
                >
                    <p className="font-outfit text-sm md:text-base tracking-[0.4em] uppercase mb-6 text-gold/80">
                        Est. 2024
                    </p>
                    <h1 className="font-playfair text-6xl md:text-8xl lg:text-9xl mb-6 leading-tight text-gold drop-shadow-lg">
                        SENABEL
                    </h1>
                    <p className="font-playfair italic text-xl md:text-3xl text-white/90 font-light tracking-wide mb-10">
                        Defining Modern Royalty
                    </p>

                    <button
                        onClick={() => window.location.href = '/gallery'}
                        className="group mt-4 px-10 py-4 border border-gold hover:bg-gold hover:text-black transition-all duration-500"
                    >
                        <span className="font-outfit text-xs md:text-sm tracking-[0.3em] uppercase text-gold group-hover:text-black">
                            Explore Collection
                        </span>
                    </button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <div className="w-[1px] h-16 bg-gold/50 mx-auto"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
