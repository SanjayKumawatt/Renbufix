import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

// Placeholder for the illustration
import designIllustration from  "../assets/websitedevelopment/img1.png";

const DesignUsability = () => {

    const principles = [
        'Seamless Functionality',
        'Intuitive User Experience',
        'Scalable Customization',
        'Aesthetic Innovation'
    ];

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
                             {/* Glow Effect */}
                             <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-green-100 rounded-full blur-3xl opacity-60"></div>
                             <img 
                                src={designIllustration} 
                                alt="Design and Usability Illustration"
                                className="relative w-full h-auto object-contain drop-shadow-2xl rounded-xl transform hover:scale-[1.02] transition-transform duration-500"
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
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">DESIGN</span> & <span className="text-blue-600">USABILITY</span>
                        </motion.h2>
                        
                        <motion.p variants={itemVariants} className="mt-6 text-gray-600 text-lg leading-relaxed">
                            At <strong>Renbufix</strong>, we believe that great design is not just about how it looks, but how it works. Our dedicated team of UI/UX architects, developers, and content strategists collaborates to craft digital experiences that captivate your audience and drive engagement.
                        </motion.p>
                        
                        <motion.p variants={itemVariants} className="mt-4 text-gray-600 text-lg leading-relaxed">
                           We focus on building robust, user-friendly platforms that combine stunning visuals with powerful backend functionality, ensuring your digital presence is both beautiful and effective.
                        </motion.p>
                        
                        <motion.p variants={itemVariants} className="mt-6 text-gray-800 font-semibold">
                           Our core design philosophy revolves around:
                        </motion.p>

                        <motion.div variants={itemVariants} className="mt-6 space-y-4">
                            {principles.map((principle, index) => (
                                <div key={index} className="flex items-center group">
                                    <CheckCircle2 size={24} className="text-blue-600 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                    <span className="ml-4 text-gray-700 font-medium text-lg group-hover:text-blue-600 transition-colors">{principle}</span>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default DesignUsability;