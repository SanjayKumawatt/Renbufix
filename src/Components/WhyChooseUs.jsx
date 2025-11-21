import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Activity, Presentation, Gauge } from 'lucide-react';

const WhyChooseUs = () => {

    const features = [
        {
            icon: <Briefcase size={36} className="text-purple-600" />,
            title: '360° Tech Partnership',
            heading: "End-to-End Technical Ownership",
            description: 'We don’t just build software; we own the tech lifecycle. From architectural planning to post-launch scaling, we ensure your system remains robust, secure, and future-proof.',
            bgColor: 'bg-purple-100'
        },
        {
            icon: <Activity size={36} className="text-yellow-600" />,
            title: 'Proactive System Health',
            heading: "24/7 Monitoring & Stability",
            description: 'Downtime is not an option. Our automated monitoring and proactive maintenance protocols ensure your digital products run flawlessly, detecting issues before they impact users.',
            bgColor: 'bg-yellow-100'
        },
        {
            icon: <Presentation size={36} className="text-pink-600" />,
            title: 'Strategic Consulting',
            heading: "Domain & Technology Expertise",
            description: 'Leverage our deep industry knowledge. We provide high-level strategic guidance to help you navigate complex tech choices, optimizing costs and maximizing ROI.',
            bgColor: 'bg-pink-100'
        },
        {
            icon: <Gauge size={36} className="text-cyan-600" />,
            title: 'Rapid Market Launch',
            heading: "Accelerated Agile Delivery",
            description: 'Speed matters. With our refined Agile methodologies and pre-built modules, we significantly reduce development time, helping you hit the market ahead of the competition.',
            bgColor: 'bg-cyan-100'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
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

    const cardHoverVariants = {
        hover: { y: -10, opacity: 0 },
        initial: { y: 0, scale: 1 }
    };

    const textPopupVariants = {
        hover: { y: 0, opacity: 1 },
        initial: { y: '100%', opacity: 0 }
    }

    return (
        <section className="relative bg-white py-20 lg:py-28 overflow-hidden">
            {/* Background Wavy Line SVG */}
            <div className="absolute top-0 right-0 w-full h-full z-0 opacity-20 transform scale-x-[-1]">
                <svg width="100%" height="500" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path fill="none" stroke="#dbeafe" strokeWidth="2" d="M0,224L48,208C96,192,192,160,288,165.3C384,171,480,213,576,240C672,267,768,277,864,256C960,235,1056,181,1152,149.3C1248,117,1344,107,1392,101.3L1440,96"></path>
                </svg>
            </div>

            {/* Floating Green Dot */}
            <motion.div
                className="absolute top-16 left-1/3 w-5 h-5 bg-lime-300 rounded-full z-0"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity }}
            />

            <div className="container mx-auto px-6 relative z-10">
                {/* Top Content */}
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-gray-800">
                        Why Partner with <span className="text-blue-600">Renbufix?</span>
                    </motion.h2>
                    <motion.p variants={itemVariants} className="mt-6 text-gray-600 text-lg leading-relaxed">
                        We are more than just developers; we are your <strong>strategic growth partners</strong>. From initial concept to final deployment, <strong>Renbufix</strong> delivers secure, scalable, and high-performance solutions designed to give your business a competitive edge.
                    </motion.p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className={`relative rounded-2xl p-8 text-center flex flex-col items-center justify-center h-72 overflow-hidden shadow-lg border border-transparent hover:border-gray-200 transition-all duration-300 ${feature.bgColor}`}
                            variants={itemVariants}
                            initial="initial"
                            whileHover="hover"
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            {/* Content jo hamesha dikhega */}
                            <motion.div
                                className="flex flex-col items-center justify-center"
                                variants={cardHoverVariants}
                            >
                                <div className="mb-6 p-4 bg-white rounded-full shadow-sm">{feature.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                            </motion.div>

                            {/* Content jo hover par aayega */}
                            <motion.div
                                className="absolute inset-0 flex flex-col items-center justify-center p-6 gap-3 text-center bg-white/95 backdrop-blur-sm"
                                variants={textPopupVariants}
                                transition={{ ease: 'easeInOut', duration: 0.4 }}
                            >
                                <h1 className="text-lg font-bold text-blue-600">{feature.heading}</h1>
                                <p className="text-gray-700 text-sm leading-relaxed">{feature.description}</p>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseUs;