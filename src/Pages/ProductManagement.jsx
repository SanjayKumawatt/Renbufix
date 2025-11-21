import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    ChevronRight, Layers, Code, Rocket, Settings, 
    Smartphone, Monitor, Globe, Cpu, PenTool, Zap,
    CheckCircle2, Lightbulb, ArrowRightCircle
} from 'lucide-react';

// Image Placeholder
const productDevIllustration = "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop";

// --- 1. Hero Section Component ---
const ProductDevHero = () => {
    const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } } };
    const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } } };

    return (
        <section className="relative h-[500px] md:h-[600px] flex items-center justify-center text-white overflow-hidden pt-20">
            <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-b from-orange-900/80 to-black/80 z-10"></div>
            
            <motion.div className="relative z-20 text-center px-4" initial="hidden" animate="visible" variants={containerVariants}>
                <motion.h1 className="text-5xl md:text-7xl font-extrabold tracking-tight" variants={itemVariants}>
                    Product Development
                </motion.h1>
                <motion.p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto" variants={itemVariants}>
                    From Concept to Market-Ready Software Products.
                </motion.p>
                <motion.div className="mt-8 flex items-center justify-center text-lg text-gray-300" variants={itemVariants}>
                    <Link to="/" className="hover:text-orange-400 transition-colors font-medium">HOME</Link>
                    <ChevronRight size={20} className="mx-2 text-gray-500" />
                    <span className="text-orange-400 font-semibold">Product Development</span>
                </motion.div>
            </motion.div>
        </section>
    );
};

// --- 2. Intro Section Component ---
const ProductDevIntro = () => {
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
                            Building Future-Ready Products with <span className="text-blue-600">Renbufix Innovation</span>
                        </h2>
                        <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                            At <strong>Renbufix Technologies</strong>, product development is more than just coding; it's about bringing visionary ideas to life. We help startups and enterprises build scalable, robust, and user-centric software products that disrupt markets and solve real-world problems.
                        </p>
                        <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                            Our end-to-end product engineering services cover the entire lifecycle-from ideation and prototyping to development, testing, and deployment. Whether you need a SaaS platform, a cloud-native application, or an enterprise-grade solution, we deliver excellence at every stage.
                        </p>
                    </motion.div>
                    <motion.div 
                        initial={{ x: 50, opacity: 0 }} 
                        whileInView={{ x: 0, opacity: 1 }} 
                        viewport={{ once: true }} 
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="relative">
                             <div className="absolute -inset-4 bg-orange-100 rounded-xl transform -rotate-3"></div>
                             <img src={productDevIllustration} alt="Product Development Lifecycle" className="relative rounded-xl shadow-2xl w-full h-auto object-cover"/>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

// --- 3. Product Lifecycle Section ---
const ProductLifecycle = () => {
    const steps = [
        { icon: <Lightbulb size={32} />, title: 'Ideation & Strategy', desc: 'We brainstorm, validate ideas, and define a roadmap for success.' },
        { icon: <PenTool size={32} />, title: 'UI/UX Design', desc: 'Creating intuitive prototypes and designs that users love.' },
        { icon: <Code size={32} />, title: 'Engineering', desc: 'Writing clean, scalable code using modern tech stacks.' },
        { icon: <Settings size={32} />, title: 'QA & Testing', desc: 'Rigorous testing to ensure bug-free performance.' },
        { icon: <Rocket size={32} />, title: 'Launch & Scale', desc: 'Deploying to the market and scaling based on user feedback.' },
        { icon: <Layers size={32} />, title: 'Maintenance', desc: 'Continuous support and updates to keep your product ahead.' },
    ];

    return (
        <section className="bg-gray-50 py-20 lg:py-28">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">Our Development Lifecycle</h2>
                    <p className="mt-4 text-gray-600">A structured approach to building world-class products.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div 
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border-b-4 border-transparent hover:border-orange-500"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="inline-block p-4 bg-orange-50 text-orange-600 rounded-xl mb-4">{step.icon}</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- 4. Expertise Section ---
const OurExpertise = () => {
    const areas = [
        { title: 'SaaS Development', points: ['Multi-tenant Architecture', 'Subscription Billing', 'Scalable Cloud Infra'] },
        { title: 'MVP Development', points: ['Rapid Prototyping', 'Core Feature Focus', 'Fast Market Entry'] },
        { title: 'Enterprise Software', points: ['Complex Workflows', 'High Security', 'Legacy Integration'] },
        { title: 'API Development', points: ['RESTful & GraphQL', 'Secure Endpoints', 'Third-party Integrations'] }
    ];

    return (
        <section className="bg-white py-20 lg:py-28">
            <div className="container mx-auto px-6">
                 <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">Core Expertise</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {areas.map((area, index) => (
                        <motion.div 
                            key={index}
                            className="border border-gray-200 rounded-xl p-8 hover:border-orange-500 transition-colors"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">{area.title}</h3>
                            <ul className="space-y-3">
                                {area.points.map((point, i) => (
                                    <li key={i} className="flex items-center text-gray-600">
                                        <CheckCircle2 size={20} className="text-green-500 mr-3" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- Main Page Component ---
const ProductDevelopmentPage = () => {
    return (
        <div className="bg-white">
            <ProductDevHero />
            <ProductDevIntro />
            <ProductLifecycle />
            <OurExpertise />
            
            {/* CTA Section */}
            <div className="bg-orange-600 py-16 text-center text-white">
                <h2 className="text-3xl font-bold mb-6">Have a Product Idea?</h2>
                <Link to="/contact" className="inline-flex items-center bg-white text-orange-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors">
                    Let's Build It <ArrowRightCircle className="ml-2" />
                </Link>
            </div>
        </div>
    );
};

export default ProductDevelopmentPage;