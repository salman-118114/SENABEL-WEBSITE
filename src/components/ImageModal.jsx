import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageModal = ({ selectedImage, onClose }) => {
    if (!selectedImage) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 cursor-zoom-out"
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="relative max-w-7xl max-h-[90vh]"
                    onClick={(e) => e.stopPropagation()}
                >
                    <img
                        src={selectedImage}
                        alt="Enlarged View"
                        className="max-w-full max-h-[90vh] object-contain shadow-2xl border border-gold/20"
                    />

                    <button
                        onClick={onClose}
                        className="absolute -top-12 right-0 text-white/50 hover:text-gold transition-colors font-outfit tracking-widest text-sm uppercase"
                    >
                        Close
                    </button>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ImageModal;
