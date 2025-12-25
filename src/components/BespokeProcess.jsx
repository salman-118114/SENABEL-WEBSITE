import React from 'react';
import { motion } from 'framer-motion';

const BespokeProcess = () => {
    const steps = [
        {
            number: "01",
            title: "Consultation",
            description: "We begin with a personal dialogue to understand your vision, silhouette preferences, and the occasion."
        },
        {
            number: "02",
            title: "Design & Sketch",
            description: "Our atelier creates exclusive sketches, selecting premium fabrics and intricate embellishments for your approval."
        },
        {
            number: "03",
            title: "The Creation",
            description: "Master craftsmen bring the design to life, with multiple fittings to ensure a flawless, second-skin fit."
        }
    ];

    return (
        <section className="bg-dark-secondary">
            <div className="flex flex-col lg:flex-row min-h-[80vh]">
                {/* Left: Image Side */}
                <div className="w-full lg:w-1/2 h-[50vh] lg:h-auto relative overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1737652423418-a5ea06f9ce1a?fm=jpg&q=80&w=2000"
                        alt="Couture Detail"
                        className="w-full h-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>

                {/* Right: Content Side */}
                <div className="w-full lg:w-1/2 flex items-center p-8 md:p-16 lg:p-24 bg-dark">
                    <div className="max-w-xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-12"
                        >
                            <h2 className="font-playfair text-4xl md:text-5xl mb-6 text-gold">The Bespoke Journey</h2>
                            <div className="w-16 h-0.5 bg-gold/30"></div>
                        </motion.div>

                        <div className="space-y-12">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex gap-6"
                                >
                                    <span className="font-outfit text-xs md:text-sm font-semibold tracking-widest text-gold/60 mt-1">
                                        {step.number}
                                    </span>
                                    <div>
                                        <h3 className="font-outfit text-lg font-medium text-gold mb-2 uppercase tracking-wide">
                                            {step.title}
                                        </h3>
                                        <p className="font-inter text-gray-400 font-light leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="mt-16 text-xs text-gold/80 font-semibold tracking-[0.2em] border-b border-gold/50 pb-1 hover:text-gold transition-colors uppercase cursor-pointer"
                        >
                            Book Appointment
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BespokeProcess;
