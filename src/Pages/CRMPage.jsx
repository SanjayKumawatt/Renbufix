import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    ChevronRight, Users, BarChart2, TrendingUp, MessageCircle, 
    CheckCircle2, Settings, Shield, Zap, Smartphone, Mail, 
    ArrowRightCircle, PieChart, Calendar 
} from 'lucide-react';

// Image Placeholder
const crmIllustration = "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop";

// --- 1. Hero Section Component ---
const CrmHero = () => {
    const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } } };
    const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } } };

    return (
        <section className="relative h-[500px] md:h-[600px] flex items-center justify-center text-white overflow-hidden pt-20">
            <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-black/80 z-10"></div>
            
            <motion.div className="relative z-20 text-center px-4" initial="hidden" animate="visible" variants={containerVariants}>
                <motion.h1 className="text-5xl md:text-7xl font-extrabold tracking-tight" variants={itemVariants}>
                    CRM Software Solutions
                </motion.h1>
                <motion.p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto" variants={itemVariants}>
                    Manage Relationships, Boost Sales, and Drive Growth.
                </motion.p>
                <motion.div className="mt-8 flex items-center justify-center text-lg text-gray-300" variants={itemVariants}>
                    <Link to="/" className="hover:text-blue-400 transition-colors font-medium">HOME</Link>
                    <ChevronRight size={20} className="mx-2 text-gray-500" />
                    <span className="text-blue-400 font-semibold">CRM Software</span>
                </motion.div>
            </motion.div>
        </section>
    );
};

// --- 2. Intro Section Component ---
const CrmIntro = () => {
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
                            Elevate Customer Relationships with <span className="text-blue-600">Renbufix CRM</span>
                        </h2>
                        <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                            At <strong>Renbufix Technologies</strong>, we believe that strong customer relationships are the backbone of any successful business. Our cutting-edge CRM (Customer Relationship Management) software helps you centralize customer data, automate sales processes, and improve communication across your organization.
                        </p>
                        <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                            From tracking leads to closing deals and providing post-sales support, our CRM empowers your team with the tools they need to deliver exceptional experiences and drive profitability.
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
                             <img src={crmIllustration} alt="CRM Dashboard Interface" className="relative rounded-xl shadow-2xl w-full h-auto object-cover"/>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

// --- 3. Key Features Section ---
const CrmFeatures = () => {
    const features = [
        { icon: <Users size={32} />, title: 'Lead Management', desc: 'Capture, track, and nurture leads from various sources. Assign them to sales reps automatically.' },
        { icon: <TrendingUp size={32} />, title: 'Sales Pipeline', desc: 'Visualize your sales funnel. Track deals at every stage and forecast revenue accurately.' },
        { icon: <Mail size={32} />, title: 'Email Integration', desc: 'Sync your emails, send personalized campaigns, and track open rates directly from the CRM.' },
        { icon: <Zap size={32} />, title: 'Workflow Automation', desc: 'Automate repetitive tasks like follow-ups, data entry, and task assignments to save time.' },
        { icon: <PieChart size={32} />, title: 'Analytics & Reports', desc: 'Gain deep insights into sales performance, team productivity, and customer behavior.' },
        { icon: <Smartphone size={32} />, title: 'Mobile CRM', desc: 'Access your customer data, manage tasks, and close deals on the go with our mobile app.' },
    ];

    return (
        <section className="bg-gray-50 py-20 lg:py-28">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">Powerful CRM Features</h2>
                    <p className="mt-4 text-gray-600">Tools to help you sell smarter and faster.</p>
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
const WhyChooseCrm = () => {
     const benefits = [
        { icon: <Settings size={32}/>, title: 'Highly Customizable', description: 'Adapt the CRM fields, workflows, and dashboards to fit your unique business processes.' },
        { icon: <Shield size={32}/>, title: 'Data Security', description: 'Modern security ensures your sensitive customer data is always protected.' },
        { icon: <CheckCircle2 size={32}/>, title: '360° Customer View', description: 'Get a complete history of every interaction, purchase, and preference for each customer.' },
        { icon: <MessageCircle size={32}/>, title: 'Better Collaboration', description: 'Enable seamless data sharing and communication between sales, marketing, and support teams.' },
    ];
    return (
         <section className="bg-gray-900 text-white py-20 lg:py-28">
            <div className="container mx-auto px-6">
                 <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold">Why Choose Renbufix CRM?</h2>
                    <p className="mt-4 text-gray-400">Tailored for growth and efficiency.</p>
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
const CrmSoftwarePage = () => {
    return (
        <div className="bg-white">
            <CrmHero />
            <CrmIntro />
            <CrmFeatures />
            <WhyChooseCrm />
            
             {/* CTA Section */}
             <div className="bg-blue-600 py-16 text-center text-white">
                <h2 className="text-3xl font-bold mb-6">Ready to Boost Your Sales?</h2>
                <Link to="/contact" className="inline-flex items-center bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors">
                    Get a Free Demo <ArrowRightCircle className="ml-2" />
                </Link>
            </div>
        </div>
    );
};

export default CrmSoftwarePage;