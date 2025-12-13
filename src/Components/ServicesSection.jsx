import React from 'react';
import { motion } from 'framer-motion';
// --- Lucide React Icons ka istemal ---
import { Smartphone, Code, ShoppingCart, Paintbrush, Network, Landmark, Power, Building, Cloud, Package } from 'lucide-react';

// --- Main Services Section Component ---
const ServicesSection = () => {

    const services = [
        { icon: <Smartphone size={28} className="text-green-600" />, title: 'Mobile App Development', description: 'Custom Android & iOS apps built for performance, scalability, and user experience.' },
        { icon: <Code size={28} className="text-green-600" />, title: 'Website Development', description: 'Modern, responsive websites that drive engagement, leads, and conversions.' },
        { icon: <ShoppingCart size={28} className="text-green-600" />, title: 'Ecommerce Solutions', description: 'Build secure and scalable online stores with personalized user journeys.' },
        { icon: <Paintbrush size={28} className="text-green-600" />, title: 'UI/UX Design', description: 'Crafting intuitive interfaces and seamless user experiences for every platform.' },
        { icon: <Package size={28} className="text-green-600" />, title: 'Product Development', description: 'End-to-end product engineering from conceptualization to market launch.' }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const cardVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 100 }
        }
    };

    return (
        <section className="relative bg-gray-50 py-20 lg:py-28 overflow-hidden">
            {/* Background Wavy Line SVG */}
            <div className="absolute top-10 left-0 w-full h-full z-0 opacity-40">
                <svg width="100%" height="500" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path fill="none" stroke="#dbeafe" strokeWidth="2" d="M0,224L48,208C96,192,192,160,288,165.3C384,171,480,213,576,240C672,267,768,277,864,256C960,235,1056,181,1152,149.3C1248,117,1344,107,1392,101.3L1440,96"></path>
                </svg>
            </div>

            {/* Floating Green Dot */}
            <motion.div 
                className="absolute top-1/2 left-12 w-4 h-4 bg-green-400 rounded-full z-0"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity }}
            />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Title */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                        Our <span className="text-blue-600">Services</span>
                    </h2>
                </motion.div>

                {/* Services Grid */}
                <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }} // Thoda jaldi load hoga
                >
                    {services.map((service, index) => (
                        <motion.div 
                            key={index} 
                            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
                            variants={cardVariants}
                        >
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-gray-800 pr-4">{service.title}</h3>
                                    <div className="bg-green-100 p-2 rounded-lg shrink-0"> {/* shrink-0 added to prevent icon squishing */}
                                        {service.icon}
                                    </div>
                                </div>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesSection;