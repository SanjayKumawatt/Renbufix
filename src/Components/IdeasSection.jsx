import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightCircle } from 'lucide-react';

const IdeasSection = () => {

    // Animation variants for content
    const contentVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: 'easeOut'
            }
        }
    };

    return (
        <section className="relative bg-white py-20 lg:py-32 overflow-hidden">
            {/* Animated Floating Balls */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-8 h-8 bg-green-300 rounded-full z-10 blur-sm"
                animate={{ y: [-15, 15], x: [-10, 10] }}
                transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
            />
            <motion.div
                className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-blue-400 rounded-full z-10 blur-sm"
                animate={{ y: [10, -10], x: [15, -15] }}
                transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
            />
            <motion.div
                className="absolute top-1/2 right-1/4 w-8 h-8 bg-green-300 rounded-full z-10 blur-sm"
                animate={{ y: [-20, 20], x: [10, -10] }}
                transition={{ duration: 7, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
            />

            {/* Large background circle shape */}
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-50 rounded-full transform translate-x-1/2 -translate-y-1/2 z-0 opacity-50"></div>

            <div className="container mx-auto px-6 relative z-20">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Text Content */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={contentVariants}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            From Concept to Code: <br />
                            <span className="text-blue-600">Building Your Digital Future</span>
                        </h2>
                        
                        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                            At <strong>Renbufix</strong>, we don't just build software; we architect solutions. Across Web, Mobile, and Cloud, we craft innovative products perfectly aligned with your business DNA.
                        </p>
                        
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            Navigating the tech landscape can be complex. Our strategists guide you through selecting the optimal technology stack, ensuring your product is built for longevity and performance.
                        </p>
                        
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            Whether it's a rapid MVP launch or a complex enterprise ecosystem, we deliver scalable, high-performance software—faster, smarter, and secure.
                        </p>
                        
                        <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                            <p className="text-gray-700 font-medium italic">
                                "Got a vision? Let's partner up and transform your idea into a market-leading reality."
                            </p>
                        </div>

                        <Link to={"/contact"}>
                            <motion.button
                                className="mt-8 flex items-center gap-2 font-bold text-white bg-blue-600 border-2 border-blue-600 rounded-full py-3 px-8 hover:bg-transparent hover:text-blue-600 transition-all duration-300 shadow-lg hover:shadow-none"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <ArrowRightCircle size={24} />
                                START YOUR PROJECT
                            </motion.button>
                        </Link>
                    </motion.div>

                    {/* Right Video Content */}
                    <motion.div
                        className="relative group"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    >
                        {/* Video Frame Border Effect */}
                        <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-green-400 rounded-2xl opacity-75 blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                        
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                            <video
                                src="https://www.qrologic.com/images/home-pageimg/convert-idea.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Overlay to ensure text contrast if needed, slight tint */}
                            <div className="absolute inset-0 bg-blue-900/10 pointer-events-none"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default IdeasSection;