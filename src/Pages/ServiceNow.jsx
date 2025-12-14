import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    ChevronRight, Cloud, Workflow, Users, MonitorCheck, 
    Layers, ShieldCheck, Zap, ArrowRightCircle, Settings, Database, Server, UserCheck
} from 'lucide-react';

// Image Placeholder
const serviceNowIllustration = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop";

// --- 1. Hero Section Component ---
const ServiceNowHero = () => {
    const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } } };
    const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } } };

    return (
        <section className="relative h-[500px] md:h-[600px] flex items-center justify-center text-white overflow-hidden pt-20">
            <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/80 to-black/80 z-10"></div>
            
            <motion.div className="relative z-20 text-center px-4" initial="hidden" animate="visible" variants={containerVariants}>
                <motion.h1 className="text-5xl md:text-7xl font-extrabold tracking-tight" variants={itemVariants}>
                    ServiceNow Solutions
                </motion.h1>
                <motion.p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto" variants={itemVariants}>
                    Digital workflows that create great experiences and unlock productivity.
                </motion.p>
                <motion.div className="mt-8 flex items-center justify-center text-lg text-gray-300" variants={itemVariants}>
                    <Link to="/" className="hover:text-cyan-400 transition-colors font-medium">HOME</Link>
                    <ChevronRight size={20} className="mx-2 text-gray-500" />
                    <span className="text-cyan-400 font-semibold">ServiceNow</span>
                </motion.div>
            </motion.div>
        </section>
    );
};

// --- 2. Intro Section Component ---
const ServiceNowIntro = () => {
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
                            Transform Growth-Ready Service Management with <span className="text-blue-600">Renbufix</span>
                        </h2>
                        <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                            At <strong>Renbufix Technologies</strong>, we leverage the power of the ServiceNow platform to digitize and automate your startup workflows. We help organizations break down silos, improve service delivery, and modernize operations across IT, HR, Customer Service, and Security.
                        </p>
                        <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                            Our team of certified ServiceNow experts provides end-to-end consulting, implementation, and support services. Whether you are looking to optimize IT operations or build custom workflow apps, we ensure you get maximum value from your ServiceNow investment.
                        </p>
                    </motion.div>
                    <motion.div 
                        initial={{ x: 50, opacity: 0 }} 
                        whileInView={{ x: 0, opacity: 1 }} 
                        viewport={{ once: true }} 
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="relative">
                             <div className="absolute -inset-4 bg-cyan-100 rounded-xl transform -rotate-3"></div>
                             <img src={serviceNowIllustration} alt="ServiceNow Architecture" className="relative rounded-xl shadow-2xl w-full h-auto object-cover"/>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

// --- 3. Offerings Section ---
const ServiceNowOfferings = () => {
    const offerings = [
        { icon: <MonitorCheck size={32} />, title: 'IT Service Management (ITSM)', desc: 'Modernize IT services with automated incident, problem, and change management workflows.' },
        { icon: <Server size={32} />, title: 'IT Operations (ITOM)', desc: 'Gain visibility into your infrastructure, automate remediation, and improve service health.' },
        { icon: <Users size={32} />, title: 'HR Service Delivery', desc: 'Streamline employee experiences with a unified portal for all HR services and requests.' },
        { icon: <Settings size={32} />, title: 'Customer Service (CSM)', desc: 'Proactively address customer issues by connecting customer service with other departments.' },
        { icon: <Layers size={32} />, title: 'App Engine', desc: 'Build low-code custom applications to digitize unique business processes rapidly.' },
        { icon: <Database size={32} />, title: 'Integrations', desc: 'Seamlessly connect ServiceNow with your existing growth-ready tools and data sources.' },
    ];

    return (
        <section className="bg-gray-50 py-20 lg:py-28">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">Our ServiceNow Offerings</h2>
                    <p className="mt-4 text-gray-600">Comprehensive solutions for the Now Platform.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {offerings.map((offer, index) => (
                        <motion.div 
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border-t-4 border-transparent hover:border-cyan-600"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="inline-block p-4 bg-cyan-50 text-cyan-600 rounded-xl mb-4">{offer.icon}</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{offer.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{offer.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- 4. Why Choose Us Section ---
const WhyChooseServiceNow = () => {
     const benefits = [
        { icon: <ShieldCheck size={32}/>, title: 'Certified Experts', description: 'Our team comprises certified ServiceNow architects and developers with deep domain knowledge.' },
        { icon: <Workflow size={32}/>, title: 'Strategic Implementation', description: 'We follow best practices to ensure a smooth, scalable, and secure platform implementation.' },
        { icon: <Zap size={32}/>, title: 'Rapid Time-to-Value', description: 'Our accelerators and pre-built templates help you go live faster and see results sooner.' },
        { icon: <UserCheck size={32}/>, title: 'Continuous Improvement', description: 'We provide ongoing support and upgrades to keep your ServiceNow instance optimized.' },
    ];
    return (
         <section className="bg-gray-900 text-white py-20 lg:py-28">
            <div className="container mx-auto px-6">
                 <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold">Why Choose Renbufix?</h2>
                    <p className="mt-4 text-gray-400">Your strategic partner for digital transformation.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                      {benefits.map((benefit, index) => (
                        <motion.div 
                            key={index} 
                            className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500 transition-colors"
                             initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="text-cyan-400 mb-6">{benefit.icon}</div>
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
const ServiceNowPage = () => {
    return (
        <div className="bg-white">
            <ServiceNowHero />
            <ServiceNowIntro />
            <ServiceNowOfferings />
            <WhyChooseServiceNow />
            
            {/* CTA Section */}
            <div className="bg-cyan-600 py-16 text-center text-white">
                <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Business Workflows?</h2>
                <Link to="/contact" className="inline-flex items-center bg-white text-cyan-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors">
                    Get a Consultation <ArrowRightCircle className="ml-2" />
                </Link>
            </div>
        </div>
    );
};

export default ServiceNowPage;