import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
// Placeholder image use kar rahe hain taaki error na aaye
import womanImage  from "../assets/about/img.jpg";

const PreparingSuccess = () => {

    const features = [
        'Custom Web & Mobile Apps',
        'Next-Gen UI/UX Design',
        'Cloud & Domain Services',
        'AI & Machine Learning Solutions',
        'Real-time Data Synchronization',
        'Secure Hosting Infrastructure',
        '24/7 Cyber Security Monitoring',
        'Dedicated Technical Support'
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 100 }
        }
    };
    
    const imageVariants = {
         hidden: { scale: 0.8, opacity: 0 },
         visible: { 
            scale: 1, 
            opacity: 1,
            transition: { duration: 0.8, ease: [0.17, 0.67, 0.83, 0.67] }
        }
    }

    return (
        <section className="bg-white py-20 lg:py-28 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={containerVariants}
                    >
                        <motion.p variants={itemVariants} className="text-blue-600 font-bold uppercase tracking-widest text-sm">
                            WHO WE ARE
                        </motion.p>
                        <motion.h2 variants={itemVariants} className="mt-3 text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                            Empowering Your Vision with <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Intelligent IT Solutions</span>
                        </motion.h2>
                        <motion.p variants={itemVariants} className="mt-6 text-gray-600 text-lg leading-relaxed">
                            <strong>Renbufix Technologies</strong> is a growing technology startup focused on building cloud-first digital products. Founded in 2025, Renbufix was created to help founders build cloud-first products. we specialize in end-to-end software development, digital transformation, and strategic outsourcing.
                        </motion.p>
                        <motion.p variants={itemVariants} className="mt-4 text-gray-600 text-lg leading-relaxed">
                           Founded by a team of industry veterans, Renbufix is dedicated to engineering high-performance, scalable, and secure digital products that drive tangible business growth for clients worldwide.
                        </motion.p>

                        <motion.div variants={itemVariants} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center group">
                                    <CheckCircle2 size={20} className="text-green-500 flex-shrink-0 group-hover:text-blue-600 transition-colors" />
                                    <span className="ml-3 text-gray-700 font-medium">{feature}</span>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Image Content */}
                    <motion.div 
                        className="relative flex items-center justify-center min-h-[450px]"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={imageVariants}
                    >
                        {/* Background Shapes */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                        <div className="absolute top-0 -left-4 w-72 h-72 bg-cyan-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                        
                        {/* Main Image Frame */}
                        <div className="relative w-full max-w-md aspect-square">
                             <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-[2rem] rotate-6 opacity-20"></div>
                            <img 
                                src={womanImage} 
                                alt="Renbufix Professional Team"
                                className="relative w-full h-full object-cover rounded-[2rem] shadow-2xl border-4 border-white"
                            />
                            
                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3">
                                <div className="bg-green-100 p-2 rounded-full">
                                    <CheckCircle2 className="text-green-600" size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-semibold uppercase">Success Rate</p>
                                    <p className="text-xl font-bold text-gray-900">98%</p>
                                </div>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PreparingSuccess;