import React from 'react';
import { motion } from 'framer-motion';

// SVG Icons for stats - Inhe aap alag file mein bhi rakh sakte hain
const EmployeeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.122-1.28-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.122-1.28.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const StarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>;
const AppIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>;
const ClientIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const ExpertIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>;
const GrowthIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>;


const DigitalNeedsSection = () => {

    const statCardVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: (i) => ({
            opacity: 1,
            scale: 1,
            transition: {
                delay: i * 0.15,
                type: 'spring',
                stiffness: 120
            }
        })
    };

    // const stats = [
    //     { icon: <EmployeeIcon />, value: '95%', text: 'Employee Retention Rate', subtext: 'Strong Culture = Loyal Team', position: 'top-0 left-1/4' },
    //     { icon: <ClientIcon />, value: '98%', text: 'Client Satisfaction', subtext: 'Across All Projects', position: 'top-1/4 right-0' },
    //     { icon: <ExpertIcon />, value: '1500+', text: 'In-House Experts', subtext: 'Developers & Designers', position: 'top-1/2 right-1/4' },
    //     { icon: <GrowthIcon />, value: '10+', text: 'Years of Excellence', subtext: 'in Digital Innovation & Growth', position: 'bottom-1/4 right-0' },
    //     { icon: <AppIcon />, value: '30M+', text: 'App Downloads on', subtext: 'iOS + Android Platforms', position: 'bottom-0 right-1/4' },
    //     { icon: <StarIcon />, value: '4.9 / 5', text: 'Rated on Clutch, Upwork,', subtext: 'Google & GoodFirms', position: 'top-1/2 left-0 -translate-x-1/4' },
    // ];

    return (
        <div className="relative bg-[#0070f3] text-white py-20 lg:py-32 overflow-hidden">
            {/* Dotted background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:32px_32px] opacity-30"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Text Content 
                    One Partner. Every Digital Solution. All Under One Roof.
                    */}
                    <motion.div 
                        className="cursor-default"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                            One Partner. <br /> Every Digital Solution. <br /> All Under One Roof.
                        </h1>
                        <p className="mt-6 text-lg text-gray-200">
                            Renbufix Technologies offers a powerful suite of services including web development, mobile apps, cloud integration, and AI-driven solutions to help your business scale efficiently and smartly.
                        </p>
                        <p className="mt-4 text-lg text-gray-200">
                            We work with startups, SMEs, enterprises, and government organizations to deliver tailor-made digital products that drive measurable results across industries.
                        </p>
                        <p className="mt-4 text-lg text-gray-200">
                            With over 10+ years of experience, Renbufix Technologies bridges the gap between vision and execution-delivering reliable offshore development services without compromise.
                        </p>
                        <ul className="mt-8 space-y-3 text-lg">
                            <li className="flex items-center"><span className="text-yellow-400 mr-3 text-2xl">◆</span> End-to-End Digital Solutions</li>
                            <li className="flex items-center"><span className="text-yellow-400 mr-3 text-2xl">◆</span> Agile & Scalable Team Structure</li>
                            <li className="flex items-center"><span className="text-yellow-400 mr-3 text-2xl">◆</span> Business-Centric Product Delivery</li>
                            <li className="flex items-center"><span className="text-yellow-400 mr-3 text-2xl">◆</span> Ongoing Support & Optimization</li>
                        </ul>
                    </motion.div>

                    {/* Right Stats Section */}
                    <div className="relative h-[500px] w-full flex items-center justify-center">
                        {/* Central Gradient Circle */}
                        <motion.div 
                            className="absolute w-64 h-64 bg-gradient-to-br from-blue-400 to-yellow-300 rounded-full"
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                        />
                        {/* Concentric Rings */}
                        <div className="absolute w-[400px] h-[400px] border-2 border-white/20 rounded-full"></div>
                        <div className="absolute w-[500px] h-[500px] border border-white/10 rounded-full"></div>

                        {/* Stat Cards Mapping */}
                        {/* {stats.map((stat, i) => (
                            <motion.div 
                                key={i}
                                className={`absolute p-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg text-gray-800 w-48 ${stat.position}`}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={statCardVariants}
                            >
                                <div className="flex items-center space-x-3">
                                    {stat.icon}
                                    <p className="text-xl font-bold">{stat.value}</p>
                                </div>
                                <p className="mt-2 text-sm font-semibold">{stat.text}</p>
                                <p className="text-xs text-gray-500">{stat.subtext}</p>
                            </motion.div>
                        ))} */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DigitalNeedsSection;
