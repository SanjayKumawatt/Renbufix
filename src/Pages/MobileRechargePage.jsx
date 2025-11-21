import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    ChevronRight, Smartphone, Zap, Settings, BarChart3, ShieldCheck, 
    ThumbsUp, Scale, Package, Users, Layers, CheckSquare, ArrowRightCircle, 
    Globe, Wallet, MessageSquare 
} from 'lucide-react';

// Image Placeholder
import mobileRechargeIllustration from "../assets/mobilerecharge/img.png";

// --- 1. Hero Section Component ---
const MobileRechargeHero = () => {
    const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } } };
    const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } } };

    return (
        <section className="relative h-[500px] md:h-[600px] flex items-center justify-center text-white overflow-hidden pt-20">
            <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/90 to-black/80 z-10"></div>
            
            <motion.div className="relative z-20 text-center px-4" initial="hidden" animate="visible" variants={containerVariants}>
                <motion.h1 className="text-5xl md:text-7xl font-extrabold tracking-tight" variants={itemVariants}>
                    Mobile Recharge Software
                </motion.h1>
                <motion.p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto" variants={itemVariants}>
                    All-in-one Multi-Recharge Software for B2B & B2C Businesses.
                </motion.p>
                <motion.div className="mt-8 flex items-center justify-center text-lg text-gray-300" variants={itemVariants}>
                    <Link to="/" className="hover:text-blue-400 transition-colors font-medium">HOME</Link>
                    <ChevronRight size={20} className="mx-2 text-gray-500" />
                    <span className="text-blue-400 font-semibold">Recharge Software</span>
                </motion.div>
            </motion.div>
        </section>
    );
};

