import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    ChevronRight, Plane, Map, Calendar, Building2, Bus, 
    Globe, ShieldCheck, TrendingUp, Smartphone, Users, 
    ArrowRightCircle, CreditCard, Settings, Briefcase 
} from 'lucide-react';

// Image Placeholder
const travelIllustration = "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2070&auto=format&fit=crop";

// --- 1. Hero Section Component ---
const TravelHero = () => {
    const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } } };
    const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } } };

    return (
        <section className="relative h-[500px] md:h-[600px] flex items-center justify-center text-white overflow-hidden pt-20">
            <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-b from-sky-900/80 to-black/80 z-10"></div>
            
            <motion.div className="relative z-20 text-center px-4" initial="hidden" animate="visible" variants={containerVariants}>
                <motion.h1 className="text-5xl md:text-7xl font-extrabold tracking-tight" variants={itemVariants}>
                    Travel Software Solutions
                </motion.h1>
                <motion.p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto" variants={itemVariants}>
                    Empowering Travel Agencies with Next-Gen Booking Technology.
                </motion.p>
                <motion.div className="mt-8 flex items-center justify-center text-lg text-gray-300" variants={itemVariants}>
                    <Link to="/" className="hover:text-sky-400 transition-colors font-medium">HOME</Link>
                    <ChevronRight size={20} className="mx-2 text-gray-500" />
                    <span className="text-sky-400 font-semibold">Travel Software</span>
                </motion.div>
            </motion.div>
        </section>
    );
};

// --- 2. Intro Section Component ---
const TravelIntro = () => {
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
                            Build Your Dream Travel Business with <span className="text-blue-600">Renbufix</span>
                        </h2>
                        <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                            At <strong>Renbufix Technologies</strong>, we provide a complete suite of travel technology solutions designed for travel agencies, tour operators, and OTAs. Our software automates bookings, manages inventory, and streamlines operations, allowing you to focus on creating unforgettable travel experiences.
                        </p>
                        <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                            Whether you need a B2C booking engine, a B2B agent portal, or a corporate travel management tool, our scalable and customizable platform connects you to global GDS systems and suppliers seamlessly.
                        </p>
                    </motion.div>
                    <motion.div 
                        initial={{ x: 50, opacity: 0 }} 
                        whileInView={{ x: 0, opacity: 1 }} 
                        viewport={{ once: true }} 
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="relative">
                             <div className="absolute -inset-4 bg-sky-100 rounded-xl transform rotate-3"></div>
                             <img src={travelIllustration} alt="Travel Software Interface" className="relative rounded-xl shadow-2xl w-full h-auto object-cover"/>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

// --- 3. Key Features Section ---
const TravelFeatures = () => {
    const features = [
        { icon: <Plane size={32} />, title: 'Flight Booking Engine', desc: 'Real-time flight search and booking with integration to major GDS (Amadeus, Sabre, Galileo).' },
        { icon: <Building2 size={32} />, title: 'Hotel Inventory', desc: 'Access global hotel inventories with live availability, pricing, and instant confirmation.' },
        { icon: <Bus size={32} />, title: 'Bus & Car Rental', desc: 'Seamless booking modules for intercity buses and car rentals with dynamic pricing.' },
        { icon: <Map size={32} />, title: 'Holiday Packages', desc: 'Create and manage dynamic holiday packages with custom itineraries and pricing.' },
        { icon: <Users size={32} />, title: 'B2B Agent Portal', desc: 'Empower your sub-agents with a dedicated login to make bookings and manage markups.' },
        { icon: <CreditCard size={32} />, title: 'Payment Integration', desc: 'Secure multi-currency payment gateways to accept payments from customers worldwide.' },
    ];

    return (
        <section className="bg-gray-50 py-20 lg:py-28">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">Core Features</h2>
                    <p className="mt-4 text-gray-600">Everything you need to run a successful travel agency.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div 
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border-t-4 border-transparent hover:border-sky-600"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="inline-block p-4 bg-sky-50 text-sky-600 rounded-xl mb-4">{feature.icon}</div>
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
const WhyChooseTravel = () => {
     const benefits = [
        { icon: <Globe size={32}/>, title: 'Global Connectivity', description: 'Connect with suppliers worldwide through XML/API integrations for vast inventory access.' },
        { icon: <Settings size={32}/>, title: 'White Label Solution', description: 'Launch your brand quickly with our ready-to-deploy white label travel portal.' },
        { icon: <Smartphone size={32}/>, title: 'Mobile Responsive', description: 'Give your customers the freedom to book trips on-the-go with our mobile-first designs.' },
        { icon: <TrendingUp size={32}/>, title: 'Automated Accounting', description: 'Built-in invoicing and accounting tools to track bookings, profits, and commissions.' },
    ];
    return (
         <section className="bg-gray-900 text-white py-20 lg:py-28">
            <div className="container mx-auto px-6">
                 <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold">Why Choose Renbufix?</h2>
                    <p className="mt-4 text-gray-400">Your technology partner for travel growth.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                      {benefits.map((benefit, index) => (
                        <motion.div 
                            key={index} 
                            className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-sky-500 transition-colors"
                             initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="text-sky-400 mb-6">{benefit.icon}</div>
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
const TravelSoftwarePage = () => {
    return (
        <div className="bg-white">
            <TravelHero />
            <TravelIntro />
            <TravelFeatures />
            <WhyChooseTravel />
            
             {/* CTA Section */}
             <div className="bg-sky-600 py-16 text-center text-white">
                <h2 className="text-3xl font-bold mb-6">Ready to Launch Your Travel Portal?</h2>
                <Link to="/contact" className="inline-flex items-center bg-white text-sky-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors">
                    Get a Quote <ArrowRightCircle className="ml-2" />
                </Link>
            </div>
        </div>
    );
};

export default TravelSoftwarePage;