import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import phoneMockup from '../assets/mobile.png'; // Local path hata diya hai temporary fix ke liye

// Temporary placeholder URL taaki code crash na kare
// const phoneMockup = "https://placehold.co/300x600/png?text=Mobile+App+UI";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">

      {/* ===== FLOATING GREEN BALL (Background) ===== */}
      <motion.div
        className="absolute top-[40%] left-[10%] w-48 h-68 bg-blue-300 rounded-full blur-xl opacity-80 z-0"
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -40, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      {/* ===== FLOATING BLUE BALL (Background) ===== */}
      <motion.div
        className="absolute bottom-[40%] right-[30%] w-54 h-54 bg-cyan-400 rounded-full blur-2xl opacity-80 z-0"
        animate={{
          y: [0, -60, 60, 0],
          x: [0, 40, -40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      {/* ===== HERO CONTENT ===== */}
      <div className="container mx-auto px-6 py-12 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE CONTENT */}
          <motion.div
            className="flex flex-col justify-center text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={itemVariants}
              className="cursor-default text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight"
            >
              Innovating Your Future with <span className="text-blue-600">Renbufix</span> Technologies
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 cursor-default"
            >
              <b> Renbufix</b> is a growing technology startup focused on building cloud-first digital products. We work with startups and growing teams.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex justify-center lg:justify-start space-x-4"
            >
              <Link
                to="/about"
                className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300 shadow-lg"
              >
                DISCOVER MORE
              </Link>
              <Link
                to="/contact"
                className="bg-gray-800 text-white font-bold py-3 px-8 rounded-full hover:bg-black transition-transform transform hover:scale-105 duration-300 shadow-lg"
              >
                GET STARTED
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - PHONE + CENTER BALL */}
          <motion.div
            className="relative flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
          >
            {/* Cyan Ball Behind Phone */}
            <motion.div
              className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-cyan-400 rounded-full blur-3xl opacity-90 z-0"
              animate={{
                y: [0, -30, 30, 0],
                x: [0, 20, -20, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            />

            {/* Phone Mockup */}
            <img
              src={phoneMockup}
              alt="Renbufix Mobile Solution"
              className="relative z-10 max-w-[220px] md:max-w-[300px] drop-shadow-2xl rounded-3x"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;