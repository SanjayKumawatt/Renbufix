import React from 'react';
import { motion } from 'framer-motion';
// --- Lucide React Icons का इस्तेमाल ---
import { 
    Code, ShoppingCart, Paintbrush, Package, 
    Smartphone, Network, Power, Cloud, Landmark, 
    Layers, Zap, Globe, FileText
} from 'lucide-react';

// --- Main Services Section Component ---
const ServicesSection = () => {

    // आपकी नई सेवाएं (Services) - 'Service Now' हटाई गई
    const newServices = [
        { icon: <Globe size={28} className="text-blue-600" />, title: 'Static Website Development', description: 'Simple, fast, and secure websites ideal for portfolios and informative pages.' },
        { icon: <Network size={28} className="text-blue-600" />, title: 'Dynamic Website', description: 'Interactive and feature-rich websites with content management systems (CMS) and databases.' },
        { icon: <Paintbrush size={28} className="text-blue-600" />, title: 'Logo & Graphic Designing', description: 'Creative and professional design services for logos, branding, and marketing materials.' },
        { icon: <Code size={28} className="text-blue-600" />, title: 'Custom Software Development', description: 'Tailor-made software solutions designed to streamline your unique business operations.' },
        { icon: <ShoppingCart size={28} className="text-blue-600" />, title: 'Ecommerce Software Development', description: 'Developing robust, scalable, and secure online stores for seamless transactions.' },
        { icon: <Smartphone size={28} className="text-blue-600" />, title: 'Mobile App Development', description: 'Building high-performance native and cross-platform apps for Android and iOS.' },
        
        { icon: <Package size={28} className="text-blue-600" />, title: 'Product Development', description: 'End-to-end product engineering from conceptualization to market launch and scaling.' },
        
        { icon: <Layers size={28} className="text-blue-600" />, title: 'SEO/SMO Services', description: 'Boost your online visibility and drive organic traffic with proven search engine optimization and social media strategies.' },
        { icon: <Zap size={28} className="text-blue-600" />, title: 'Payment Gateway Integration', description: 'Secure and seamless integration of various payment gateways for hassle-free online transactions.' },
    ];

    const services = newServices; // सेवाओं को इस्तेमाल करने के लिए 'services' में असाइन किया

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

    // ग्रिड के कॉलम की संख्या को सेवाओं की संख्या के आधार पर समायोजित किया गया
    const gridCols = services.length > 4 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'; // 9 सेवाओं के लिए 3 कॉलम बेहतर दिखेंगे

    return (
        <section className="relative bg-gray-50 py-20 lg:py-28 overflow-hidden">
            {/* Background Wavy Line SVG */}
            <div className="absolute top-10 left-0 w-full h-full z-0 opacity-40">
                <svg width="100%" height="500" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path fill="none" stroke="#bfdbfe" strokeWidth="2" d="M0,224L48,208C96,192,192,160,288,165.3C384,171,480,213,576,240C672,267,768,277,864,256C960,235,1056,181,1152,149.3C1248,117,1344,107,1392,101.3L1440,96"></path>
                </svg>
            </div>

            {/* Floating Green Dot - Icon color changed to blue for better theme consistency */}
            <motion.div 
                className="absolute top-1/2 left-12 w-4 h-4 bg-blue-400 rounded-full z-0"
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
                    <p className="mt-4 text-lg text-gray-500">
                        Cutting-edge solutions to empower your business.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div 
                    className={`grid grid-cols-1 sm:grid-cols-2 ${gridCols} gap-8 max-w-6xl mx-auto`}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {services.map((service, index) => (
                        <motion.div 
                            key={index} 
                            className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col border border-gray-100"
                            variants={cardVariants}
                        >
                            <div className="flex flex-col h-full">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-gray-800 pr-4 leading-snug">{service.title}</h3>
                                    <div className="bg-blue-50 p-3 rounded-xl shrink-0"> 
                                        {/* Icon Color updated to blue for consistency with the title span */}
                                        {React.cloneElement(service.icon, { className: "text-blue-600" })} 
                                    </div>
                                </div>
                                <p className="text-gray-600 flex-grow">{service.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesSection;