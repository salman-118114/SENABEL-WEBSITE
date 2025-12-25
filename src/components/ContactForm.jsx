import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

/**
 * Contact Form Component - Luxury Styling
 * 
 * DESIGN:
 * - Distinct dark background section
 * - Transparent input backgrounds with thin gold borders
 * - Cream text for inputs
 * - Gold submit button with hover animation
 * 
 * FORM FIELDS:
 * - Full Name (required)
 * - Email (required, with validation)
 * - City (required)
 * - Contact Number (required)
 * 
 * RESPONSIVE:
 * - Two-column layout on desktop for name/email and city/phone
 * - Single column on mobile
 */

const ContactForm = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        city: '',
        phone: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const googleScriptURL = 'https://script.google.com/macros/s/AKfycbxcpJwGVxT_XZCOyvS3otxVVtDgNIfwvFo4atyCEayW0RN9976ywlvUJcd-TjmRiSDN/exec';

        // Create new FormData object properly
        const formPayload = new FormData();
        formPayload.append('fullName', formData.fullName);
        formPayload.append('email', formData.email);
        formPayload.append('city', formData.city);
        formPayload.append('phone', formData.phone);
        formPayload.append('message', formData.message);

        try {
            await fetch(googleScriptURL, {
                method: 'POST',
                body: formPayload,
                mode: 'no-cors' // Critical for Google Apps Script
            });

            // If we get here, assume success (since no-cors is opaque)
            setSubmitStatus('success');
            setFormData({
                fullName: '',
                email: '',
                city: '',
                phone: '',
                message: '',
            });

            // Clear success message after 5 seconds
            setTimeout(() => setSubmitStatus(''), 5000);

        } catch (error) {
            console.error('Submission Error:', error);
            // Optionally set an error status here
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
            ref={ref}
            className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-midnight-black"
        >
            <div className="max-w-4xl mx-auto">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-gold mb-4">
                        BEGIN YOUR JOURNEY
                    </h2>
                    <p className="text-lg text-warm-cream font-lato max-w-2xl mx-auto">
                        Share your vision with us, and let's create something extraordinary together.
                    </p>
                </motion.div>

                {/* Contact Form */}
                <motion.form
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                >
                    {/* Full Name and Email Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label
                                htmlFor="fullName"
                                className="block text-warm-cream font-montserrat text-sm tracking-wider mb-2"
                            >
                                FULL NAME *
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                                className="w-full bg-transparent border-2 border-gold/50 focus:border-gold text-warm-cream px-4 py-3 font-lato transition-all duration-300 outline-none placeholder-warm-cream/40"
                                placeholder="Enter your full name"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-warm-cream font-montserrat text-sm tracking-wider mb-2"
                            >
                                EMAIL ADDRESS *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-transparent border-2 border-gold/50 focus:border-gold text-warm-cream px-4 py-3 font-lato transition-all duration-300 outline-none placeholder-warm-cream/40"
                                placeholder="your@email.com"
                            />
                        </div>
                    </div>

                    {/* City and Phone Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label
                                htmlFor="city"
                                className="block text-warm-cream font-montserrat text-sm tracking-wider mb-2"
                            >
                                CITY *
                            </label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                required
                                className="w-full bg-transparent border-2 border-gold/50 focus:border-gold text-warm-cream px-4 py-3 font-lato transition-all duration-300 outline-none placeholder-warm-cream/40"
                                placeholder="Your city"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="phone"
                                className="block text-warm-cream font-montserrat text-sm tracking-wider mb-2"
                            >
                                CONTACT NUMBER *
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="w-full bg-transparent border-2 border-gold/50 focus:border-gold text-warm-cream px-4 py-3 font-lato transition-all duration-300 outline-none placeholder-warm-cream/40"
                                placeholder="+1 (555) 000-0000"
                            />
                        </div>
                    </div>

                    {/* Message Field */}
                    <div>
                        <label
                            htmlFor="message"
                            className="block text-warm-cream font-montserrat text-sm tracking-wider mb-2"
                        >
                            YOUR VISION (OPTIONAL)
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="5"
                            className="w-full bg-transparent border-2 border-gold/50 focus:border-gold text-warm-cream px-4 py-3 font-lato transition-all duration-300 outline-none placeholder-warm-cream/40 resize-none"
                            placeholder="Tell us about your dream piece..."
                        ></textarea>
                    </div>

                    {/* Submit Button - Made more prominent */}
                    <div className="pt-4 text-center">
                        <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            whileHover={{ scale: 1.05, backgroundColor: '#D4AF37', color: '#050505' }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full md:w-auto px-16 py-5 bg-gold text-midnight-black font-montserrat font-bold text-lg tracking-[0.2em] uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'SENDING...' : 'SUBMIT'}
                        </motion.button>
                    </div>

                    {/* Success Message */}
                    {submitStatus === 'success' && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-gold font-montserrat text-sm tracking-wider text-center md:text-left"
                        >
                            ✓ Thank you! We'll be in touch soon to begin your bespoke journey.
                        </motion.div>
                    )}
                </motion.form>

                {/* Additional Contact Info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-12 text-center border-t border-gold/20 pt-8"
                >
                    <p className="text-warm-cream/60 font-lato text-sm">
                        Prefer to speak directly? Reach us at{' '}
                        <a href="mailto:hello@senabel.com" className="text-gold hover:underline">
                            hello@senabel.com
                        </a>
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactForm;
