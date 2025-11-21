import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Tag, Users, Laptop, MessageCircle, CheckCircle2 } from 'lucide-react';

const EngagementModels = () => {

    const models = [
        {
            icon: <Tag size={32} className="text-blue-400" />,
            title: 'Fixed Price Model',
            description: 'Perfect for projects with crystal-clear requirements and frozen scope. We commit to a set budget and timeline, taking full ownership of delivery risks so you don’t have to.',
            points: [
                'Defined Scope & Budget',
                'Zero Hidden Costs',
                'Minimal Supervision Needed'
            ],
            borderColor: 'border-blue-500/30',
            hoverColor: 'hover:border-blue-500'
        },
        {
            icon: <Users size={32} className="text-green-400" />,
            title: 'Dedicated Team',
            description: 'Your own extended team, virtually. Hire pre-vetted experts who work exclusively on your vision, giving you total control, flexibility, and transparency just like in-house staff.',
            points: [
                'Complete Resource Control',
                'Scale Up or Down Instantly',
                'Direct Real-Time Communication'
            ],
            borderColor: 'border-green-500/30',
            hoverColor: 'hover:border-green-500'
        },
        {
            icon: <Laptop size={32} className="text-purple-400" />,
            title: 'On-Site Engagement',
            description: 'When proximity matters. Our specialists join your team at your location to ensure rapid collaboration, high-security compliance, and seamless integration with your internal workflows.',
            points: [
                'Face-to-Face Collaboration',
                'Immediate Feedback Loops',
                'High Security Compliance'
            ],
            borderColor: 'border-purple-500/30',
            hoverColor: 'hover:border-purple-500'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 80 }
        }
    };

    return (
        <section className="relative bg-gray-900 text-white py-20 lg:py-28 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                 <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="scale(2) rotate(45)"><rect x="0" y="0" width="100%" height="100%" fill="none"/><path d="M-10 10h60M10-10v60" stroke="#fff" strokeWidth=".5"/></pattern></defs><rect width="100%" height="100%" fill="url(#grid)"/></svg>
            </div>
            
            {/* Floating Orbs */}
            <motion.div 
                className="absolute top-1/2 left-[-50px] w-48 h-48 bg-blue-600/20 rounded-full blur-3xl z-0"
                animate={{ y: [-20, 20, -20], scale: [1, 1.1, 1] }}
                transition={{ duration: 8, repeat: Infinity }}
            />
             <motion.div 
                className="absolute bottom-0 right-[-50px] w-64 h-64 bg-green-600/20 rounded-full blur-3xl z-0"
                animate={{ x: [-20, 20, -20], scale: [1, 1.2, 1] }}
                transition={{ duration: 10, repeat: Infinity }}
            />

            <div className="container mx-auto px-6 relative z-20">
                {/* Top Content */}
                <motion.div 
                    className="text-center max-w-3xl mx-auto mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold tracking-tight">
                        Flexible <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Engagement Models</span>
                    </motion.h2>
                    <motion.p variants={itemVariants} className="mt-6 text-lg text-gray-300 leading-relaxed">
                        At <strong>Renbufix</strong>, we understand that one size doesn't fit all. Whether you need a fixed roadmap or an agile team, we adapt to your goals, timeline, and budget-guaranteeing transparency at every step.
                    </motion.p>
                    
                    <Link to="/contact">
                        <motion.button 
                            variants={itemVariants}
                            className="mt-8 inline-flex items-center font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 border border-transparent rounded-full py-3 px-8 shadow-lg hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300"
                            whileTap={{ scale: 0.95 }}
                        >
                            <MessageCircle size={20} className="mr-2" />
                            Discuss Your Project
                        </motion.button>
                    </Link>
                </motion.div>

                {/* Engagement Cards Grid */}
                <motion.div 
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={containerVariants}
                >
                    {models.map((model, index) => (
                        <motion.div 
                            key={index}
                            className={`bg-gray-800/40 backdrop-blur-md border ${model.borderColor} ${model.hoverColor} rounded-2xl p-8 group transition-all duration-300 hover:shadow-2xl hover:bg-gray-800/60`}
                            variants={itemVariants}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-gray-700/50 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                    {model.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white">{model.title}</h3>
                            </div>
                            
                            <p className="text-gray-400 mb-8 leading-relaxed h-auto min-h-[80px]">
                                {model.description}
                            </p>
                            
                            <div className="space-y-3 border-t border-gray-700/50 pt-6">
                                {model.points.map((point, i) => (
                                    <div key={i} className="flex items-center text-gray-300">
                                        <CheckCircle2 size={18} className={`mr-3 ${index === 0 ? 'text-blue-400' : index === 1 ? 'text-green-400' : 'text-purple-400'}`} />
                                        <span className="text-sm font-medium">{point}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default EngagementModels;