// --- 2. Intro Section Component ---
const MobileRechargeIntro = () => {
    return (
        <section className="bg-white py-20 lg:py-28 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div 
                        initial={{ x: -50, opacity: 0 }} 
                        whileInView={{ x: 0, opacity: 1 }} 
                        viewport={{ once: true }} 
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                            Power Your Business with <span className="text-blue-600">Renbufix Multi-Recharge</span>
                        </h2>
                        <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                            At <strong>Renbufix Technologies</strong>, we provide a comprehensive and robust mobile recharge software solution designed for businesses of all sizes. Our platform empowers you to offer instant mobile, DTH, data card, and utility bill payments for all major operators in India.
                        </p>
                        <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                            Built with cutting-edge technology, our software is secure, scalable, and incredibly user-friendly. Whether you are starting a new recharge business as a Master Distributor or looking to expand your existing retail network, our platform provides the stability and speed you need to succeed.
                        </p>
                    </motion.div>
                    <motion.div 
                        initial={{ x: 50, opacity: 0 }} 
                        whileInView={{ x: 0, opacity: 1 }} 
                        viewport={{ once: true }} 
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="relative">
                             <div className="absolute -inset-4 bg-blue-100 rounded-xl transform -rotate-3"></div>
                             <img src={mobileRechargeIllustration} alt="Mobile Recharge Software Interface" className="relative rounded-xl shadow-2xl w-full h-auto object-cover"/>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

// --- 3. Key Features Section ---
const MobileRechargeFeatures = () => {
    const features = [
        { icon: <Globe size={32} />, title: 'Multi-Operator Support', desc: 'Unified platform for all major mobile (Prepaid/Postpaid), DTH, and Data Card operators across India.' },
        { icon: <Zap size={32} />, title: 'Instant Recharge', desc: 'Lightning-fast transaction processing with 99.9% success rate and instant operator ID generation.' },
        { icon: <Settings size={32} />, title: 'Commission Engine', desc: 'Flexible, multi-tier commission structure. Set flat or percentage-based margins for Retailers and Distributors.' },
        { icon: <Users size={32} />, title: 'Unlimited Network', desc: 'Create and manage an unlimited chain of Master Distributors, Distributors, and Retailers under your brand.' },
        { icon: <BarChart3 size={32} />, title: 'Advanced Reporting', desc: 'Real-time transaction history, profit/loss statements, and ledger reports for complete financial control.' },
        { icon: <Wallet size={32} />, title: 'Secure Wallet', desc: 'Integrated wallet system with auto-refund capabilities for failed transactions and secure fund transfers.' },
    ];

    return (
        <section className="bg-gray-50 py-20 lg:py-28">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">Software Features</h2>
                    <p className="mt-4 text-gray-600">Everything you need to run a successful recharge business.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div 
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border-t-4 border-transparent hover:border-blue-600"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="inline-block p-4 bg-blue-50 text-blue-600 rounded-xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- 4. Why Choose Us Section ---
const WhyChooseMobileRecharge = () => {
     const benefits = [
        { icon: <ThumbsUp size={32}/>, title: 'User-Friendly Interface', description: 'Our panel is designed for simplicity, allowing anyone to manage recharges without technical knowledge.' },
        { icon: <Scale size={32}/>, title: 'Highly Scalable', description: 'Built on cloud infrastructure to handle millions of transactions as your agent network grows.' },
        { icon: <ShieldCheck size={32}/>, title: 'Robust Security', description: 'Advanced encryption, IP locking, and OTP verification to protect your wallet and data.' },
        { icon: <Package size={32}/>, title: 'White Label Solution', description: 'Launch your own brand. We provide the software with your logo, domain, and color scheme.' },
    ];
    return (
         <section className="bg-gray-900 text-white py-20 lg:py-28">
            <div className="container mx-auto px-6">
                 <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold">Why Choose Our Platform?</h2>
                    <p className="mt-4 text-gray-400">Reliability meets Innovation.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                      {benefits.map((benefit, index) => (
                        <motion.div 
                            key={index} 
                            className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-colors"
                             initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="text-blue-400 mb-6">{benefit.icon}</div>
                            <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// --- 5. Platform Benefits (Tabs) ---
const PlatformBenefits = () => {
    const [activeTab, setActiveTab] = useState('B2B/B2C');

    const tabContent = {
        'B2B/B2C': {
            title: 'For B2B & B2C Users',
            icon: <Users size={24} />,
            content: [
                'Recharge Mobile (postpaid/prepaid), DTH, Data card, Landline, Gas, and Electricity bills.',
                'Access services via responsive web panel, Android app, or offline SMS.',
                'Instant wallet credit reversal on rare recharge failures.',
                'Create unlimited white label B2B and B2C users under your hierarchy.',
                'Distribute virtual balance to your entire network instantly.',
                'Modern, SEO-friendly, and responsive user interface.'
            ]
        },
        'Admin': {
            title: 'Admin Control & Management',
            icon: <Settings size={24} />,
            content: [
                'Full authority to create and manage Master Distributors, Distributors, and Retailers.',
                'Add unlimited members and manage their wallet funds and permissions.',
                'Customize commission structures/margins for each member tier individually.',
                'API Switching: Route traffic through different operator APIs for best success rates.',
                'Track Gross Business Volume (GBV), net profit, and loss with daily reports.',
                'Broadcast bulk notifications and news to your members via dashboard.'
            ]
        },
        'API & Customization': {
            title: 'API & Customization',
            icon: <Layers size={24} />,
            content: [
                'Powered by robust REST/XML response-based APIs with high margins.',
                'Capability to integrate multiple third-party APIs (Lapu/Robo) based on preference.',
                'Fully customizable web application to implement your unique business plans.',
                'We deliver the entire application source code ownership (on specific plans).',
                'Seamless integration capabilities with external POS or CRM systems.'
            ]
        },
        'App & SMS': {
            title: 'Mobile App & SMS Facility',
            icon: <Smartphone size={24} />,
            content: [
                'Includes a fully white-labeled Android mobile app published on Play Store.',
                'Manage all business operations on-the-go via the mobile app.',
                'Offline SMS recharge functionality for areas with low internet connectivity.',
                'Customizable SMS keywords for balance check, recharge, and support.',
                'Push notifications for offer updates and transaction status.'
            ]
        }
    };

    return (
        <section className="bg-white py-20 lg:py-28">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">Comprehensive System Capabilities</h2>
                    <p className="mt-4 text-gray-600">Explore the power of Renbufix Multi-Recharge Software.</p>
                </div>
                
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar Tabs */}
                    <div className="flex lg:flex-col justify-start overflow-x-auto lg:overflow-x-visible lg:w-1/4 gap-2 pb-4 lg:pb-0">
                        {Object.keys(tabContent).map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`flex items-center gap-3 flex-shrink-0 w-full text-left px-6 py-4 rounded-xl text-lg font-semibold transition-all duration-200 border-l-4 ${
                                    activeTab === tab 
                                    ? 'bg-blue-600 text-white border-blue-800 shadow-md' 
                                    : 'bg-gray-50 text-gray-600 border-transparent hover:bg-gray-100'
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    
                    {/* Content Area */}
                    <div className="w-full lg:w-3/4 bg-gray-50 p-8 md:p-10 rounded-3xl shadow-inner border border-gray-100">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="flex items-center mb-6">
                                    <div className="p-3 bg-blue-100 text-blue-600 rounded-full mr-4 shadow-sm">
                                        {tabContent[activeTab].icon}
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                                        {tabContent[activeTab].title}
                                    </h3>
                                </div>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {tabContent[activeTab].content.map((point, i) => (
                                        <li key={i} className="flex items-start bg-white p-4 rounded-xl shadow-sm">
                                            <CheckSquare size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700 font-medium leading-snug">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- Main Page Component ---
const MobileRechargePage = () => {
    return (
        <div className="bg-white">
            <MobileRechargeHero />
            <MobileRechargeIntro />
            <MobileRechargeFeatures />
            <WhyChooseMobileRecharge />
            <PlatformBenefits />
            
             {/* CTA Section */}
             <div className="bg-blue-600 py-16 text-center text-white">
                <h2 className="text-3xl font-bold mb-6">Start Your Recharge Business Today</h2>
                <Link to="/contact" className="inline-flex items-center bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors">
                    Get a Demo <ArrowRightCircle className="ml-2" />
                </Link>
            </div>
        </div>
    );
};

export default MobileRechargePage;