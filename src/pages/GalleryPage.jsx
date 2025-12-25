import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageModal from '../components/ImageModal';

// Importing images directly
import gemini1 from '../images/Gemini_Generated_Image_3po6903po6903po6.png';
import gemini2 from '../images/Gemini_Generated_Image_6tpww46tpww46tpw.png';
import gemini3 from '../images/Gemini_Generated_Image_ahnjxqahnjxqahnj.png';
import gemini4 from '../images/Gemini_Generated_Image_bv4ejebv4ejebv4e.png';
import gemini5 from '../images/Gemini_Generated_Image_c32qxvc32qxvc32q.png';
import gemini6 from '../images/Gemini_Generated_Image_dsd9gzdsd9gzdsd9.png';
import gemini7 from '../images/Gemini_Generated_Image_ildjxsildjxsildj.png';
import gemini8 from '../images/Gemini_Generated_Image_qwdh2dqwdh2dqwdh.png';
import gemini9 from '../images/Gemini_Generated_Image_s4oshvs4oshvs4os.png';
import gemini10 from '../images/Gemini_Generated_Image_t10uspt10uspt10u.png';
import heroImg from '../images/hero_image.png';
import multiple from '../images/multiple.jpg';
import hijab from '../images/hijab.jpg';

const galleryImages = [
    { id: 1, src: gemini3, size: 'large', offset: 'mt-0' },
    { id: 2, src: gemini4, size: 'tall', offset: 'mt-20' },
    { id: 3, src: heroImg, size: 'wide', offset: 'mt-10' },
    { id: 4, src: gemini1, size: 'medium', offset: 'mt-32' },
    { id: 5, src: gemini9, size: 'tall', offset: 'mt-0' },
    { id: 6, src: multiple, size: 'wide', offset: 'mt-24' },
    { id: 7, src: gemini5, size: 'large', offset: 'mt-12' },
    { id: 8, src: gemini2, size: 'medium', offset: 'mt-40' },
    { id: 9, src: gemini6, size: 'tall', offset: 'mt-8' },
    { id: 10, src: gemini7, size: 'medium', offset: 'mt-16' },
    { id: 11, src: gemini8, size: 'wide', offset: 'mt-32' },
    { id: 12, src: gemini10, size: 'medium', offset: 'mt-0' },
    { id: 13, src: hijab, size: 'tall', offset: 'mt-20' },
];

const GalleryPage = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-dark min-h-screen overflow-hidden">
            <Navbar />
            <ImageModal selectedImage={selectedImage} onClose={() => setSelectedImage(null)} />

            <header className="pt-32 pb-16 px-6 text-center relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="font-playfair text-6xl md:text-8xl text-gold mb-4"
                >
                    THE ARCHIVE
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="font-outfit text-white/60 tracking-[0.3em] uppercase text-sm"
                >
                    Curated Moments of Excellence
                </motion.p>
            </header>

            {/* Chaotic Masonry Grid */}
            <div className="max-w-[1920px] mx-auto px-4 md:px-8 pb-32">
                <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8">
                    {galleryImages.map((img, index) => (
                        <motion.div
                            key={img.id}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: index % 3 * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className={`relative break-inside-avoid mb-8 ${img.offset} cursor-zoom-in`}
                            onClick={() => setSelectedImage(img.src)}
                        >
                            <div className="relative overflow-hidden group">
                                <img
                                    src={img.src}
                                    alt={`Gallery Item ${img.id}`}
                                    className="w-full h-auto object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-overlay"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                                    <span className="font-outfit text-xs text-black bg-gold px-3 py-1 font-bold tracking-widest">
                                        REF. {img.id.toString().padStart(3, '0')}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default GalleryPage;
