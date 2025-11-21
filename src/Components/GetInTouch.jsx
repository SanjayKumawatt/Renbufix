import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, MessageSquare, Building, Send, Phone, CheckCircle } from 'lucide-react';

const GetInTouch = () => {
    const [formStatus, setFormStatus] = useState('idle'); // 'idle', 'submitting', 'success'

    const handleSubmit = (e) => {
        e.preventDefault(); // Page reload rokne ke liye zaroori hai
        setFormStatus('submitting');

        // Fake API call simulation (2 seconds)
        setTimeout(() => {
            setFormStatus('success');
            // Yahan aap baad mein actual API integration kar sakte hain
        }, 2000);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
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

    return (
        <section className="bg-gray-50 py-20 lg:py-28" id="contact-section">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white shadow-2xl rounded-2xl overflow-hidden">
                    
                    {/* Left Form Section */}
                    <motion.div
                        className="lg:col-span-7 p-8 md:p-12 bg-white"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerVariants}
                    >
                        <AnimatePresence mode="wait">
                            {formStatus === 'success' ? (
                                // Success Message View
                                <motion.div 
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    className="h-full flex flex-col items-center justify-center text-center py-10"
                                >
                                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                        <CheckCircle size={40} className="text-green-600" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                                    <p className="text-gray-600 max-w-md">
                                        Thank you for contacting Renbufix Technologies. Our team has received your message and will get back to you within 24 hours.
                                    </p>
                                    <button 
                                        onClick={() => setFormStatus('idle')}
                                        className="mt-8 text-blue-600 font-semibold hover:underline"
                                    >
                                        Send another message
                                    </button>
                                </motion.div>
                            ) : (
                                // Form View
                                <motion.div key="form">
                                    <motion.h2 variants={itemVariants} className="text-3xl font-bold text-gray-900 mb-2">
                                        Get In Touch
                                    </motion.h2>
                                    <motion.p variants={itemVariants} className="text-gray-600 mb-8">
                                        Have a project in mind? Let's discuss how we can help you grow.
                                    </motion.p>
                                    
                                    <form className="space-y-6" onSubmit={handleSubmit}>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <motion.div variants={itemVariants} className="relative">
                                                <User className="absolute left-3 top-3.5 text-gray-400" size={20} />
                                                <input required type="text" placeholder="Your Name" className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                                            </motion.div>
                                            <motion.div variants={itemVariants} className="relative">
                                                <Mail className="absolute left-3 top-3.5 text-gray-400" size={20} />
                                                <input required type="email" placeholder="Your Email" className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                                            </motion.div>
                                            <motion.div variants={itemVariants} className="relative">
                                                <Phone className="absolute left-3 top-3.5 text-gray-400" size={20} />
                                                <input required type="tel" placeholder="Your Phone" className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                                            </motion.div>
                                            <motion.div variants={itemVariants} className="relative">
                                                <MessageSquare className="absolute left-3 top-3.5 text-gray-400" size={20} />
                                                <input required type="text" placeholder="Subject" className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                                            </motion.div>
                                        </div>

                                        <motion.textarea 
                                            required
                                            variants={itemVariants} 
                                            placeholder="Tell us about your project..." 
                                            rows="5" 
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                        ></motion.textarea>
                                        
                                        <motion.button 
                                            variants={itemVariants} 
                                            type="submit" 
                                            disabled={formStatus === 'submitting'}
                                            className={`w-full sm:w-auto font-bold py-3 px-8 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2 shadow-lg 
                                                ${formStatus === 'submitting' ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-blue-500/30'}`}
                                            whileHover={formStatus !== 'submitting' ? { scale: 1.02 } : {}}
                                            whileTap={formStatus !== 'submitting' ? { scale: 0.98 } : {}}
                                        >
                                            {formStatus === 'submitting' ? (
                                                <>
                                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                    <span className="text-white">Sending...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <Send size={20} />
                                                    <span>Send Message</span>
                                                </>
                                            )}
                                        </motion.button>
                                    </form>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* Right Contact Info */}
                    <motion.div 
                        className="lg:col-span-5 bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 md:p-12 flex flex-col justify-center relative overflow-hidden"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Decorative Circles */}
                        <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white opacity-10 rounded-full"></div>
                        <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-32 h-32 bg-white opacity-10 rounded-full"></div>

                        <div className="space-y-8 relative z-10">
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold mb-2">Contact Information</h3>
                                <p className="text-blue-100">We'd love to hear from you. Reach out to us directly.</p>
                            </div>

                            <div>
                                <div className="flex items-start mb-2">
                                    <div className="bg-white/20 p-3 rounded-lg mr-4 backdrop-blur-sm">
                                        <Building size={24} className="text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold">Head Office</h3>
                                        <p className="mt-1 text-blue-100 text-sm leading-relaxed">
                                            G 24 Block 20, Dheeraj Nagar,<br />
                                            Amarnagar (Faridabad),<br />
                                            Faridabad, Haryana, India - 121003
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div>
                                 <div className="flex items-center">
                                    <div className="bg-white/20 p-3 rounded-lg mr-4 backdrop-blur-sm">
                                        <Mail size={24} className="text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold">Company Email</h3>
                                        <a href="mailto:support@renbufix.com" className="mt-1 block hover:text-blue-200 transition-colors text-blue-100">
                                            support@renbufix.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default GetInTouch;