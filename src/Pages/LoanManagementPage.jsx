import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    ChevronRight, Landmark, FileText, Calculator, Users, BarChart3, 
    ShieldCheck, ThumbsUp, Scale, Workflow, FileClock, CheckCircle2, 
    ArrowRightCircle, Settings, BadgeCheck 
} from 'lucide-react';

// Image Placeholder
const loanManagementIllustration = "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop";

// --- 1. Hero Section Component ---
const LoanManagementHero = () => {
    const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } } };
    const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } } };

    return (
        <section className="relative h-[500px] md:h-[600px] flex items-center justify-center text-white overflow-hidden pt-20">
            <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/90 to-black/80 z-10"></div>
            
            <motion.div className="relative z-20 text-center px-4" initial="hidden" animate="visible" variants={containerVariants}>
                <motion.h1 className="text-5xl md:text-7xl font-extrabold tracking-tight" variants={itemVariants}>
                    Loan Management Software
                </motion.h1>
                <motion.p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto" variants={itemVariants}>
                    Streamline Your Lending Operations with Advanced Automation.
                </motion.p>
                <motion.div className="mt-8 flex items-center justify-center text-lg text-gray-300" variants={itemVariants}>
                    <Link to="/" className="hover:text-emerald-400 transition-colors font-medium">HOME</Link>
                    <ChevronRight size={20} className="mx-2 text-gray-500" />
                    <span className="text-emerald-400 font-semibold">Loan Management</span>
                </motion.div>
            </motion.div>
        </section>
    );
};

