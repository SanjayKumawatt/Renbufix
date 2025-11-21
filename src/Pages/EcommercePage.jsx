import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    ChevronRight, Store, ShoppingCart, CreditCard, Package, Truck, Tag, 
    BarChart3, Settings, ShieldCheck, Scaling, Workflow, ThumbsUp, ArrowRightCircle 
} from 'lucide-react';

// Image Placeholder
const ecommerceIllustration = "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1920&auto=format&fit=crop";

// --- 1. Hero Section Component ---
const EcommerceHero = () => {
    const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } } };
    const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } } };

    return (
        <section className="relative h-[500px] md:h-[600px] flex items-center justify-center text-white overflow-hidden pt-20">
            <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-b from-green-900/80 to-black/80 z-10"></div>
            
            <motion.div className="relative z-20 text-center px-4" initial="hidden" animate="visible" variants={containerVariants}>
                <motion.h1 className="text-5xl md:text-7xl font-extrabold tracking-tight" variants={itemVariants}>
                    E-commerce Software
                </motion.h1>
                <motion.p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto" variants={itemVariants}>
                    Powerful, scalable, and secure online stores designed for global growth.
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

// --- 2. Intro Section Component ---
const EcommerceIntro = () => {
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
                            Build Your Digital Empire with <span className="text-blue-600">Renbufix E-commerce</span>
                        </h2>
                        <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                            At <strong>Renbufix Technologies</strong>, we craft powerful, scalable, and feature-rich e-commerce software designed to help you sell smarter. Our solutions provide a seamless shopping experience for your customers and intuitive management tools for your team.
                        </p>
                        <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                            From startups launching their first store to enterprises managing complex inventories, we deliver custom e-commerce platforms tailored to your unique business needs—ensuring you maximize sales and achieve a high Return on Investment (ROI).
                        </p>
                    </motion.div>
                    <motion.div 
                        initial={{ x: 50, opacity: 0 }} 
                        whileInView={{ x: 0, opacity: 1 }} 
                        viewport={{ once: true }} 
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="relative">
                             <div className="absolute -inset-4 bg-green-100 rounded-xl transform -rotate-3"></div>
                             <img src={ecommerceIllustration} alt="E-commerce Software Dashboard" className="relative rounded-xl shadow-2xl w-full h-auto object-cover"/>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

// --- 3. Key Features Section ---
const EcommerceFeatures = () => {
    const features = [
        { icon: <Store size={32} />, title: 'Custom Storefront', desc: 'Unique, mobile-responsive designs that align perfectly with your brand identity.' },
        { icon: <ShoppingCart size={32} />, title: 'Smart Checkout', desc: 'Secure, one-page checkout process optimized to reduce cart abandonment.' },
        { icon: <CreditCard size={32} />, title: 'Multi-Payment Integration', desc: 'Support for all major gateways including Stripe, PayPal, UPI, and Net Banking.' },
        { icon: <Package size={32} />, title: 'Inventory Management', desc: 'Real-time tracking of stock levels, variants, and categories from a single dashboard.' },
        { icon: <Truck size={32} />, title: 'Shipping & Logistics', desc: 'Automated shipping calculations and integration with leading logistics providers.' },
        { icon: <Tag size={32} />, title: 'Marketing Engine', desc: 'Built-in tools for coupons, discounts, flash sales, and email marketing campaigns.' },
        { icon: <BarChart3 size={32} />, title: 'Advanced Analytics', desc: 'Deep insights into sales trends, customer behavior, and conversion rates.' },
        { icon: <Settings size={32} />, title: 'Admin Control', desc: 'A powerful, user-friendly admin panel to manage your entire online business.' },
    ];

    return (
        <section className="bg-gray-50 py-20 lg:py-28">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">Core Platform Features</h2>
                    <p className="mt-4 text-gray-600">Everything you need to succeed in digital retail.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div 
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border-t-4 border-transparent hover:border-green-600"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="inline-block p-4 bg-green-50 text-green-600 rounded-xl mb-4">{feature.icon}</div>
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
const WhyChooseEcommerce = () => {
     const benefits = [
        { icon: <ShieldCheck size={32}/>, title: 'Unmatched Security', description: 'PCI-DSS compliant architecture with SSL encryption to protect customer data.' },
        { icon: <Scaling size={32}/>, title: 'Built to Scale', description: 'Cloud-ready infrastructure designed to handle high traffic during peak sales seasons.' },
        { icon: <Workflow size={32}/>, title: 'Fully Customizable', description: 'We tailor every feature to your specific workflow, unlike rigid template-based platforms.' },
        { icon: <ThumbsUp size={32}/>, title: 'SEO Optimized', description: 'Technical SEO best practices built-in to help your store rank higher on Google.' },
    ];
    return (
         <section className="bg-gray-900 text-white py-20 lg:py-28">
            <div className="container mx-auto px-6">
                 <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold">Why Choose Renbufix E-commerce?</h2>
                    <p className="mt-4 text-gray-400">Delivering excellence, security, and growth.</p>
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

// --- Main Page Component ---
const EcommerceSoftwarePage = () => {
    return (
        <div className="bg-white">
            <EcommerceHero />
            <EcommerceIntro />
            <EcommerceFeatures />
            <WhyChooseEcommerce />
            
            {/* CTA Section */}
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