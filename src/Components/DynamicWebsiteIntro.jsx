import React from 'react';
import { motion } from 'framer-motion';

// Placeholder for illustration
import dynamicWebIllustration from  "../assets/dynamicweb/img1.svg";

const DynamicWebsiteIntro = () => {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { x: 20, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 100 }
        }
    };

    const imageVariants = {
         hidden: { x: -20, opacity: 0 },
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
                    {/* Left Image/Illustration */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={imageVariants}
                    >
                        <div className="relative">
                            {/* Animated Blobs Background */}
                            <div className="absolute top-10 -left-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                            <div className="absolute top-10 -right-4 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                            
                            <img
                                src={dynamicWebIllustration}
                                alt="Dynamic Website Architecture"
                                className="relative w-full h-auto object-contain drop-shadow-2xl rounded-xl z-10"
                            />
                        </div>
                    </motion.div>

                    {/* Right Content */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={containerVariants}
                    >
                        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                            Renbufix Technologies: Leading the Evolution of <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Dynamic Website Design</span> in India
                        </motion.h2>

                        <motion.p variants={itemVariants} className="mt-6 text-gray-600 text-lg leading-relaxed">
                            At <strong>Renbufix Technologies</strong>, we don't just build static pages; we engineer living digital ecosystems. As a premier dynamic website development company, we specialize in creating highly interactive, database-driven web applications that respond intelligently to user behavior.
                        </motion.p>

                        <motion.p variants={itemVariants} className="mt-4 text-gray-600 text-lg leading-relaxed">
                           We recognize that every business has a unique pulse. That's why we deliver bespoke solutions tailored to your specific operational goals. Whether powered by industry-standard CMS platforms like WordPress and Drupal or our proprietary custom-built frameworks, our dynamic sites are robust, scalable, and optimized for maximum ROI.
                        </motion.p>
                        
                        <motion.div variants={itemVariants} className="mt-8 flex gap-4">
                             <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold border border-blue-100">Real-time Updates</span>
                             <span className="px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-semibold border border-green-100">Database Driven</span>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default DynamicWebsiteIntro;