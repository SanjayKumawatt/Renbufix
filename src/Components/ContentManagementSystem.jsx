import React from 'react';
import { motion } from 'framer-motion';

// --- Animated CMS Diagram Component ---
const CmsDiagram = () => {
    const items = [
        { name: 'Create', color: 'bg-red-500' },
        { name: 'Manage', color: 'bg-green-500' },
        { name: 'Measure', color: 'bg-purple-500' },
        { name: 'Deliver', color: 'bg-cyan-500' },
        { name: 'Develop', color: 'bg-orange-500' },
        { name: 'Optimize', color: 'bg-pink-500' },
        { name: 'Extend', color: 'bg-lime-500' },
        { name: 'Modify', color: 'bg-indigo-500' },
    ];

    return (
        <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px] mx-auto my-10 lg:my-0">
            {/* Decorative Orbit Rings */}
            <div className="absolute inset-0 border border-dashed border-gray-200 rounded-full animate-[spin_60s_linear_infinite]"></div>
            <div className="absolute inset-8 border border-gray-100 rounded-full"></div>

            {/* Central CMS Circle */}
            <motion.div 
                className="absolute inset-0 m-auto w-32 h-32 flex items-center justify-center bg-blue-600 rounded-full text-white text-3xl font-bold shadow-xl z-20"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, type: 'spring' }}
            >
                CMS
            </motion.div>

            {/* Surrounding Circles (Mathematically Positioned) */}
            {items.map((item, index) => {
                const angle = (index / items.length) * 2 * Math.PI - (Math.PI / 2); // Start from top
                const radius = 145; // Distance from center
                // Calculating percentage positions for absolute placement
                const left = 50 + (Math.cos(angle) * 45); // 45% radius to keep inside 100% box
                const top = 50 + (Math.sin(angle) * 45); 

                return (
                    <motion.div
                        key={item.name}
                        className={`absolute w-20 h-20 md:w-24 md:h-24 flex items-center justify-center text-white font-semibold rounded-full text-sm text-center p-2 shadow-lg z-10 ${item.color}`}
                        style={{ 
                            left: `${left}%`, 
                            top: `${top}%`, 
                            transform: 'translate(-50%, -50%)' 
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                    >
                        {item.name}
                    </motion.div>
                );
            })}
        </div>
    );
};


// --- Main Section Component ---
const ContentManagementSystem = () => {

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

    return (
        <section className="bg-gray-50 py-20 lg:py-28 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Diagram */}
                    <div className="order-2 lg:order-1">
                        <CmsDiagram />
                    </div>

                    {/* Right Content */}
                    <motion.div
                        className="order-1 lg:order-2"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={containerVariants}
                    >
                        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">EFFECTIVE CONTENT MANAGEMENT</span> <br/> 
                            <span className="text-blue-600">SYSTEM (CMS)</span>
                        </motion.h2>
                        
                        <motion.p variants={itemVariants} className="mt-6 text-gray-600 text-lg leading-relaxed">
                            At <span className="font-bold text-blue-600">Renbufix Technologies</span>, we construct dynamic, secure, and scalable Content Management Systems designed to simplify your entire digital workflow. Our CMS solutions empower you to create, manage, and optimize content with unmatched efficiency and flexibility.
                        </motion.p>
                        
                        <motion.p variants={itemVariants} className="mt-4 text-gray-600 text-lg leading-relaxed">
                            From agile startups to global growth-ready systems, our platforms enable teams to seamlessly upload, edit, and organize digital assets-including text, images, videos, and documents-all from a centralized, intuitive interface. With support for custom plugins and future-ready integrations, Renbufix ensures your CMS evolves alongside your business.
                        </motion.p>
                        
                        <motion.div variants={itemVariants} className="mt-8 flex gap-4">
                            <div className="px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm text-sm font-medium text-gray-600">Custom Plugins</div>
                            <div className="px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm text-sm font-medium text-gray-600">Easy Integration</div>
                            <div className="px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm text-sm font-medium text-gray-600">Secure Access</div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContentManagementSystem;