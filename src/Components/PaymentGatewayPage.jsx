import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    ChevronRight, CreditCard, ShieldCheck, Globe, Puzzle, 
    BarChartHorizontal, TrendingUp, ThumbsUp, Scale, Settings, 
    ArrowRightCircle, Lock, Zap 
} from 'lucide-react';

// Image Placeholder
import paymentGatewayIllustration from "../assets/payment/img.jpeg";

// --- 1. Hero Section Component ---
const PaymentGatewayHero = () => {
    const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } } };
    const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } } };

    return (
        <section className="relative h-[500px] md:h-[600px] flex items-center justify-center text-white overflow-hidden pt-20">
            <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/80 to-black/80 z-10"></div>
            
            <motion.div className="relative z-20 text-center px-4" initial="hidden" animate="visible" variants={containerVariants}>
                <motion.h1 className="text-5xl md:text-7xl font-extrabold tracking-tight" variants={itemVariants}>
                    Payment Gateway Solutions
                </motion.h1>
                <motion.p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto" variants={itemVariants}>
                    Secure, fast, and seamless transactions for your digital business.
                </motion.p>
                <motion.div className="mt-8 flex items-center justify-center text-lg text-gray-300" variants={itemVariants}>
                    <Link to="/" className="hover:text-indigo-400 transition-colors font-medium">HOME</Link>
                    <ChevronRight size={20} className="mx-2 text-gray-500" />
                    <span className="text-indigo-400 font-semibold">Payment Gateway</span>
                </motion.div>
            </motion.div>
        </section>
    );
};

// --- 2. Intro Section Component ---
const PaymentGatewayIntro = () => {
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
                            Secure & Seamless Transactions with <span className="text-blue-600">Renbufix Payment Solutions</span>
                        </h2>
                        <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                            At <strong>Renbufix Technologies</strong>, we engineer powerful and secure payment gateway architectures designed to simplify online transactions. Our solutions enable you to accept payments globally via credit cards, debit cards, UPI, net banking, and wallets, ensuring a frictionless checkout experience.
                        </p>
                        <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                            We prioritize security and speed. Our robust infrastructure guarantees high transaction success rates, banking-grade encryption, and seamless integration, helping you build trust and scale your online revenue with absolute confidence.
                        </p>
                    </motion.div>
                    <motion.div 
                        initial={{ x: 50, opacity: 0 }} 
                        whileInView={{ x: 0, opacity: 1 }} 
                        viewport={{ once: true }} 
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="relative">
                             <div className="absolute -inset-4 bg-indigo-100 rounded-xl transform rotate-3"></div>
                             <img src={paymentGatewayIllustration} alt="Payment Gateway Architecture" className="relative rounded-xl shadow-2xl w-full h-auto object-cover"/>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

// --- 3. Key Features Section ---
const PaymentGatewayFeatures = () => {
    const features = [
        { icon: <CreditCard size={32} />, title: 'Multi-Mode Payments', desc: 'Accept payments via Credit/Debit cards, Net Banking, UPI, and popular digital wallets effortlessly.' },
        { icon: <ShieldCheck size={32} />, title: 'Bank-Grade Security', desc: 'PCI-DSS compliant infrastructure with advanced fraud detection systems to ensure 100% secure transactions.' },
        { icon: <Globe size={32} />, title: 'Global Currency Support', desc: 'Expand your business globally by accepting payments from international customers in their local currency.' },
        { icon: <Puzzle size={32} />, title: 'Easy Integration', desc: 'Developer-friendly APIs and ready-to-use plugins for quick integration with your website or mobile app.' },
        { icon: <Settings size={32} />, title: 'Merchant Dashboard', desc: 'A comprehensive control panel to manage transactions, settlements, refunds, and disputes in real-time.' },
        { icon: <BarChartHorizontal size={32} />, title: 'Real-time Analytics', desc: 'Track your financial health with detailed reports on sales trends, success rates, and customer behavior.' },
    ];

    return (
        <section className="bg-gray-50 py-20 lg:py-28">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">Our Payment Gateway Features</h2>
                    <p className="mt-4 text-gray-600">Reliable technology for modern commerce.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div 
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border-t-4 border-transparent hover:border-indigo-600"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="inline-block p-4 bg-indigo-50 text-indigo-600 rounded-xl mb-4">{feature.icon}</div>
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
const WhyChoosePaymentGateway = () => {
     const benefits = [
        { icon: <TrendingUp size={32}/>, title: 'High Success Rate', description: 'Our smart routing technology optimizes transaction paths to ensure industry-leading success rates.' },
        { icon: <Zap size={32}/>, title: 'Instant Settlement', description: 'Flexible settlement cycles to keep your cash flow healthy and your business moving fast.' },
        { icon: <Scale size={32}/>, title: 'Competitive Pricing', description: 'Transparent, affordable pricing with no hidden fees, suitable for startups and enterprises alike.' },
        { icon: <Lock size={32}/>, title: 'Dedicated Support', description: '24/7 expert technical support to resolve any integration or transaction queries instantly.' },
    ];
    return (
         <section className="bg-gray-900 text-white py-20 lg:py-28">
            <div className="container mx-auto px-6">
                 <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold">Why Choose Renbufix Gateway?</h2>
                    <p className="mt-4 text-gray-400">Trust, Speed, and Security.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                      {benefits.map((benefit, index) => (
                        <motion.div 
                            key={index} 
                            className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-indigo-500 transition-colors"
                             initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="text-indigo-400 mb-6">{benefit.icon}</div>
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
const PaymentGatewayPage = () => {
    return (
        <div className="bg-white">
            <PaymentGatewayHero />
            <PaymentGatewayIntro />
            <PaymentGatewayFeatures />
            <WhyChoosePaymentGateway />
            
            {/* CTA Section */}
            <div className="bg-indigo-600 py-16 text-center text-white">
                <h2 className="text-3xl font-bold mb-6">Ready to Accept Payments Seamlessly?</h2>
                <Link to="/contact" className="inline-flex items-center bg-white text-indigo-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors">
                    Integrate Now <ArrowRightCircle className="ml-2" />
                </Link>
            </div>
        </div>
    );
};

export default PaymentGatewayPage;