// --- 2. Intro Section Component ---
const LoanManagementIntro = () => {
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
                            Simplify Lending with <span className="text-blue-600">Renbufix Solutions</span>
                        </h2>
                        <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                            At <strong>Renbufix Technologies</strong>, we offer a comprehensive Loan Management Software designed for NBFCs, micro-finance institutions, and private lenders. Our solution automates the entire loan lifecycle, from application and credit scoring to disbursal and repayment collection.
                        </p>
                        <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                            Engineered to enhance efficiency and reduce operational risks, our platform provides a centralized dashboard to manage all your lending activities. Ensure regulatory compliance, track EMI schedules, and drive business growth with our secure and scalable software.
                        </p>
                    </motion.div>
                    <motion.div 
                        initial={{ x: 50, opacity: 0 }} 
                        whileInView={{ x: 0, opacity: 1 }} 
                        viewport={{ once: true }} 
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="relative">
                             <div className="absolute -inset-4 bg-emerald-100 rounded-xl transform -rotate-3"></div>
                             <img src={loanManagementIllustration} alt="Loan Management System" className="relative rounded-xl shadow-2xl w-full h-auto object-cover"/>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

// --- 3. Detailed Definition & Modules Section ---
const SoftwareDefinition = () => {
    const loanManagementPoints = [
        'Handling of multiple types of loans (Personal, Gold, Vehicle, etc.).',
        'Manage loans with fixed or reducing interest rate calculations.',
        'Online loan requests portal based on company policy.',
        'Workflow-based multi-stage loan approval process.',
        'Flexible options to manage and restructure loan EMIs.',
        'Multiple loan repayment options (Cash, Cheque, Online).',
        'View loan balance, statements, and ledger for each borrower.',
        'Handle statutory compliance and document management.'
    ];

    const loanConfigurationPoints = [
        'Create custom loan products.',
        'Enforce multiple loan policies.',
        'Rich configuration for penalties.',
        'Guarantor & Witness management.'
    ];

    const loanRequestPoints = [
        'Multi-level approval hierarchy.',
        'Single-click loan applications.',
        'Real-time application tracking.',
        'Automated EMI scheduling.'
    ];

    return (
        <section className="bg-gray-50 py-20 lg:py-28">
            <div className="container mx-auto px-6">
                <motion.div 
                    className="text-center max-w-4xl mx-auto mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">What is Loan Management Software?</h2>
                    <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                        Loan management software automates the servicing of loan products. It provides lenders with a digital platform to process customer information, create new loans, calculate interest, and generate accurate statements and reports, eliminating manual errors.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Loan Management Card */}
                    <motion.div 
                        className="bg-white p-8 rounded-2xl shadow-lg lg:col-span-1 border-t-4 border-emerald-500"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-emerald-100 rounded-full text-emerald-600">
                                <BadgeCheck size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800">Loan Operations</h3>
                        </div>
                        <ul className="space-y-4">
                            {loanManagementPoints.map((point, i) => (
                                <li key={i} className="flex items-start">
                                    <CheckCircle2 size={18} className="text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                                    <span className="text-gray-600 text-sm font-medium">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Configuration & Request Cards Column */}
                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                         <motion.div 
                            className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-500"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                                    <Settings size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">Configuration</h3>
                            </div>
                            <ul className="space-y-4">
                                {loanConfigurationPoints.map((point, i) => (
                                    <li key={i} className="flex items-start">
                                        <CheckCircle2 size={18} className="text-blue-500 mr-3 mt-1 flex-shrink-0" />
                                        <span className="text-gray-600 text-sm font-medium">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        
                         <motion.div 
                            className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-purple-500"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-purple-100 rounded-full text-purple-600">
                                    <FileText size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">Request Processing</h3>
                            </div>
                            <ul className="space-y-4">
                                {loanRequestPoints.map((point, i) => (
                                    <li key={i} className="flex items-start">
                                        <CheckCircle2 size={18} className="text-purple-500 mr-3 mt-1 flex-shrink-0" />
                                        <span className="text-gray-600 text-sm font-medium">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- 4. Key Features Section ---
const LoanManagementFeatures = () => {
    const features = [
        { icon: <FileText size={32} />, title: 'Loan Origination', desc: 'Streamline loan applications with digital document verification and automated credit scoring models.' },
        { icon: <Calculator size={32} />, title: 'Smart EMI Engine', desc: 'Automated, error-free EMI calculations supporting flat, reducing, and flexible repayment schedules.' },
        { icon: <FileClock size={32} />, title: 'Repayment Tracking', desc: 'Real-time tracking of EMIs, penalty calculations for delays, and automated payment reminders.' },
        { icon: <Users size={32} />, title: 'Borrower CRM', desc: 'A 360-degree view of borrower profiles, loan history, communication logs, and KYC documents.' },
        { icon: <BarChart3 size={32} />, title: 'Analytics Suite', desc: 'Generate detailed reports on NPA, collections, disbursements, and overall portfolio health.' },
        { icon: <ShieldCheck size={32} />, title: 'Bank-Grade Security', desc: 'Role-based access control and data encryption to ensure complete regulatory compliance and safety.' },
    ];

    return (
        <section className="bg-white py-20 lg:py-28">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">Software Features</h2>
                    <p className="mt-4 text-gray-600">Everything you need to manage your lending business.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div 
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border-t-4 border-transparent hover:border-emerald-600"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="inline-block p-4 bg-emerald-50 text-emerald-600 rounded-xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- 5. Why Choose Us Section ---
const WhyChooseLoanManagement = () => {
     const benefits = [
        { icon: <Workflow size={32}/>, title: 'Streamlined Operations', description: 'Automate manual tasks, eliminate paperwork, and significantly reduce processing turnaround time.' },
        { icon: <ThumbsUp size={32}/>, title: 'Smarter Decisions', description: 'Leverage data-driven insights and credit analysis to make informed, lower-risk lending decisions.' },
        { icon: <Scale size={32}/>, title: 'Better Experience', description: 'Provide your borrowers with a transparent, fast, and digital loan application and repayment experience.' },
        { icon: <ShieldCheck size={32}/>, title: 'Risk Mitigation', description: 'Minimize default risks with automated alerts, rigorous credit checks, and efficient collection management.' },
    ];
    return (
         <section className="bg-gray-900 text-white py-20 lg:py-28">
            <div className="container mx-auto px-6">
                 <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold">Why Choose Our Loan Software?</h2>
                    <p className="mt-4 text-gray-400">Efficiency, Security, and Growth.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                      {benefits.map((benefit, index) => (
                        <motion.div 
                            key={index} 
                            className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-emerald-500 transition-colors"
                             initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="text-emerald-400 mb-6">{benefit.icon}</div>
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
const LoanManagementPage = () => {
    return (
        <div className="bg-white">
            <LoanManagementHero />
            <LoanManagementIntro />
            <SoftwareDefinition />
            <LoanManagementFeatures />
            <WhyChooseLoanManagement />
            
             {/* CTA Section */}
             <div className="bg-emerald-600 py-16 text-center text-white">
                <h2 className="text-3xl font-bold mb-6">Ready to Digitize Your Lending Business?</h2>
                <Link to="/contact" className="inline-flex items-center bg-white text-emerald-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors">
                    Request a Demo <ArrowRightCircle className="ml-2" />
                </Link>
            </div>
        </div>
    );
};

export default LoanManagementPage;