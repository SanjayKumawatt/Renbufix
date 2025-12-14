import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, BarChart3, Building2, Handshake, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CollaborationSection = () => {

    const collaborationCards = [
        {
            icon: <Rocket size={40} className="text-white" />,
            title: 'Startups',
            description: 'We turn napkin sketches into market-ready MVPs. Fast-track your launch and validate your ideas with our agile development approach.',
            bgColor: 'bg-blue-600' // Renbufix Blue
        },
        {
            icon: <BarChart3 size={40} className="text-white" />,
            title: 'SMBs',
            description: 'Empowering growing businesses with scalable tech infrastructure that boosts efficiency, automation, and market reach.',
            bgColor: 'bg-green-500' // Renbufix Green accent
        },
        {
            icon: <Building2 size={40} className="text-white" />,
            title: 'Enterprises',
            description: 'Architecting secure, high-performance digital ecosystems that drive large-scale transformation and operational excellence.',
            bgColor: 'bg-blue-600'
        },
        {
            icon: <Handshake size={40} className="text-white" />,
            title: 'Agencies',
            description: 'Your silent technical partner. We provide white-label development support to help creative agencies deliver more to their clients.',
            bgColor: 'bg-blue-800' // Darker Blue for contrast
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
    };

    return (
        <section className="relative bg-white py-20 lg:py-28 overflow-hidden">
            {/* Decorative Borders */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-100 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-100 to-transparent"></div>

            <div className="container mx-auto px-6">
                {/* Top Section - CTA */}
                <motion.div
                    className="flex flex-col md:flex-row justify-between items-center text-center md:text-left mb-20"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                            Ready to Accelerate Your <br />
                            <span className="text-blue-600">Digital Evolution?</span>
                        </h2>
                        <p className="mt-4 text-gray-600 max-w-2xl text-lg">
                            Partner with <strong>Renbufix</strong> to transform ambitious concepts into tangible success. We engineer software that drives real business growth.
                        </p>
                    </div>
                    <Link to={"/contact"}>
                        <motion.button
                            className="mt-8 md:mt-0 flex items-center font-bold text-blue-600 border-2 border-blue-600 rounded-full py-3 px-8 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <MessageCircle size={20} className="mr-2" />
                            START A PROJECT
                        </motion.button>
                    </Link>
                </motion.div>

                {/* Bottom Section - Content & Cards */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left Text Content */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={containerVariants}
                    >
                        <motion.h3 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-900">
                            Who We <span className="text-blue-600">Empower</span>
                        </motion.h3>
                        <motion.h4 variants={itemVariants} className="mt-4 text-xl font-semibold text-gray-700">
                            Fueling Startups, Scaling SMBs, & Cloud-native solutions.
                        </motion.h4>
                        
                        <motion.div className="space-y-6 mt-8">
                            <motion.p variants={itemVariants} className="text-gray-600 text-lg leading-relaxed">
                                At Renbufix, we don't just build software; we build partnerships. Whether you are a disruptor challenging the status quo or an industry leader seeking efficiency, we adapt to your vision.
                            </motion.p>
                            <motion.p variants={itemVariants} className="text-gray-600 text-lg leading-relaxed">
                                Our flexible engagement models ensure that you get the exact technical expertise you need-from rapid prototyping to full-scalable application ecosystems.
                            </motion.p>
                            <motion.p variants={itemVariants} className="text-gray-600 text-lg leading-relaxed border-l-4 border-green-500 pl-4 italic">
                                "We deliver reliability, innovation, and speed-ensuring your technology becomes your biggest competitive advantage."
                            </motion.p>
                        </motion.div>
                    </motion.div>

                    {/* Right Cards Grid */}
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={containerVariants}
                    >
                        {collaborationCards.map((card, index) => (
                            <motion.div
                                key={index}
                                className={`p-6 lg:p-8 rounded-2xl text-white flex flex-col items-start shadow-xl hover:shadow-2xl transition-shadow duration-300 ${card.bgColor}`}
                                variants={itemVariants}
                            >
                                <div className="mb-4 p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                                    {card.icon}
                                </div>
                                <h4 className="text-2xl font-bold mb-3">{card.title}</h4>
                                <p className="opacity-90 leading-relaxed text-sm lg:text-base">
                                    {card.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CollaborationSection;