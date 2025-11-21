import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    ChevronRight, Shield, Lock, Eye, Database, 
    FileText, Globe, UserCheck, Mail 
} from 'lucide-react';

// --- 1. Hero Section Component ---
const PrivacyHero = () => {
    const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } } };
    const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } } };

    return (
        <section className="relative h-[400px] flex items-center justify-center text-white overflow-hidden pt-20">
            <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-black/80 z-10"></div>
            
            <motion.div className="relative z-20 text-center px-4" initial="hidden" animate="visible" variants={containerVariants}>
                <motion.div variants={itemVariants} className="flex justify-center mb-4">
                    <Shield size={48} className="text-blue-400" />
                </motion.div>
                <motion.h1 className="text-4xl md:text-6xl font-extrabold tracking-tight" variants={itemVariants}>
                    Privacy Policy
                </motion.h1>
                <motion.p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto" variants={itemVariants}>
                    Your privacy is our priority. Learn how we protect your data.
                </motion.p>
                <motion.div className="mt-8 flex items-center justify-center text-lg text-gray-300" variants={itemVariants}>
                    <Link to="/" className="hover:text-blue-400 transition-colors font-medium">HOME</Link>
                    <ChevronRight size={20} className="mx-2 text-gray-500" />
                    <span className="text-blue-400 font-semibold">Privacy Policy</span>
                </motion.div>
            </motion.div>
        </section>
    );
};

// --- 2. Content Section ---
const PrivacyContent = () => {
    const sections = [
        {
            icon: <Eye size={24} />,
            title: "Information We Collect",
            content: [
                "Personal Identification Information: Name, email address, phone number, etc.",
                "Technical Data: IP address, browser type, operating system, and usage patterns.",
                "Usage Data: Information about how you use our website, products, and services."
            ]
        },
        {
            icon: <Database size={24} />,
            title: "How We Use Your Information",
            content: [
                "To provide and maintain our services (Mobile Apps, Web Dev, Recharge Software, etc.).",
                "To notify you about changes to our services.",
                "To provide customer support and respond to inquiries.",
                "To monitor the usage of our services and detect technical issues."
            ]
        },
        {
            icon: <Lock size={24} />,
            title: "Data Security",
            content: [
                "We implement robust security measures to protect your personal data.",
                "We use SSL encryption for data transmission.",
                "Access to personal data is restricted to authorized personnel only.",
                "While we strive to use commercially acceptable means to protect your data, no method of transmission over the internet is 100% secure."
            ]
        },
        {
            icon: <Globe size={24} />,
            title: "Cookies & Tracking",
            content: [
                "We use cookies to improve your experience on our website.",
                "Cookies help us understand user behavior and preferences.",
                "You can choose to disable cookies through your browser settings, though this may affect some website functionality."
            ]
        },
        {
            icon: <UserCheck size={24} />,
            title: "Third-Party Disclosure",
            content: [
                "We do not sell, trade, or rent your personal identification information to others.",
                "We may share generic aggregated demographic information not linked to any personal identification information with our business partners and trusted affiliates."
            ]
        }
    ];

    return (
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div 
                    className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="mb-10 border-b border-gray-200 pb-8">
                        <p className="text-gray-500 text-sm mb-2">Last Updated: October 26, 2023</p>
                        <h2 className="text-3xl font-bold text-gray-900">Introduction</h2>
                        <p className="mt-4 text-gray-600 leading-relaxed">
                            Welcome to <strong>Renbufix Technologies Private Limited</strong>. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
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
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">{section.title}</h3>
                                    <ul className="space-y-3">
                                        {section.content.map((point, i) => (
                                            <li key={i} className="flex items-start text-gray-600 leading-relaxed">
                                                <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-200 bg-blue-50 p-6 rounded-xl">
                        <div className="flex items-start">
                            <Mail className="text-blue-600 mt-1 mr-4" size={24} />
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">Contact Us</h3>
                                <p className="text-gray-600 mt-2">
                                    If you have any questions about this Privacy Policy, please contact us:
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
const PrivacyPolicyPage = () => {
    return (
        <div className="bg-white">
            <PrivacyHero />
            <PrivacyContent />
        </div>
    );
};

export default PrivacyPolicyPage;