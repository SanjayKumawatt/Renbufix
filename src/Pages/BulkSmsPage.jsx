import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    ChevronRight, MessageCircle, Send, RadioTower, CalendarClock, 
    Settings, BarChart3, TrendingUp, ShieldCheck, ThumbsUp, Scale, ArrowRightCircle 
} from 'lucide-react';

// Image Placeholder
import bulkSmsIllustration from  "../assets/bulkimage/img.webp";

// --- 1. Hero Section Component ---
const BulkSmsHero = () => {
    const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } } };
    const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } } };

    return (
        <section className="relative h-[500px] md:h-[600px] flex items-center justify-center text-white overflow-hidden pt-20">
            <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-black/80 z-10"></div>
            
            <motion.div className="relative z-20 text-center px-4" initial="hidden" animate="visible" variants={containerVariants}>
                <motion.h1 className="text-5xl md:text-7xl font-extrabold tracking-tight" variants={itemVariants}>
                    Bulk SMS Services
                </motion.h1>
                <motion.p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto" variants={itemVariants}>
                    Instant, reliable, and high-speed messaging for your business.
                </motion.p>
                <motion.div className="mt-8 flex items-center justify-center text-lg text-gray-300" variants={itemVariants}>
                    <Link to="/" className="hover:text-blue-400 transition-colors font-medium">HOME</Link>
                    <ChevronRight size={20} className="mx-2 text-gray-500" />
                    <span className="text-blue-400 font-semibold">Bulk SMS</span>
                </motion.div>
            </motion.div>
        </section>
    );
};

// --- 2. Intro Section Component ---
const BulkSmsIntro = () => {
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
                            Reach Your Audience Instantly with <span className="text-blue-600">Reliable Bulk SMS</span>
                        </h2>
                        <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                            At <strong>Renbufix Technologies</strong>, we provide a robust and high-speed Bulk SMS gateway for businesses to communicate effectively with their customers. Our platform is designed for mass text messaging, ensuring your promotional offers, alerts, and notifications are delivered instantly and reliably.
                        </p>
                        <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                            Whether you need to send transactional updates or run a large-scale marketing campaign, our services offer the perfect solution to enhance your communication strategy and achieve a high return on investment (ROI).
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
                             <img src={bulkSmsIllustration} alt="Bulk SMS Services" className="relative rounded-xl shadow-2xl w-full h-auto object-cover"/>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

// --- 3. Key Services Section ---
const BulkSmsServices = () => {
    const services = [
        { icon: <MessageCircle size={32} />, title: 'Promotional SMS', desc: 'Engage customers with marketing messages, offers, and discounts to drive sales.' },
        { icon: <Send size={32} />, title: 'Transactional SMS', desc: 'Send critical information like OTPs, alerts, and order confirmations instantly.' },
        { icon: <RadioTower size={32} />, title: 'Custom Sender ID', desc: 'Use your brand name as the sender ID to build trust and recognition with your audience.' },
        { icon: <Settings size={32} />, title: 'API Integration', desc: 'Easily integrate our powerful SMS API into your existing applications and software.' },
        { icon: <CalendarClock size={32} />, title: 'Scheduled Campaigns', desc: 'Schedule your SMS campaigns in advance to reach your audience at the perfect time.' },
        { icon: <BarChart3 size={32} />, title: 'Detailed Analytics', desc: 'Track delivery reports, click-through rates, and campaign performance in real-time.' },
    ];

    return (
        <section className="bg-gray-50 py-20 lg:py-28">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">Our Bulk SMS Features</h2>
                    <p className="mt-4 text-gray-600">Seamless communication at scale.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div 
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border-t-4 border-transparent hover:border-blue-600"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="inline-block p-4 bg-blue-50 text-blue-600 rounded-xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- 4. Why Choose Us Section ---
const WhyChooseBulkSms = () => {
     const benefits = [
        { icon: <TrendingUp size={32}/>, title: 'High Deliverability', description: 'Our robust infrastructure ensures that your messages reach the intended recipients without fail.' },
        { icon: <ThumbsUp size={32}/>, title: 'User-Friendly Platform', description: 'Our easy-to-use web panel allows you to manage campaigns without any technical skills.' },
        { icon: <ShieldCheck size={32}/>, title: 'Secure & Reliable', description: 'We prioritize the security of your data with our reliable and compliant SMS gateway.' },
        { icon: <Scale size={32}/>, title: 'Scalable for Growth', description: 'Our platform can handle any volume, from a few messages to millions, as your business grows.' },
    ];
    return (
         <section className="bg-gray-900 text-white py-20 lg:py-28">
            <div className="container mx-auto px-6">
                 <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold">Why Choose Our Bulk SMS?</h2>
                    <p className="mt-4 text-gray-400">Speed, reliability, and scale.</p>
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

// --- Main Page Component ---
const BulkSmsPage = () => {
    return (
        <div className="bg-white">
            {/* Note: ScrollToTop component should be in your main App or Layout */}
            <BulkSmsHero />
            <BulkSmsIntro />
            <BulkSmsServices />
            <WhyChooseBulkSms />
            
            {/* CTA Section */}
            <div className="bg-blue-600 py-16 text-center text-white">
                <h2 className="text-3xl font-bold mb-6">Ready to Connect with Your Customers?</h2>
                <Link to="/contact" className="inline-flex items-center bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors">
                    Start Your Campaign <ArrowRightCircle className="ml-2" />
                </Link>
            </div>
        </div>
    );
};

export default BulkSmsPage;