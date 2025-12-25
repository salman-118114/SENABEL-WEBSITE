import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ImageModal from './ImageModal';

const looks = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1737652423039-10ffe996f632?fm=jpg&q=80&w=1200',
        title: 'The Noir Statement',
        description: 'Modern Indo-Western fusion'
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1737652423292-a6d3e0ac24c0?fm=jpg&q=80&w=1200',
        title: 'Gilded Elegance',
        description: 'Bespoke golden embroidery'
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1737652423189-4a422853c699?fm=jpg&q=80&w=1200',
        title: 'The Sovereign High-Neck',
        description: 'Regal silhouette'
    },
    {
        id: 4,
        image: 'https://images.unsplash.com/photo-1760613130027-3959a3eb939c?fm=jpg&q=80&w=1200',
        title: 'Crimson Heritage',
        description: 'Traditional bridal mastery'
    },
    {
        id: 5,
        image: 'https://images.unsplash.com/photo-1756483510768-60fed6aaa44f?fm=jpg&q=80&w=1200',
        title: 'Scarlet Drama',
        description: 'Evening sophistication'
    },
    {
        id: 6,
        image: 'https://images.unsplash.com/photo-1732128103679-ea486e68ea5d?fm=jpg&q=80&w=1200',
        title: 'Emerald Mystique',
        description: 'Contemporary drape'
    },
    {
        id: 7,
        image: 'https://images.unsplash.com/photo-1737652423418-a5ea06f9ce1a?fm=jpg&q=80&w=1200',
        title: 'Opulent Detail',
        description: 'Hand-crafted luxury'
    },
    {
        id: 8,
        image: 'https://images.unsplash.com/photo-1732128105781-6bc3298111cc?fm=jpg&q=80&w=1200',
        title: 'Garden Couture',
        description: 'Outdoor elegance'
    }
];

const LookbookGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section className="bg-dark py-24 px-4 sm:px-6 lg:px-8">
            <ImageModal selectedImage={selectedImage} onClose={() => setSelectedImage(null)} />

            <div className="max-w-7xl mx-auto mb-16 text-center">
                <h2 className="font-outfit text-4xl md:text-5xl font-light tracking-wide text-gold mb-4">
                    THE COLLECTION
                </h2>
                <div className="w-24 h-0.5 bg-gold/50 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
                {looks.map((look) => (
                    <motion.div
                        key={look.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="group cursor-pointer"
                        onClick={() => setSelectedImage(look.image)}
                    >
                        <div className="relative overflow-hidden mb-6 aspect-[2/3]">
                            <img
                                src={look.image}
                                alt={look.title}
                                className="w-full h-full object-cover transition-transform duration-700 md:duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:opacity-0 transition-opacity duration-500"></div>
                        </div>

                        <div className="text-center">
                            <h3 className="font-outfit text-xl font-normal tracking-wider text-gold uppercase mb-2">
                                {look.title}
                            </h3>
                            <p className="font-inter text-xs tracking-[0.2em] text-gray-400 uppercase">
                                {look.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-20 text-center">
                <button
                    onClick={() => window.location.href = '/gallery'}
                    className="font-outfit text-sm tracking-[0.2em] border border-gold/30 text-gold px-12 py-4 hover:bg-gold hover:text-black transition-all duration-300 uppercase"
                >
                    View Full Lookbook
                </button>
            </div>
        </section>
    );
};

export default LookbookGallery;
