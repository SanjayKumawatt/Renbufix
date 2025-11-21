import React from 'react';
import { motion } from 'framer-motion';
// --- Lucide React Icons ka istemal ---
import { Users, DraftingCompass, Palette, MousePointerClick, ClipboardCheck, ScreenShare } from 'lucide-react';

// --- Main Comprehensive Services Section Component ---
const ComprehensiveServices = () => {

    const services = [
        {
            icon: <Users size={32} className="text-blue-600" />,
            title: 'User Research & Strategy',
            description: 'Understanding your target audience is the first step. Our skilled team conducts in-depth user research to gain insights into user behavior, preferences, and pain points. We use this data to develop a tailored UX strategy that aligns with your business goals.'
        },
        {
            icon: <DraftingCompass size={32} className="text-blue-600" />,
            title: 'Wireframing & Prototyping',
            description: 'Before diving into the design phase, we create wireframes and prototypes to visualize the layout and functionality of your digital product. This allows us to test and refine the user journey, ensuring that the final design is user-centric.'
        },
        {
            icon: <Palette size={32} className="text-blue-600" />,
            title: 'UI Design',
            description: 'Our talented UI designers transform wireframes into stunning visual designs that reflect your brand’s identity. We pay meticulous attention to every detail, from typography and color schemes to iconography and imagery.'
        },
        {
            icon: <MousePointerClick size={32} className="text-blue-600" />,
            title: 'Interaction Design',
            description: 'Creating engaging and intuitive interactions is a key part of our UI/UX process. We focus on providing users with seamless navigation and meaningful interactions that enhance their overall experience.'
        },
        {
            icon: <ClipboardCheck size={32} className="text-blue-600" />,
            title: 'Usability Testing',
            description: 'We believe in data-driven decisions. Our usability testing involves gathering feedback from real users to identify any issues and make necessary improvements. This iterative approach ensures that your digital product is refined to perfection.'
        },
        {
            icon: <ScreenShare size={32} className="text-blue-600" />,
            title: 'Responsive Design',
            description: 'In today’s multi-device world, responsive design is crucial. We ensure that your digital product looks and functions flawlessly on various devices and screen sizes, providing a consistent user experience.'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
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

    return (
        <section className="bg-white py-20 lg:py-28">
            <div className="container mx-auto px-6">
                {/* Section Title */}
                <motion.div 
                    className="text-center mb-16 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                        Our Comprehensive <span className="text-blue-600">UI UX Design</span> Services
                    </h2>
                    <p className="mt-4 text-gray-600 text-lg">
                        At Qrologic Software Solutions, we offer a comprehensive suite of UI/UX design services that are designed to take your digital presence to the next level.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={containerVariants}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                            variants={itemVariants}
                        >
                            <div className="mb-4">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ComprehensiveServices;