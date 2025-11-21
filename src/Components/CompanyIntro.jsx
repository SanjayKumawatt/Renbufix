import React from 'react';
import { motion } from 'framer-motion';

const CompanyIntro = () => {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.2 }
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
        <section className="bg-white py-20 lg:py-28">
            <motion.div
                className="container mx-auto px-6 text-center max-w-4xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
            >
                <motion.h2
                    variants={itemVariants}
                    className="text-3xl md:text-4xl font-extrabold text-blue-600 tracking-tight uppercase"
                >
                    RENBUFIX TECHNOLOGIES PRIVATE LIMITED
                </motion.h2>

                <motion.div
                    variants={itemVariants}
                    className="mt-8 space-y-6 text-gray-600 text-lg leading-relaxed"
                >
                    <p>
                        <strong>Renbufix Technologies Private Limited</strong> takes pride in driving significant advancements within the global software landscape. Fueled by an unyielding passion for innovation and a steadfast commitment to our clients, we have carved a distinct identity in a competitive marketplace.
                    </p>
                    <p>
                        Our relentless pursuit of excellence empowers us to consistently deliver state-of-the-art solutions that push technological boundaries. This journey is defined by numerous milestones that stand as a testament to our dedication to superior quality and unwavering customer satisfaction.
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default CompanyIntro;