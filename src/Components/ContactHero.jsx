import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

// --- Main Contact Us Hero Section Component ---
const ContactHero = () => {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 100 }
        }
    };

    return (
        <section className="relative h-80 md:h-96 flex items-center justify-center text-white overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                // Aap yahan contact-specific image laga sakte hain
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop')" }}
            ></div>
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            
            {/* Angled Shape Overlays for style */}
            <div className="absolute top-0 left-0 w-1/3 h-full bg-gray-900/30 skew-x-[-20deg] transform -translate-x-1/2 z-10"></div>
            <div className="absolute bottom-0 right-0 w-1/3 h-full bg-blue-900/20 skew-x-[-20deg] transform translate-x-1/2 z-10"></div>

            {/* Content */}
            <motion.div 
                className="relative z-20 text-center"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.h1 
                    className="text-5xl md:text-7xl font-extrabold tracking-tight"
                    variants={itemVariants}
                >
                    Contact Us
                </motion.h1>
                
                <motion.div 
                    className="mt-4 flex items-center justify-center text-lg text-gray-300"
                    variants={itemVariants}
                >
                    <Link to="/" className="hover:text-blue-400 transition-colors">
                        HOME
                    </Link>
                    <ChevronRight size={20} className="mx-1" />
                    <span>Contact Us</span>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default ContactHero;