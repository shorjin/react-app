import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const PurposeSection = () => {
  const features = [
    {
      icon: "🐾",
      title: "Caring Walkers, Happy Dogs",
      description:
        "Our experienced dog walkers treat every pup like their own, providing personalized attention and care on every walk",
    },
    {
      icon: "📍",
      title: "Flexible & Local",
      description:
        "We operate right in your neighborhood, offering flexible scheduling that fits your daily routine—morning, noon, or night",
    },
  ];
  return (
    <section
      id="about"
      className="w-full bg-gray-50 py-16 px-4 sm:px-6 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-3 grid-cols-1 gap-8"
        >
          <motion.div variants={fadeIn("right", 0.3)}>
            <motion.div
              variants={fadeIn("up", 0.4)}
              className="text-sm text-blue-600 font-medium mb-2"
            >
              Why Choose Us?
            </motion.div>
            <motion.h2
              variants={textVariant(0.5)}
              className="text-2xl md:w-4/5 md:text-3xl font-bold text-gray-900"
            >
              Built with love for pets and peace of mind for owners
            </motion.h2>
          </motion.div>
          {/* bullet point */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            className="col-span-2 grid grid-cols-1 md:grid-cols-2 justify-between gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", 0.3 * (index + 1))}
                key={index}
                className="flex items-start space-x-4"
              >
                <motion.div
                  variants={fadeIn("right", 0.4 * (index + 1))}
                  className="w-12 h-12 flex items-center justify-start rounded-lg"
                >
                  {feature.icon}
                </motion.div>
                <motion.div variants={fadeIn("left", 0.4 * (index + 1))}>
                  <motion.h3
                    variants={textVariant(0.3)}
                    className="text-xl font-semibold text-gray-900 mb-2"
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p
                    variants={fadeIn("up", 0.4)}
                    className="text-gray-600"
                  >
                    {feature.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PurposeSection;
