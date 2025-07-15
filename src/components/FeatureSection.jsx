import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
const FeatureSection = () => {
  const features = [
    {
      icon: "🐶",
      title: "Tell us about your pup",
      description:
        "Let us know your dog’s needs, energy level, and routine preferences",
    },
    {
      icon: "🕒",
      title: "Pick your schedule",
      description:
        "Choose walk times that suit your lifestyle—morning, midday, or evening",
    },
    {
      icon: "🚶‍♂️",
      title: "We take it from here",
      description:
        "A professional walker will care for your dog with love and attention",
    },
  ];
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      className="max-w-7xl mx-auto px-4 py-16"
    >
      {/* heading text */}
      <motion.div variants={fadeIn("up", 0.3)} className="text-center mb-12">
        <motion.h2
          variants={textVariant(0.2)}
          className="text-3xl font-bold mb-4"
        >
          How does our dog walking service work?
        </motion.h2>
        <motion.p variants={fadeIn("up", 0.4)} className="text-gray-600">
          Stress-free walks tailored for you and your furry companion
        </motion.p>
      </motion.div>
      {/* feature box */}

      <motion.div
        variants={fadeIn("up", 0.5)}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", 0.3 * (index + 1))}
            key={index}
            className="flex flex-col items-center p-6"
          >
            <motion.div
              variants={fadeIn("down", 0.4 * (index + 1))}
              className="w-24 h-24 rounded-full mb-6 flex items-center justify-center"
              style={{
                backgroundColor:
                  index === 0 ? "#F1EFFD" : index === 1 ? "#FFE7E7" : "#FFF3E4",
              }}
            >
              <motion.div
                variants={fadeIn("up", 0.5 * (index + 1))}
                className="text-3xl"
              >
                {feature.icon}
              </motion.div>
            </motion.div>
            <motion.h3
              variants={textVariant(0.3)}
              className="text-2xl font-medium mb-3"
            >
              {feature.title}
            </motion.h3>
            <motion.p
              variants={fadeIn("up", 0.6 * (index + 1))}
              className="text-gray-500 text-center"
            >
              {feature.description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
      {/* button */}
      {/* move the button to center for below div */}

      <motion.div variants={fadeIn("up", 0.7)} className="text-center mt-12">
        <motion.button
          variants={fadeIn("up", 0.8)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white cursor-pointer px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors relative"
        >
          Book a Walk
          {/* define shadow */}
          <div className="absolute -z-10 w-full h-full rounded-lg bg-blue-600/30 blur-xl top-0 left-0"></div>
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default FeatureSection;
