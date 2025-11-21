
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
  Store, Truck, BarChart, Settings, CreditCard, Box
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




// 1. E-commerce Hero
const EcommerceHero = () => {
    const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } } };
    const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } } };

    return (
        <section className="relative h-[500px] md:h-[600px] flex items-center justify-center text-white overflow-hidden pt-20">
            <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1920&auto=format&fit=crop')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-b from-green-900/80 to-black/80 z-10"></div>
            
            <motion.div className="relative z-20 text-center px-4" initial="hidden" animate="visible" variants={containerVariants}>
                <motion.h1 className="text-5xl md:text-7xl font-extrabold tracking-tight" variants={itemVariants}>
                    E-commerce Software
                </motion.h1>
                <motion.p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto" variants={itemVariants}>
                    Powerful, scalable, and secure online stores designed for growth.
                </motion.p>
                <motion.div className="mt-8 flex items-center justify-center text-lg text-gray-300" variants={itemVariants}>
                    <Link to="/" className="hover:text-green-400 transition-colors font-medium">HOME</Link>
                    <ChevronRight size={20} className="mx-2 text-gray-500" />
                    <span className="text-green-400 font-semibold">E-commerce Software</span>
                </motion.div>
            </motion.div>
        </section>
    );
};

// 2. E-commerce Intro
const EcommerceIntro = () => {
    return (
        <section className="bg-white py-20 lg:py-28 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }}>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                            Build Your Digital Storefront with <br /> <span className="text-blue-600">Renbufix Solutions</span>
                        </h2>
                        <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                            At <strong>Renbufix Technologies</strong>, we specialize in developing robust and scalable e-commerce software that empowers businesses to sell online effectively. Our solutions are designed to provide a seamless shopping experience for your customers and powerful management tools for your team.
                        </p>
                        <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                            Whether you are a startup launching your first online store or an established enterprise looking to upgrade your e-commerce platform, we provide custom solutions tailored to your unique business needs, helping you maximize sales and achieve a high return on investment (ROI).
                        </p>
                    </motion.div>
                    <motion.div initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }}>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-green-100 rounded-xl transform -rotate-3"></div>
                            <img src={ecommerceIllustration} alt="E-commerce Software" className="relative rounded-xl shadow-2xl w-full h-auto object-cover"/>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

// 3. Key Features
const EcommerceKeyFeatures = () => {
    const features = [
        { icon: <Store size={32} />, title: 'Custom Storefront', desc: 'Beautiful, responsive, and custom-designed storefronts that reflect your brand identity.' },
        { icon: <ShoppingCart size={32} />, title: 'Smart Cart & Checkout', desc: 'Secure and intuitive cart and checkout process optimized to reduce abandonment rates.' },
        { icon: <CreditCard size={32} />, title: 'Payment Gateways', desc: 'Seamless integration with all popular global and local payment gateways for secure transactions.' },
        { icon: <Package size={32} />, title: 'Inventory Management', desc: 'Easily manage products, categories, stock levels, and pricing from a single unified dashboard.' },
        { icon: <Truck size={32} />, title: 'Shipping & Logistics', desc: 'Flexible shipping options with real-time tracking and integration with leading logistics providers.' },
        { icon: <Tag size={32} />, title: 'Marketing Tools', desc: 'Create and manage coupons, discounts, and promotional campaigns to drive higher sales.' },
        { icon: <BarChart size={32} />, title: 'Analytics Dashboard', desc: 'In-depth analytics and reports to track sales, customer behavior, and overall store performance.' },
        { icon: <Settings size={32} />, title: 'Admin Control Panel', desc: 'A powerful and user-friendly admin panel to manage your entire online store ecosystem.' }
    ];

    return (
        <section className="bg-gray-50 py-20 lg:py-28">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">Core Features of Our <span className="text-green-600">E-commerce Software</span></h2>
                    <p className="mt-4 text-gray-600">Everything you need to sell online successfully.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div 
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border-t-4 border-transparent hover:border-green-500"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="inline-block p-4 bg-green-50 text-green-600 rounded-xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// 4. Why Choose Us (E-commerce)
const WhyChooseEcommerce = () => {
     const benefits = [
        { icon: <ShieldCheck size={32}/>, title: 'Secure & Reliable', description: 'We build secure platforms with PCI compliance and advanced data protection to build customer trust.' },
        { icon: <Scaling size={32}/>, title: 'Scalable Architecture', description: 'Our solutions are built to scale, seamlessly handling traffic spikes and growing product catalogs.' },
        { icon: <Settings size={32}/>, title: 'Fully Customizable', description: 'We don’t use cookie-cutter templates. We tailor every feature to your specific business requirements.' },
        { icon: <ArrowRightCircle size={32}/>, title: 'SEO-Optimized', description: 'Our platforms are architected for search engines, helping you rank higher and attract organic traffic.' },
    ];
    return (
         <section className="bg-gray-900 text-white py-20 lg:py-28">
            <div className="container mx-auto px-6">
                 <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold">Why Choose Renbufix E-commerce?</h2>
                    <p className="mt-4 text-gray-400">Delivering excellence in digital retail.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                      {benefits.map((benefit, index) => (
                        <motion.div 
                            key={index} 
                            className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-green-500 transition-colors"
                             initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="text-green-400 mb-6">{benefit.icon}</div>
                            <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// PAGE: E-COMMERCE SOFTWARE
const EcommerceSoftwarePage = () => {
    return (
        <div className="bg-white">
            <EcommerceHero />
            <EcommerceIntro />
            <EcommerceKeyFeatures />
            <WhyChooseEcommerce />
            <div className="bg-green-600 py-16 text-center text-white">
                <h2 className="text-3xl font-bold mb-6">Ready to Launch Your Online Store?</h2>
                <Link to="/contact" className="inline-flex items-center bg-white text-green-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors">
                    Get a Free Quote <ArrowRightCircle className="ml-2" />
                </Link>
            </div>
        </div>
    );
};

export default EcommerceSoftwarePage;