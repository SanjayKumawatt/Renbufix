import React from 'react';
import { motion } from 'framer-motion';
// Aapki illustration image ka path yahan daalein
import siteSearchIllustration from '../assets/websitedevelopment/img4.png';

// --- Main Site Search Section Component ---
const SiteSearch = () => {

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
    
    const imageVariants = {
         hidden: { x: 20, opacity: 0 },
         visible: { 
            x: 0, 
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    }

    return (
        <section className="bg-white py-20 lg:py-28 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={containerVariants}
                    >
                        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                            <span className="text-green-500">SITE</span> <span className="text-blue-600">SEARCH</span>
                        </motion.h2>
                        
                        <motion.p variants={itemVariants} className="mt-6 text-gray-600">
                            Our Site Search functionality empowers users to explore a website's content and product catalogs with speed and precision. This feature enhances user experience by helping them quickly find the information they need, while also gathering valuable data on popular content and products. Key decisions, such as the placement of the search box and the relevance of search results, are crucial for creating a seamless and intuitive experience for all visitors.
                        </motion.p>
                        
                        <motion.p variants={itemVariants} className="mt-4 text-gray-600">
                           By providing administrators with insights into what users are searching for, our system allows them to make informed, data-driven decisions based on statistical analysis of search patterns.
                        </motion.p>
                    </motion.div>
                    
                    {/* Right Image/Illustration */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={imageVariants}
                    >
                        <img 
                            src={siteSearchIllustration} 
                            alt="Site Search Illustration"
                            className="w-full h-auto object-contain"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SiteSearch;