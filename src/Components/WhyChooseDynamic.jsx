import React from 'react';
import { motion } from 'framer-motion';
import { MousePointerClick, Smartphone, Database, UserCheck, TrendingUp, Search } from 'lucide-react';

const WhyChooseDynamic = () => {

    const benefits = [
        {
            icon: <MousePointerClick size={32} className="text-blue-500" />,
            title: 'User Engagement',
            description: 'We craft interactive experiences that captivate visitors. With fluid animations and intuitive navigation, your site becomes a destination that keeps users engaged and drives higher conversion rates.'
        },
        {
            icon: <Smartphone size={32} className="text-green-500" />,
            title: 'Mobile Optimization',
            description: 'In a mobile-first world, we ensure your dynamic site functions flawlessly across every device. This responsiveness not only delights users but is critical for maintaining high search engine rankings.'
        },
        {
            icon: <Database size={32} className="text-purple-500" />,
            title: 'Content Management',
            description: 'Empower your team with a robust CMS. Our dynamic solutions allow you to update content effortlessly without technical hurdles, keeping your business relevant and agile.'
        },
        {
            icon: <UserCheck size={32} className="text-yellow-500" />,
            title: 'Personalization',
            description: 'Leverage data to deliver personalized experiences. Our dynamic sites adapt content based on user behavior, creating tailored journeys that resonate deeply with your target audience.'
        },
        {
            icon: <TrendingUp size={32} className="text-pink-500" />,
            title: 'Scalability',
            description: 'Built for growth. Renbufix dynamic architectures scale efficiently with your business, handling increased traffic and feature expansions without the need for costly overhauls.'
        },
        {
            icon: <Search size={32} className="text-cyan-500" />,
            title: 'SEO Advantage',
            description: 'Engineered for visibility. We integrate SEO best practices into the core of your dynamic site-optimizing structure, metadata, and speed to help you climb the search rankings.'
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
                {/* Section Title */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                        Why Choose <span className="text-blue-600">Dynamic Website Design</span>?
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        At <strong>Renbufix Technologies</strong>, we build dynamic digital platforms that adapt, engage, and grow with your business needs.
                    </p>
                </motion.div>

                {/* Benefits Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={containerVariants}
                >
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 border-b-4 border-transparent hover:border-blue-500 group"
                            variants={itemVariants}
                        >
                            <div className="mb-6 p-3 bg-gray-50 rounded-xl inline-block group-hover:bg-blue-50 transition-colors">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{benefit.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseDynamic;