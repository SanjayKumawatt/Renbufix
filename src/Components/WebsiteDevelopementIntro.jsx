import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

// Placeholder for the illustration
import webDevIllustration from  "../assets/websitedevelopment/img2.png";

const WebsiteDevelopmentIntro = () => {

    const highlights = [
        'Custom CMS Development',
        'Responsive & Mobile-First',
        'High-Performance Architecture',
        'SEO-Optimized Code Structure'
    ];

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
                        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">WEBSITE</span> <span className="text-blue-600">DEVELOPMENT</span>
                        </motion.h2>
                        
                        <motion.p variants={itemVariants} className="mt-6 text-gray-600 text-lg leading-relaxed">
                            At <strong>Renbufix Technologies</strong>, we redefine website development by blending creativity with robust engineering. We don't just build websites; we architect scalable, secure, and high-performance digital platforms that serve as the backbone of your online identity.
                        </motion.p>
                        
                        <motion.p variants={itemVariants} className="mt-4 text-gray-600 text-lg leading-relaxed">
                            From custom programming and database management to crafting user-friendly Content Management Systems (CMS), our skilled developers deliver tailored solutions that amplify your unique selling propositions and drive measurable business growth.
                        </motion.p>

                        <motion.div variants={itemVariants} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {highlights.map((item, index) => (
                                <div key={index} className="flex items-center">
                                    <CheckCircle2 size={20} className="text-blue-600 flex-shrink-0" />
                                    <span className="ml-3 text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                    
                    {/* Right Image/Illustration */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={imageVariants}
                    >
                        <div className="relative">
                            {/* Background Blob */}
                            <div className="absolute top-0 right-0 -mr-4 -mt-4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                            <div className="absolute bottom-0 left-0 -ml-4 -mb-4 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                            
                            <img 
                                src={webDevIllustration} 
                                alt="Website Development Services"
                                className="relative w-full h-auto object-contain drop-shadow-2xl rounded-xl hover:scale-[1.02] transition-transform duration-500"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WebsiteDevelopmentIntro;