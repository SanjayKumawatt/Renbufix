import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Smartphone, Code, ShoppingCart, Paintbrush, Cloud, Package, 
  Rocket, BarChart3, Building2, Handshake, MessageCircle, ArrowRightCircle, 
  Tag, Users, Laptop, CheckCircle2, Briefcase, Activity, Presentation, Gauge,
  Mail, MapPin, Check, Diamond, CalendarCheck, Wallet, User, Send, Phone,
  MousePointerClick, Database, UserCheck, TrendingUp, Search,
  ChevronRight, Apple, Bot, Watch, ToyBrick, HeartPulse, PencilRuler, TestTube2, Wrench, ShieldCheck, Scaling
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


// ==========================================
// SCROLL TO TOP COMPONENT
// ==========================================
const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

// ==========================================
// 1. HEADER COMPONENT
// ==========================================
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY < lastScrollY || currentScrollY < 10) {
                setIsHeaderVisible(true);
            } else {
                setIsHeaderVisible(false);
            }
            setLastScrollY(currentScrollY);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <header className={`fixed block top-0 left-0 w-full bg-white bg-opacity-95 backdrop-blur-sm shadow-md z-50 transition-transform duration-300 ease-in-out ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="container mx-auto px-4">
                <nav className='flex items-center justify-between h-20 lg:h-24'>
                    <Link to="/" className="flex items-center gap-2" >
                        <img src={logo} alt="Renbufix Logo" className='h-10 lg:h-12' /> 
                        <div className="flex flex-col">
                            <span className='text-xl lg:text-2xl font-bold text-blue-600 leading-tight'>Renbufix</span>
                            <span className='text-xs font-medium text-gray-600 tracking-wider'>Technologies</span>
                        </div>
                    </Link>
                    <ul className="hidden lg:flex items-center space-x-8">
                        <li className="relative group">
                            <Link to="/" className="flex items-center text-gray-700 hover:text-blue-600 font-medium py-4">Home</Link>
                        </li>
                        <li className="relative group">
                            <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium py-4">
                                Services <ChevronRight size={16} className="ml-1 rotate-90" />
                            </button>
                            <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md w-56 py-2 border border-gray-100">
                                <Link to="/mobile-app" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Mobile App Development</Link>
                                <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Web Development</Link>
                            </div>
                        </li>
                        <li className="relative group">
                            <Link to="/contact" className="flex items-center text-gray-700 hover:text-blue-600 font-medium py-4">Contact</Link>
                        </li>
                    </ul>
                    <div className="flex items-center space-x-4">
                        <Link to="/contact">
                            <button className="hidden sm:block bg-blue-600 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-700 transition-colors shadow-md">CONTACT US</button>
                        </Link>
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-gray-800">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
                        </button>
                    </div>
                </nav>
            </div>
             {isMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-200 p-4">
                    <div className="flex flex-col space-y-4 text-center">
                        <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                        <Link to="/mobile-app" onClick={() => setIsMenuOpen(false)}>Mobile Apps</Link>
                        <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="bg-blue-600 text-white py-2 rounded-full">Contact Us</Link>
                    </div>
                </div>
            )}
        </header>
    );
};

// ==========================================
// HOME PAGE SECTIONS (Combined for brevity)
// ==========================================
const HeroSection = () => (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-20">
        <motion.div className="absolute top-[40%] left-[10%] w-48 h-68 bg-blue-300 rounded-full blur-xl opacity-50 z-0" animate={{ x: [0, 50, -50, 0], y: [0, -40, 40, 0] }} transition={{ duration: 10, repeat: Infinity }} />
        <motion.div className="absolute bottom-[40%] right-[30%] w-54 h-54 bg-cyan-400 rounded-full blur-2xl opacity-50 z-0" animate={{ y: [0, -60, 60, 0], x: [0, 40, -40, 0] }} transition={{ duration: 12, repeat: Infinity }} />
        <div className="container mx-auto px-6 py-12 lg:py-24 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">Innovating Your Future with <span className="text-blue-600">Renbufix</span> Technologies</h1>
                    <p className="mt-6 text-lg text-gray-600 max-w-lg">Partner with <strong>Renbufix</strong> to build secure, scalable, and cutting-edge digital ecosystems.</p>
                    <div className="mt-8 flex space-x-4">
                        <Link to="/mobile-app" className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 shadow-lg">EXPLORE APPS</Link>
                        <Link to="/contact" className="bg-gray-800 text-white font-bold py-3 px-8 rounded-full hover:bg-black shadow-lg">GET STARTED</Link>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative flex justify-center">
                        <div className="absolute w-[300px] h-[300px] bg-cyan-400 rounded-full blur-3xl opacity-50"></div>
                    <img src={phoneMockup} alt="Mobile Solution" className="relative z-10 max-w-[220px] md:max-w-[280px] drop-shadow-2xl rounded-3xl border-4 border-gray-800 bg-gray-800" />
                </motion.div>
            </div>
        </div>
    </section>
);

const CompanyIntro = () => (
    <section className="bg-white py-20 lg:py-28">
        <motion.div className="container mx-auto px-6 text-center max-w-4xl" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-600 tracking-tight uppercase">RENBUFIX TECHNOLOGIES PRIVATE LIMITED</h2>
            <p className="mt-8 text-gray-600 text-lg leading-relaxed"><strong>Renbufix Technologies Private Limited</strong> takes pride in driving significant advancements within the global software landscape.</p>
        </motion.div>
    </section>
);

const ServicesSection = () => {
    const services = [
        { icon: <Smartphone size={28} className="text-green-600" />, title: 'Mobile App Development', description: 'Custom Android & iOS apps built for performance.' },
        { icon: <Code size={28} className="text-green-600" />, title: 'Website Development', description: 'Modern, responsive websites that drive engagement.' },
        { icon: <ShoppingCart size={28} className="text-green-600" />, title: 'Ecommerce Solutions', description: 'Build secure and scalable online stores.' },
        { icon: <Cloud size={28} className="text-green-600" />, title: 'ServiceNow Service', description: 'Enterprise cloud solutions to optimize workflows.' },
    ];
    return (
        <section className="relative bg-gray-50 py-20 lg:py-28">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16"><h2 className="text-4xl font-bold text-gray-800">Our <span className="text-blue-600">Services</span></h2></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all">
                            <div className="flex justify-between items-start mb-4"><h3 className="text-xl font-bold text-gray-800">{service.title}</h3><div className="bg-green-100 p-2 rounded-lg">{service.icon}</div></div>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// ==========================================
// MOBILE APP DEVELOPMENT PAGE COMPONENTS
// ==========================================

// 1. Mobile App Hero
const MobileAppHero = () => {
    const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } } };
    const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } } };

    return (
        <section className="relative h-[500px] md:h-[600px] flex items-center justify-center text-white overflow-hidden pt-20">
            <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-black/80 z-10"></div>
            
            <motion.div className="relative z-20 text-center px-4" initial="hidden" animate="visible" variants={containerVariants}>
                <motion.h1 className="text-5xl md:text-7xl font-extrabold tracking-tight" variants={itemVariants}>
                    Mobile App Development
                </motion.h1>
                <motion.p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto" variants={itemVariants}>
                    Engineering next-gen mobile experiences for iOS and Android that drive growth.
                </motion.p>
                <motion.div className="mt-8 flex items-center justify-center text-lg text-gray-300" variants={itemVariants}>
                    <Link to="/" className="hover:text-blue-400 transition-colors font-medium">HOME</Link>
                    <ChevronRight size={20} className="mx-2 text-gray-500" />
                    <span className="text-blue-400 font-semibold">Mobile App Development</span>
                </motion.div>
            </motion.div>
        </section>
    );
};

// 2. Mobile App Intro
const MobileAppIntro = () => {
    return (
        <section className="bg-white py-20 lg:py-28 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }}>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-blue-100 rounded-xl transform rotate-3"></div>
                            <img src={mobileAppIllustration} alt="Mobile App Development" className="relative rounded-xl shadow-2xl w-full h-auto object-cover"/>
                        </div>
                    </motion.div>
                    <motion.div initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }}>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                            Transforming Ideas into <span className="text-blue-600">Powerful Mobile Apps</span>
                        </h2>
                        <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                            At <strong>Renbufix Technologies</strong>, we are a premier mobile app development partner in India, dedicated to crafting innovative and high-performance mobile applications. Our expertise in native and hybrid app development allows us to create solutions that not only look stunning but also deliver exceptional user experiences.
                        </p>
                        <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                            We understand that every app has a unique purpose. Our team collaborates closely with you to understand your vision and create a custom application that meets your specific goals, helping you achieve measurable business impact and ROI.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            {['Native iOS', 'Native Android', 'Flutter', 'React Native'].map(tag => (
                                <span key={tag} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">{tag}</span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

// 3. App Types
const AppTypes = () => {
    const appServices = [
        { icon: <Apple size={32} />, title: 'iOS Development', desc: 'Engaging and high-performance apps tailored for the Apple ecosystem with Swift & SwiftUI.' },
        { icon: <Bot size={32} />, title: 'Android Development', desc: 'Scalable and feature-rich applications for the global Android market using Kotlin & Java.' },
        { icon: <Smartphone size={32} />, title: 'Hybrid App Development', desc: 'Cross-platform solutions using Flutter & React Native to save time and cost without compromising quality.' },
        { icon: <Watch size={32} />, title: 'Wearable App Development', desc: 'Innovative apps for smartwatches and wearable devices, integrating seamlessly with mobile.' },
        { icon: <ToyBrick size={32} />, title: 'IoT App Development', desc: 'Smart connectivity solutions connecting devices to create seamless, integrated user experiences.' },
        { icon: <HeartPulse size={32} />, title: 'App Modernization', desc: 'Revamping legacy applications with modern UI/UX and tech stacks for better performance.' }
    ];

    return (
        <section className="bg-gray-50 py-20 lg:py-28">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">Our Mobile App Expertise</h2>
                    <p className="mt-4 text-gray-600">Covering every aspect of the mobile lifecycle.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {appServices.map((service, index) => (
                        <motion.div 
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border-t-4 border-transparent hover:border-blue-600"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="inline-block p-4 bg-blue-50 text-blue-600 rounded-xl mb-6">{service.icon}</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// 4. Development Process
const DevelopmentProcess = () => {
    const processSteps = [
        { icon: <Search size={24} />, title: 'Discovery & Strategy' },
        { icon: <PencilRuler size={24} />, title: 'UI/UX Design' },
        { icon: <Code size={24} />, title: 'Development' },
        { icon: <TestTube2 size={24} />, title: 'Testing & QA' },
        { icon: <Rocket size={24} />, title: 'Deployment' },
        { icon: <Wrench size={24} />, title: 'Support & Scale' }
    ];
    return (
        <section className="py-20 lg:py-28 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                     <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">Our App Development Process</h2>
                </div>
                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-gray-100"></div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                        {processSteps.map((step, index) => (
                             <motion.div 
                                key={index} 
                                className="text-center relative z-10"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                            >
                                <div className="w-24 h-24 mx-auto rounded-full bg-white border-4 border-blue-100 flex items-center justify-center text-blue-600 shadow-lg mb-6 hover:bg-blue-600 hover:text-white transition-colors duration-300">
                                    {step.icon}
                                </div>
                                <h3 className="text-lg font-bold text-gray-800">{step.title}</h3>
                                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-1 bg-blue-100 -z-10" style={{ display: index === processSteps.length - 1 ? 'none' : 'block' }}></div>
                             </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// 5. Why Choose Mobile
const WhyChooseMobile = () => {
     const benefits = [
        { icon: <Users size={32}/>, title: 'Expert Team', description: 'Founded by a team passionate about building scalable products.' },
        { icon: <ShieldCheck size={32}/>, title: 'Scalable & Secure', description: 'We build robust apps designed to handle millions of users while ensuring enterprise-grade security.' },
        { icon: <Scaling size={32}/>, title: 'Agile Methodology', description: 'We use agile sprints to ensure flexibility, transparency, and faster time-to-market.' },
        { icon: <MessageCircle size={32}/>, title: 'Transparent Comm', description: 'We maintain clear and constant communication throughout the project lifecycle, keeping you in the loop.' },
    ];
    return (
         <section className="bg-gray-900 text-white py-20 lg:py-28">
            <div className="container mx-auto px-6">
                 <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold">Why Partner With Renbufix?</h2>
                    <p className="mt-4 text-gray-400">We deliver excellence, not just apps.</p>
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

// ==========================================
// PAGE: MOBILE APP DEVELOPMENT
// ==========================================
const MobileAppDevelopmentPage = () => {
    return (
        <div className="bg-white">
            <MobileAppHero />
            <MobileAppIntro />
            <AppTypes />
            <DevelopmentProcess />
            <WhyChooseMobile />
            <div className="bg-blue-600 py-16 text-center text-white">
                <h2 className="text-3xl font-bold mb-6">Ready to Build Your Dream App?</h2>
                <Link to="/contact" className="inline-flex items-center bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors">
                    Get a Free Quote <ArrowRightCircle className="ml-2" />
                </Link>
            </div>
        </div>
    );
};

export default MobileAppDevelopmentPage;
