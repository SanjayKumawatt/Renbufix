import React from 'react';
import { motion } from 'framer-motion';

// --- SVG Illustration Component ---
// Updated colors to match Renbufix Theme (Blue/Green)
const CommunicationIllustration = () => {
    return (
        <div className="relative w-full max-w-lg mx-auto">
            {/* Base Shape */}
            <motion.div 
                className="w-full h-auto"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <svg viewBox="0 0 400 300" className="w-full h-auto">
                    {/* Soft background shape */}
                    <path d="M50 300 C 150 150, 250 150, 350 300 Z" fill="#eff6ff" />
                </svg>
            </motion.div>

            {/* People and Chat Bubbles */}
            <div className="absolute inset-0 flex items-center justify-center">
                {/* Person 1 (Left) */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.5 }} className="absolute bottom-12 left-8 w-24">
                     <svg viewBox="0 0 100 150">
                        <circle cx="50" cy="25" r="15" fill="#334155"/>
                        <path d="M50 40 L25 90 L75 90 Z" fill="#475569"/>
                        <circle cx="50" cy="120" r="25" fill="#3b82f6"/> {/* Blue base */}
                     </svg>
                </motion.div>

                {/* Person 2 (Top - Center) */}
                <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.5 }} className="absolute top-0 left-1/2 -translate-x-1/2 w-24">
                     <svg viewBox="0 0 100 150">
                        <circle cx="50" cy="25" r="15" fill="#1f2937"/>
                        <path d="M50 40 L30 90 L70 90 Z" fill="#374151"/>
                        <circle cx="50" cy="120" r="25" fill="#22c55e"/> {/* Green base */}
                     </svg>
                </motion.div>

                {/* Person 3 (Right) */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.5 }} className="absolute bottom-12 right-8 w-24">
                     <svg viewBox="0 0 100 150">
                        <circle cx="50" cy="25" r="15" fill="#334155"/>
                        <path d="M50 40 L25 90 L75 90 Z" fill="#475569"/>
                        <circle cx="50" cy="120" r="25" fill="#3b82f6"/> {/* Blue base */}
                     </svg>
                </motion.div>

                {/* Chat bubbles */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6, duration: 0.5 }}>
                    <div className="absolute top-10 left-12 w-20 h-8 bg-blue-500 rounded-lg transform -rotate-12 shadow-lg flex items-center justify-center">
                        <div className="w-10 h-1 bg-white/30 rounded-full"></div>
                    </div>
                    <div className="absolute top-20 right-12 w-20 h-8 bg-green-500 rounded-lg transform rotate-12 shadow-lg flex items-center justify-center">
                        <div className="w-10 h-1 bg-white/30 rounded-full"></div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};


// --- Main What We Do Section Component ---
const WhatWeDo = () => {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { x: -20, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 100 }
        }
    };

    return (
        <section className="bg-white py-20 lg:py-28 overflow-hidden border-b border-gray-100">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={containerVariants}
                    >
                        <motion.p variants={itemVariants} className="text-blue-600 font-bold uppercase tracking-widest text-sm">
                            WHAT WE DO
                        </motion.p>
                        <motion.h2 variants={itemVariants} className="mt-3 text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                            Pioneering Solutions for a <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">Digital India</span>
                        </motion.h2>
                        
                        <motion.p variants={itemVariants} className="mt-6 text-gray-600 text-lg leading-relaxed">
                            <strong>Renbufix Technologies</strong> is at the forefront of financial accessibility. Our initiative delivers a robust ecosystem of online payment solutions and accessible physical touchpoints, bridging the gap between rural heartlands and urban centers to ensure seamless consumer convenience.
                        </motion.p>
                        
                        <motion.p variants={itemVariants} className="mt-4 text-gray-600 text-lg leading-relaxed">
                            As a technology-first organization, we champion <strong>financial and social inclusion</strong> through strategic alliances with banking and government bodies. Our <em>"Pay in Seconds"</em> philosophy is powered by a world-class electronic transaction system, empowering millions to transact swiftly and effortlessly.
                        </motion.p>
                    </motion.div>

                    {/* Right Image/Illustration */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <CommunicationIllustration />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;