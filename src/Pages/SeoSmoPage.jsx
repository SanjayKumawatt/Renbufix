
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Smartphone, Code, ShoppingCart, Paintbrush, Cloud, Package, 
  Rocket, BarChart3, Building2, Handshake, MessageCircle, ArrowRightCircle, 
  Tag, Users, Laptop, CheckCircle2, Briefcase, Activity, Presentation, Gauge,
  Mail, MapPin, Check, Diamond, CalendarCheck, Wallet, User, Send, Phone,
  MousePointerClick, Database, UserCheck, TrendingUp, Search,
  ChevronRight, Apple, Bot, Watch, ToyBrick, HeartPulse, PencilRuler, TestTube2, Wrench, ShieldCheck, Scaling,
  Store, Truck, BarChart, Settings, CreditCard, Box,
  SearchCheck, Link2, Share2, Newspaper, MessageSquare, ThumbsUp, Lightbulb, Target
} from 'lucide-react';

// --- ASSETS (Placeholders) ---
const logo = "https://placehold.co/100x100/png?text=R"; 
const phoneMockup = "https://placehold.co/300x600/png?text=Mobile+App+UI";
const womanImage = "https://placehold.co/600x600/png?text=Professional+Working"; 
const designIllustration = "https://placehold.co/600x400/png?text=UI+UX+Design+Preview";
const webDevIllustration = "https://placehold.co/600x400/png?text=Web+Development+Illustration";
const dynamicWebIllustration = "https://placehold.co/600x400/png?text=Dynamic+Web+Illustration";
const uiUxIllustration = "https://placehold.co/600x400/png?text=UI+UX+Design+Process";
const mobileAppIllustration = "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=1920&auto=format&fit=crop";
const ecommerceIllustration = "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1920&auto=format&fit=crop";
const seoSmoIllustration = "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=1920&auto=format&fit=crop";



// 1. SEO/SMO Hero
const SeoSmoHero = () => {
    const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } } };
    const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } } };

    return (
        <section className="relative h-[500px] md:h-[600px] flex items-center justify-center text-white overflow-hidden pt-20">
            <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/80 to-black/80 z-10"></div>
            
            <motion.div className="relative z-20 text-center px-4" initial="hidden" animate="visible" variants={containerVariants}>
                <motion.h1 className="text-5xl md:text-7xl font-extrabold tracking-tight" variants={itemVariants}>
                    SEO & SMO Services
                </motion.h1>
                <motion.p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto" variants={itemVariants}>
                    Boost visibility, drive traffic, and engage your audience.
                </motion.p>
                <motion.div className="mt-8 flex items-center justify-center text-lg text-gray-300" variants={itemVariants}>
                    <Link to="/" className="hover:text-purple-400 transition-colors font-medium">HOME</Link>
                    <ChevronRight size={20} className="mx-2 text-gray-500" />
                    <span className="text-purple-400 font-semibold">SEO/SMO</span>
                </motion.div>
            </motion.div>
        </section>
    );
};

// 2. SEO/SMO Intro
const SeoSmoIntro = () => {
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
                            Dominate Search & Social Media with <span className="text-blue-600">Renbufix Expertise</span>
                        </h2>
                        <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                            At <strong>Renbufix Technologies</strong>, we offer powerful Search Engine Optimization (SEO) and Social Media Optimization (SMO) services designed to skyrocket your online visibility. Our data-driven strategies ensure you connect with the right audience at the right time.
                        </p>
                        <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                            We blend technical precision with creative storytelling to make your brand stand out in a crowded digital marketplace. From climbing search rankings to building a loyal community, we are your partners in digital growth.
                        </p>
                    </motion.div>
                    <motion.div 
                        initial={{ x: 50, opacity: 0 }} 
                        whileInView={{ x: 0, opacity: 1 }} 
                        viewport={{ once: true }} 
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="relative">
                             <div className="absolute -inset-4 bg-purple-100 rounded-xl transform rotate-3"></div>
                             <img src={seoSmoIllustration} alt="SEO and SMO" className="relative rounded-xl shadow-2xl w-full h-auto object-cover"/>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

// 3. Key Services
const SeoSmoServices = () => {
    const services = [
        { icon: <SearchCheck size={32} />, title: 'On-Page SEO', desc: 'Optimizing content, meta tags, and structure to rank higher on search engines.' },
        { icon: <Link2 size={32} />, title: 'Off-Page SEO', desc: 'Building high-quality backlinks and online authority to boost domain reputation.' },
        { icon: <Wrench size={32} />, title: 'Technical SEO', desc: 'Enhancing site speed, crawlability, and mobile-friendliness for better indexing.' },
        { icon: <MapPin size={32} />, title: 'Local SEO', desc: 'Optimizing your GMB and local presence to attract nearby customers.' },
        { icon: <Share2 size={32} />, title: 'Social Strategy', desc: 'Developing custom roadmaps to increase brand awareness and engagement.' },
        { icon: <Newspaper size={32} />, title: 'Content Marketing', desc: 'Creating valuable, shareable content that attracts and retains your audience.' },
        { icon: <MessageSquare size={32} />, title: 'Community Mgmt', desc: 'Actively engaging with your followers to build trust and brand loyalty.' },
        { icon: <ThumbsUp size={32} />, title: 'Paid Ads (PPC)', desc: 'Targeted ad campaigns on Google, Facebook, and Instagram for instant leads.' }
    ];

    return (
        <section className="bg-gray-50 py-20 lg:py-28">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">Our SEO & SMO Services</h2>
                    <p className="mt-4 text-gray-600">Comprehensive digital marketing solutions.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div 
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border-t-4 border-transparent hover:border-purple-600"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="inline-block p-4 bg-purple-50 text-purple-600 rounded-xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// 4. Why Choose Us
const WhyChooseSeoSmo = () => {
     const benefits = [
        { icon: <Lightbulb size={32}/>, title: 'Holistic Approach', description: 'We integrate SEO and SMO to create a unified, powerful digital marketing strategy.' },
        { icon: <BarChart size={32}/>, title: 'Data-Driven', description: 'No guesswork. Our decisions are based on analytics to ensure maximum ROI.' },
        { icon: <ShieldCheck size={32}/>, title: 'Ethical Practices', description: 'We strictly use white-hat SEO and authentic social engagement strategies.' },
        { icon: <Target size={32}/>, title: 'Transparent Reporting', description: 'Regular, easy-to-understand reports so you can track your growth every month.' },
    ];
    return (
         <section className="bg-gray-900 text-white py-20 lg:py-28">
            <div className="container mx-auto px-6">
                 <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold">Why Choose Our Strategies?</h2>
                    <p className="mt-4 text-gray-400">Results that speak for themselves.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                      {benefits.map((benefit, index) => (
                        <motion.div 
                            key={index} 
                            className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-colors"
                             initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="text-purple-400 mb-6">{benefit.icon}</div>
                            <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// PAGE: SEO & SMO
const SeoSmoPage = () => {
    return (
        <div className="bg-white">
            <SeoSmoHero />
            <SeoSmoIntro />
            <SeoSmoServices />
            <WhyChooseSeoSmo />
            <div className="bg-purple-600 py-16 text-center text-white">
                <h2 className="text-3xl font-bold mb-6">Ready to Dominate the Rankings?</h2>
                <Link to="/contact" className="inline-flex items-center bg-white text-purple-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors">
                    Get a Free Audit <ArrowRightCircle className="ml-2" />
                </Link>
            </div>
        </div>
    );
};

export default SeoSmoPage;