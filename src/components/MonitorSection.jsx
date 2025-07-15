import React from "react";
import monitorCardBg from "../assets/monitor-card.jpg";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";


const MonitorSection = () => {
  return (
    <motion.section
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      className="max-w-7xl mx-auto px-4 py-16 md:py-24"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
        {/* Left side - content */}

        <motion.div variants={fadeIn('right', 0.3)} className="w-full md:w-1/2">
          <motion.span
            variants={fadeIn('up', 0.4)}
            className="text-orange-500 font-semibold"
          >
            LIVE MONITORING
          </motion.span>
          <motion.h2
            variants={textVariant(0.5)}
            className="text-3xl md:text-4xl font-bold text-navy-900 mt-4 mb-6  md:w-4/5"
          >
            Track Your Dog’s Walk in Real Time
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.6)}
            className="text-gray-600 mb-8 md:w-4/5"
          >
            Stay connected and worry-free. Get real-time GPS tracking, photo
            updates, and instant summaries after every walk — so you always know
            your dog is safe, happy, and on the move.
          </motion.p>
          <a
            variants={fadeIn("up", 0.7)}
            href="#"
            className="text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all"
          >
            Start Tracking Your First Walk
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>

        {/* Right side - image */}
        <motion.div variants={fadeIn("left", 0.3)} className="w-full md:w-1/2 ">
          <motion.img
            variants={fadeIn("up", 0.5)}
            src={monitorCardBg}
            alt="Dog walk monitoring"
            className="w-full h-auto rounded-2xl"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MonitorSection;
