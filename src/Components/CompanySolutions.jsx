import React from 'react';
import { motion } from 'framer-motion';
import { Check, Diamond, CalendarCheck, Briefcase, Wallet } from 'lucide-react';

const CompanySolution = () => {

    const features = [
        'Cloud-native solutions', '24/7 Tech Support', 'Corporate Innovation',
        'Mobile-First Design', 'Digital Growth', 'Free Consultation'
    ];

    const services = [
        {
            icon: <Diamond size={40} className="text-blue-500" />,
            title: 'Strategic Analysis',
            description: 'We analyze your business DNA to identify growth bottlenecks and implement data-driven digital transformations.'
        },
        {
            icon: <CalendarCheck size={40} className="text-green-500" />,
            title: 'SEO & Digital Growth',
            description: 'Boosting your digital footprint with targeted SEO strategies to ensure your brand is visible, relevant, and dominant online.'
        },
        {
            icon: <Briefcase size={40} className="text-purple-500" />,
            title: 'Creative Product Design',
            description: 'Designing intuitive, user-centric interfaces (UI/UX) that engage audiences and elevate your brand identity.'
        },
        {
            icon: <Wallet size={40} className="text-yellow-500" />,
            title: 'Scalable Digital Platforms',
            description: 'Building robust, scalable corporate architectures that streamline operations and maximize cost-efficiency.'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
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
        <section className="bg-gray-50 py-20 lg:py-28">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Content */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={containerVariants}
                    >
                        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Innovative Solutions Crafted <br />
                            For <span className="text-blue-600">Your Business Growth</span>
                        </motion.h2>
                        <motion.div variants={itemVariants} className="mt-4 h-1.5 w-24 bg-green-500 rounded-full" />
                        
                        <motion.p variants={itemVariants} className="mt-6 text-gray-600 text-lg leading-relaxed">
                            At <strong>Renbufix Technologies</strong>, we deliver professional and versatile business solutions, tailored for a wide range of industries including corporate finance, healthcare, and advisory services. We excel in handling diverse projects and creating high-quality digital platforms that drive real results.
                        </motion.p>
                        
                        <motion.div variants={itemVariants} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {features.map((feature, index) => (
                                <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center hover:shadow-md transition-shadow">
                                    <div className="flex items-center">
                                        <div className="bg-blue-50 p-1.5 rounded-full mr-3">
                                            <Check size={16} className="text-blue-600" />
                                        </div>
                                        <span className="text-gray-700 font-medium">{feature}</span>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Service Cards */}
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={containerVariants}
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-8 rounded-2xl shadow-lg text-center transform hover:-translate-y-2 transition-all duration-300 border-b-4 border-transparent hover:border-blue-500 group"
                                variants={itemVariants}
                            >
                                <div className="inline-block p-4 bg-gray-50 rounded-full mb-6 group-hover:bg-blue-50 transition-colors">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CompanySolution;