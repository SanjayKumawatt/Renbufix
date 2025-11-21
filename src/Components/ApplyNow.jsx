import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Phone, MapPin, Briefcase, FileUp, Send, CheckCircle } from 'lucide-react';

// Placeholder for the image
const img = "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop";

// --- Main Apply Now Section Component ---
const ApplyNow = () => {
    const [formStatus, setFormStatus] = useState('idle');

    const handleSubmit = (e) => {
        e.preventDefault(); // 404 Error rokne ke liye ye zaroori hai
        setFormStatus('submitting');

        // Simulating API Call
        setTimeout(() => {
            setFormStatus('success');
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
        <section className="bg-gray-50 py-20 lg:py-28" id="apply-section">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Form */}
                    <motion.div
                        className="bg-white p-8 rounded-2xl shadow-lg"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerVariants}
                    >
                        <AnimatePresence mode="wait">
                            {formStatus === 'success' ? (
                                <motion.div 
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    className="h-[500px] flex flex-col items-center justify-center text-center"
                                >
                                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                        <CheckCircle size={40} className="text-green-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h3>
                                    <p className="text-gray-600 max-w-xs mx-auto">
                                        Thanks for your interest in Renbufix. Our HR team will review your profile and contact you shortly.
                                    </p>
                                    <button 
                                        onClick={() => setFormStatus('idle')}
                                        className="mt-8 px-6 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors font-medium"
                                    >
                                        Submit Another Application
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.div key="form">
                                    <motion.h2 variants={itemVariants} className="text-3xl font-bold text-gray-900 mb-6">
                                        Apply Now
                                    </motion.h2>
                                    
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
                                                <MapPin className="absolute left-3 top-3.5 text-gray-400" size={20} />
                                                <select className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-white text-gray-500">
                                                    <option>Select City</option>
                                                    <option>Faridabad</option>
                                                    <option>Delhi NCR</option>
                                                    <option>Remote</option>
                                                </select>
                                            </motion.div>
                                            <motion.div variants={itemVariants} className="relative">
                                                <Briefcase className="absolute left-3 top-3.5 text-gray-400" size={20} />
                                                <select className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-white text-gray-500">
                                                    <option>Position</option>
                                                    <option>Frontend Developer</option>
                                                    <option>Backend Developer</option>
                                                    <option>UI/UX Designer</option>
                                                    <option>Sales Executive</option>
                                                </select>
                                            </motion.div>
                                            
                                            <motion.div variants={itemVariants} className="relative">
                                                <input type="file" id="cv-upload" className="hidden" />
                                                <label htmlFor="cv-upload" className="w-full p-3 border border-gray-300 rounded-lg flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors text-gray-500">
                                                    <span className="text-sm truncate">Upload CV (PDF/DOC)</span>
                                                    <FileUp size={20} className="text-blue-500" />
                                                </label>
                                            </motion.div>
                                        </div>

                                        <motion.textarea 
                                            variants={itemVariants} 
                                            placeholder="Tell us why you're a great fit..." 
                                            rows="4" 
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                        ></motion.textarea>
                                        
                                        <motion.button 
                                            variants={itemVariants} 
                                            type="submit" 
                                            disabled={formStatus === 'submitting'}
                                            className={`w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg ${formStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                                            whileHover={formStatus !== 'submitting' ? { scale: 1.02 } : {}}
                                            whileTap={formStatus !== 'submitting' ? { scale: 0.98 } : {}}
                                        >
                                            {formStatus === 'submitting' ? (
                                                <span className="flex items-center gap-2">Processing...</span>
                                            ) : (
                                                <>
                                                    <Send size={20} />
                                                    <span>Submit Application</span>
                                                </>
                                            )}
                                        </motion.button>
                                    </form>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* Right Illustration */}
                    <motion.div 
                         initial={{ x: 50, opacity: 0 }}
                         whileInView={{ x: 0, opacity: 1 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.8 }}
                         className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-xl"
                    >
                        <img src={img} alt="Join Renbufix Team" className="absolute inset-0 w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                            <h3 className="text-white text-2xl font-bold">Join Our Mission</h3>
                            <p className="text-gray-200 mt-2">We are building the future of digital solutions. Come be a part of our journey.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ApplyNow;