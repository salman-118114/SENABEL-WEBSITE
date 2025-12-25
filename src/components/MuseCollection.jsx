import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Muse Collection Section - Reversed Layout
 * 
 * LAYOUT:
 * - Desktop: Text (left) | Gallery Grid (right)
 * - Mobile: Stacked - Text on top, gallery below
 * 
 * GALLERY DESIGN:
 * - 2x2 grid/masonry layout
 * - Hover effects on images
 * - Staggered fade-in animation
 * 
 * RESPONSIVE:
 * - Grid adjusts from 2 columns (mobile) to 2 columns (desktop)
 * - Different aspect ratios for visual interest
 */

const MuseCollection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    // Collection images with high-fashion aesthetic
    const collectionImages = [
        {
            url: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1983&auto=format&fit=crop',
            alt: 'Luxury Evening Gown',
        },
        {
            url: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1887&auto=format&fit=crop',
            alt: 'Bridal Couture',
        },
        {
            url: 'https://images.unsplash.com/photo-1596783074918-c84cb06531ca?q=80&w=1887&auto=format&fit=crop',
            alt: 'Designer Collection',
        },
        {
            url: 'https://images.unsplash.com/photo-1583391733981-5babdc2d773f?q=80&w=1887&auto=format&fit=crop',
            alt: 'Haute Couture',
        },
    ];

    return (
        <section
            id="collection"
            ref={ref}
            className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-deep-charcoal"
        >
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left: Text Block */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="space-y-6 lg:order-1"
                    >
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-gold leading-tight"
                        >
                            THE MUSE COLLECTION
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="space-y-4"
                        >
                            <p className="text-base sm:text-lg text-warm-cream font-lato leading-relaxed">
                                Discover our signature collection where artistry meets innovation. Each piece in
                                the Muse Collection tells a story of timeless elegance, contemporary flair, and
                                unparalleled craftsmanship.
                            </p>

                            <p className="text-base sm:text-lg text-warm-cream font-lato leading-relaxed">
                                From opulent evening gowns that command attention to delicate bridal couture that
                                captures eternal romance, our collection is a testament to the boundless possibilities
                                of bespoke fashion.
                            </p>

                            <p className="text-base sm:text-lg text-warm-cream font-lato leading-relaxed">
                                We invite you to explore these masterpieces and envision how SENABEL can bring
                                your sartorial dreams to life with pieces that reflect your unique elegance.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="flex items-center space-x-3 mt-6"
                        >
                            <div className="h-px w-12 bg-gold"></div>
                            <span className="text-gold font-montserrat text-sm tracking-widest">
                                CRAFTED WITH PASSION
                            </span>
                        </motion.div>
                    </motion.div>

                    {/* Right: Image Gallery Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="grid grid-cols-2 gap-4 lg:order-2"
                    >
                        {collectionImages.map((image, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                                whileHover={{ scale: 1.05, zIndex: 10 }}
                                className="relative overflow-hidden rounded-sm group cursor-pointer"
                            >
                                <img
                                    src={image.url}
                                    alt={image.alt}
                                    className="w-full h-64 sm:h-80 object-cover rounded-sm transition-transform duration-500 group-hover:scale-110"
                                />
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                    <p className="text-gold font-montserrat text-sm tracking-wider">
                                        {image.alt}
                                    </p>
                                </div>
                                {/* Gold border accent */}
                                <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/40 rounded-sm transition-all duration-300 pointer-events-none"></div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MuseCollection;
