import React, { useState } from 'react';
import { motion } from 'framer-motion';
// --- Lucide React Icons ka istemal ---
import { User, Mail, Phone, MapPin, Briefcase, FileUp, Send } from 'lucide-react';
import img from "../assets/career/img.jpg";

// --- Simple Illustration Component ---
const FormIllustration = () => (
    <div className="flex items-center justify-center h-full">
        <svg width="250" height="350" viewBox="0 0 250 350" xmlns="http://www.w3.org/2000/svg">
            {/* Question Mark */}
            <motion.path 
                d="M100 150 Q125 100 150 150 T200 150" 
                stroke="#ef4444" 
                strokeWidth="25" 
                fill="none" 
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
            />
            <motion.circle 
                cx="150" 
                cy="220" 
                r="15" 
                fill="#ef4444"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1 }}
            />
            
            {/* Stick Figure */}
            <motion.g
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <circle cx="50" cy="180" r="30" fill="#f3f4f6" />
                <path d="M50 210 L50 280 L20 340 M50 280 L80 340" stroke="#f3f4f6" strokeWidth="15" strokeLinecap="round" fill="none" />
                <path d="M50 230 L90 200" stroke="#f3f4f6" strokeWidth="15" strokeLinecap="round" fill="none" />
                 <rect x="40" y="200" width="20" height="30" fill="#111827" />
            </motion.g>
        </svg>
    </div>
);


// --- Main Apply Now Section Component ---
const ApplyNow = () => {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
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
        <section className="bg-gray-50 py-20 lg:py-28">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Form */}
                    <motion.div
                        className="bg-white p-8 rounded-2xl shadow-lg"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerVariants}
                    >
                        <motion.h2 variants={itemVariants} className="text-3xl font-bold text-gray-800 mb-6">
                            Apply Now
                        </motion.h2>
                        
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <motion.input variants={itemVariants} type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                <motion.input variants={itemVariants} type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                <motion.input variants={itemVariants} type="tel" placeholder="Your Phone" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                <motion.select variants={itemVariants} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option>City</option>
                                    <option>Jaipur</option>
                                    <option>Delhi</option>
                                    <option>Mumbai</option>
                                </motion.select>
                                <motion.select variants={itemVariants} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option>Position</option>
                                    <option>Frontend Developer</option>
                                    <option>Backend Developer</option>
                                    <option>UI/UX Designer</option>
                                </motion.select>
                                
                                <motion.div variants={itemVariants} className="relative">
                                     <input type="file" id="cv-upload" className="absolute w-0 h-0 opacity-0" />
                                     <label htmlFor="cv-upload" className="w-full p-3 border border-gray-300 rounded-lg flex justify-between items-center cursor-pointer text-gray-500">
                                        <span>Upload CV (DOC & PDF)</span>
                                        <FileUp size={20} />
                                     </label>
                                </motion.div>
                            </div>

                            <motion.textarea variants={itemVariants} placeholder="Message" rows="4" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></motion.textarea>
                            
                            <motion.button 
                                variants={itemVariants} 
                                type="submit" 
                                className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center space-x-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Send size={20} />
                                <span>Send Message</span>
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Right Illustration */}
                    <div>
                       <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ApplyNow;