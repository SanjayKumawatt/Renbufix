import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    ChevronRight, FileText, ShieldAlert, CreditCard, 
    Copyright, AlertTriangle, Scale, HelpCircle 
} from 'lucide-react';

// --- 1. Hero Section Component ---
const TermsHero = () => {
    const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } } };
    const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } } };

    return (
        <section className="relative h-[400px] flex items-center justify-center text-white overflow-hidden pt-20">
            <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/90 to-black/80 z-10"></div>
            
            <motion.div className="relative z-20 text-center px-4" initial="hidden" animate="visible" variants={containerVariants}>
                <motion.div variants={itemVariants} className="flex justify-center mb-4">
                    <Scale size={48} className="text-blue-400" />
                </motion.div>
                <motion.h1 className="text-4xl md:text-6xl font-extrabold tracking-tight" variants={itemVariants}>
                    Terms & Conditions
                </motion.h1>
                <motion.p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto" variants={itemVariants}>
                    Please read these terms carefully before using our services.
                </motion.p>
                <motion.div className="mt-8 flex items-center justify-center text-lg text-gray-300" variants={itemVariants}>
                    <Link to="/" className="hover:text-blue-400 transition-colors font-medium">HOME</Link>
                    <ChevronRight size={20} className="mx-2 text-gray-500" />
                    <span className="text-blue-400 font-semibold">Terms & Conditions</span>
                </motion.div>
            </motion.div>
        </section>
    );
};

// --- 2. Content Section ---
const TermsContent = () => {
    const sections = [
        {
            icon: <FileText size={24} />,
            title: "Acceptance of Terms",
            content: "By accessing or using the services provided by Renbufix Technologies Private Limited, you agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, you may not access our services."
        },
        {
            icon: <ShieldAlert size={24} />,
            title: "Use of Services",
            content: "You agree to use our software and services only for lawful purposes. You are prohibited from using our products to violate any local, state, national, or international law. Misuse or unauthorized access to our systems will result in immediate termination of services."
        },
        {
            icon: <Copyright size={24} />,
            title: "Intellectual Property",
            content: "The Service and its original content, features, and functionality are and will remain the exclusive property of Renbufix Technologies and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Renbufix Technologies."
        },
        {
            icon: <CreditCard size={24} />,
            title: "Payment & Subscriptions",
            content: "Some parts of the Service are billed on a subscription basis. You will be billed in advance on a recurring and periodic basis (such as monthly or annually). Payments are non-refundable unless otherwise stated in a specific service agreement."
        },
        {
            icon: <AlertTriangle size={24} />,
            title: "Limitation of Liability",
            content: "In no event shall Renbufix Technologies, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses."
        },
        {
            icon: <Scale size={24} />,
            title: "Governing Law",
            content: "These Terms shall be governed and construed in accordance with the laws of India, specifically under the jurisdiction of Haryana, without regard to its conflict of law provisions."
        }
    ];

    return (
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div 
                    className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-t-4 border-blue-600"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="mb-10 border-b border-gray-200 pb-8">
                        <h2 className="text-3xl font-bold text-gray-900">Terms of Service</h2>
                        <p className="mt-4 text-gray-600 leading-relaxed">
                            Welcome to <strong>Renbufix Technologies Private Limited</strong>. These terms and conditions outline the rules and regulations for the use of Renbufix Technologies' Website and Services.
                        </p>
                    </div>

                    <div className="space-y-12">
                        {sections.map((section, index) => (
                            <div key={index} className="flex flex-col md:flex-row gap-6">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                                        {section.icon}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {section.content}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-200 bg-gray-50 p-6 rounded-xl">
                        <div className="flex items-start">
                            <HelpCircle className="text-blue-600 mt-1 mr-4" size={24} />
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">Questions?</h3>
                                <p className="text-gray-600 mt-2">
                                    If you have any questions about our Terms and Conditions, please contact us:
                                </p>
                                <div className="mt-4 text-gray-700">
                                    <p><strong>Email:</strong> <a href="mailto:support@renbufix.com" className="text-blue-600 hover:underline">support@renbufix.com</a></p>
                                    <p className="mt-1"><strong>Address:</strong> G 24 Block 20, Dheeraj Nagar, Amarnagar (Faridabad), Faridabad, Haryana, India, 121003</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

// --- Main Page Component ---
const TermsConditionsPage = () => {
    return (
        <div className="bg-white">
            <TermsHero />
            <TermsContent />
        </div>
    );
};

export default TermsConditionsPage;