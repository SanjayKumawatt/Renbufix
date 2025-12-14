import React from 'react';
import { motion } from 'framer-motion';

// Placeholder for illustration
import uiUxIllustration from "../assets/logodesign/img1.png";

const UiUxIntro = () => {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { x: 20, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 100 }
        }
    };
    
    const imageVariants = {
         hidden: { x: -20, opacity: 0 },
         visible: { 
            x: 0, 
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    }

    return (
        <section className="bg-white py-20 lg:py-28 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Image/Illustration */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={imageVariants}
                    >
                        <div className="relative">
                             {/* Abstract Background Elements for creative vibe */}
                             <div className="absolute top-10 -left-10 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                             <div className="absolute bottom-10 -right-10 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                             
                             <img 
                                src={uiUxIllustration} 
                                alt="UI/UX Design Process Illustration"
                                className="relative w-full h-auto object-contain drop-shadow-2xl rounded-xl z-10 hover:scale-[1.02] transition-transform duration-500"
                            />
                        </div>
                    </motion.div>

                    {/* Right Content */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={containerVariants}
                    >
                        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                            Renbufix Technologies: Crafting <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Exceptional User Experiences</span>
                        </motion.h2>
                        
                        <motion.p variants={itemVariants} className="mt-6 text-gray-600 text-lg leading-relaxed">
                            At <strong>Renbufix Technologies</strong>, we view design as the bridge between technology and human emotion. We specialize in creating seamless, compelling digital experiences that resonate deeply with your audience. As your dedicated UI/UX partner, we deliver bespoke design solutions that elevate your brand's online presence to the cutting edge of innovation.
                        </motion.p>
                        
                        <motion.p variants={itemVariants} className="mt-4 text-gray-600 text-lg leading-relaxed">
                          In a crowded digital landscape, intuitive User Interface (UI) and engaging User Experience (UX) are your strongest differentiators. Whether you are a startup defining your digital identity or an growth-ready revitalizing a legacy platform, our design strategies are tailored to meet your specific business objectives.
                        </motion.p>

                        <motion.p variants={itemVariants} className="mt-4 text-gray-600 text-lg leading-relaxed">
                            We adopt a collaborative, user-centric approach-working intimately with stakeholders to translate complex goals into elegant, functional designs. Let's partner to craft experiences that not only meet expectations but exceed them, driving tangible business results.
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default UiUxIntro;