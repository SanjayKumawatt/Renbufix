import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    ChevronRight, GraduationCap, BookOpen, Bus, CalendarCheck, 
    DollarSign, UserCheck, FileText, BarChart3, Users, 
    School, ShieldCheck, Smartphone, Cloud, ArrowRightCircle, CheckSquare 
} from 'lucide-react';

// Image Placeholder
const educationIllustration = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop";

// --- 1. Hero Section Component ---
const EducationHero = () => {
    const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } } };
    const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } } };

    return (
        <section className="relative h-[500px] md:h-[600px] flex items-center justify-center text-white overflow-hidden pt-20">
            <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/90 to-black/80 z-10"></div>
            
            <motion.div className="relative z-20 text-center px-4" initial="hidden" animate="visible" variants={containerVariants}>
                <motion.h1 className="text-5xl md:text-7xl font-extrabold tracking-tight" variants={itemVariants}>
                    Education Management Software
                </motion.h1>
                <motion.p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto" variants={itemVariants}>
                    Smart ERP Solutions for Schools, Colleges & Coaching Institutes.
                </motion.p>
                <motion.div className="mt-8 flex items-center justify-center text-lg text-gray-300" variants={itemVariants}>
                    <Link to="/" className="hover:text-indigo-400 transition-colors font-medium">HOME</Link>
                    <ChevronRight size={20} className="mx-2 text-gray-500" />
                    <span className="text-indigo-400 font-semibold">Education ERP</span>
                </motion.div>
            </motion.div>
        </section>
    );
};

// --- 2. Intro Section Component ---
const EducationIntro = () => {
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
                            Transforming Campus Administration with <span className="text-blue-600">Renbufix Solutions</span>
                        </h2>
                        <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                            At <strong>Renbufix Technologies</strong>, we understand the complexities of running an educational institution. Our comprehensive Education Management Software (EMS) is designed to digitize and automate every aspect of campus life-from admission and fee collection to academics and transport.
                        </p>
                        <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                            Our goal is to bridge the gap between administration, teachers, students, and parents. By moving away from paper-based processes to a centralized cloud-based platform, we help you save time, reduce costs, and focus on what matters most-quality education.
                        </p>
                    </motion.div>
                    <motion.div 
                        initial={{ x: 50, opacity: 0 }} 
                        whileInView={{ x: 0, opacity: 1 }} 
                        viewport={{ once: true }} 
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="relative">
                             <div className="absolute -inset-4 bg-indigo-100 rounded-xl transform -rotate-3"></div>
                             <img src={educationIllustration} alt="Education ERP Dashboard" className="relative rounded-xl shadow-2xl w-full h-auto object-cover"/>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

// --- 3. Key Features Section ---
const EducationFeatures = () => {
    const features = [
        { icon: <UserCheck size={32} />, title: 'Admission Management', desc: 'Streamline the entire admission process from inquiry to enrollment with digital forms.' },
        { icon: <DollarSign size={32} />, title: 'Fee Collection', desc: 'Automated fee generation, online payments, receipts, and pending dues reminders.' },
        { icon: <CalendarCheck size={32} />, title: 'Attendance Tracking', desc: 'Digital attendance for students and staff via app or biometric integration.' },
        { icon: <FileText size={32} />, title: 'Exam & Results', desc: 'Manage exam schedules, generate hall tickets, and publish report cards instantly.' },
        { icon: <BookOpen size={32} />, title: 'Library Management', desc: 'Track book inventory, issues, returns, and fines with a barcode-enabled system.' },
        { icon: <Bus size={32} />, title: 'Transport Management', desc: 'Manage vehicle routes, driver details, and track student pick-up/drop-off status.' },
    ];

    return (
        <section className="bg-gray-50 py-20 lg:py-28">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">Core Modules</h2>
                    <p className="mt-4 text-gray-600">Everything you need to manage your institution efficiently.</p>
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

// --- 4. User Panels (Tabs) Section ---
const UserPanels = () => {
    const [activeTab, setActiveTab] = useState('Admin');

    const tabContent = {
        'Admin': {
            title: 'Admin Dashboard',
            icon: <ShieldCheck size={24} />,
            content: [
                'Complete control over all modules and user roles.',
                'Detailed analytics on fees, attendance, and academic performance.',
                'Manage staff payroll, leave requests, and inventory.',
                'Send bulk SMS/Notifications to parents and students.',
                'Generate customizable reports for decision making.'
            ]
        },
        'Teacher': {
            title: 'Teacher Portal',
            icon: <School size={24} />,
            content: [
                'Mark daily attendance effortlessly via mobile or web.',
                'Create and upload homework, assignments, and study materials.',
                'Enter exam marks and generate automated report cards.',
                'View timetable and manage leave applications.',
                'Communicate directly with parents regarding student progress.'
            ]
        },
        'Student': {
            title: 'Student App',
            icon: <GraduationCap size={24} />,
            content: [
                'Access timetable, syllabus, and holiday calendar.',
                'Download homework assignments and study notes.',
                'View attendance history and exam results.',
                'Pay school fees online securely.',
                'Participate in online quizzes and live classes.'
            ]
        },
        'Parent': {
            title: 'Parent Portal',
            icon: <Users size={24} />,
            content: [
                'Real-time updates on child’s attendance and homework.',
                'Instant fee payment and receipt generation.',
                'Track school bus location (GPS integration).',
                'Direct communication channel with teachers and management.',
                'View exam schedules and performance reports.'
            ]
        }
    };

    return (
        <section className="bg-white py-20 lg:py-28">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">Dedicated Panels for Everyone</h2>
                    <p className="mt-4 text-gray-600">A unified platform connecting all stakeholders.</p>
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
                                    ? 'bg-indigo-600 text-white border-indigo-800 shadow-md' 
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
                                    <div className="p-3 bg-indigo-100 text-indigo-600 rounded-full mr-4 shadow-sm">
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

// --- 5. Why Choose Us Section ---
const WhyChooseEducation = () => {
     const benefits = [
        { icon: <Cloud size={32}/>, title: 'Cloud-Based', description: 'Access your data anytime, anywhere, on any device with our secure cloud servers.' },
        { icon: <Smartphone size={32}/>, title: 'Mobile App', description: 'Comes with a branded Android/iOS app for parents, students, and teachers.' },
        { icon: <ShieldCheck size={32}/>, title: 'Data Security', description: 'Advanced encryption and regular backups ensure your institutional data is always safe.' },
        { icon: <BarChart3 size={32}/>, title: 'Cost Effective', description: 'Affordable pricing plans tailored for small schools to large universities.' },
    ];
    return (
         <section className="bg-gray-900 text-white py-20 lg:py-28">
            <div className="container mx-auto px-6">
                 <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold">Why Choose Renbufix ERP?</h2>
                    <p className="mt-4 text-gray-400">Reliable, Scalable, and Smart.</p>
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
const EducationSoftwarePage = () => {
    return (
        <div className="bg-white">
            <EducationHero />
            <EducationIntro />
            <EducationFeatures />
            <UserPanels />
            <WhyChooseEducation />
            
             {/* CTA Section */}
             <div className="bg-indigo-600 py-16 text-center text-white">
                <h2 className="text-3xl font-bold mb-6">Ready to Digitize Your Campus?</h2>
                <Link to="/contact" className="inline-flex items-center bg-white text-indigo-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors">
                    Schedule a Demo <ArrowRightCircle className="ml-2" />
                </Link>
            </div>
        </div>
    );
};

export default EducationSoftwarePage;