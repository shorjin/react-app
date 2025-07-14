import React from "react";
import { FiMap, FiSmartphone } from "react-icons/fi"; // Custom routes, updates
import { FaPaw } from "react-icons/fa";
import { BiTime } from "react-icons/bi";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const services = [
    {
      icon: <BiTime className="w-8 h-8 text-indigo-600" />,
      title: "Flexible Scheduling",
      description:
        "Book walks that match your routine — mornings, lunch, or evenings.",
      link: "#learn-more",
    },
    {
      icon: <FiMap className="w-8 h-8 text-amber-400" />,
      title: "Customized Routes",
      description:
        "Every pup is unique. Choose pace, distance, and preferred route.",
      link: "#learn-more",
    },
    {
      icon: <FiSmartphone className="w-8 h-8 text-green-500" />,
      title: "Live Updates",
      description: "Track your dog’s walk and get real-time notes and photos.",
      link: "#learn-more",
    },
    {
      icon: <FaPaw className="w-8 h-8 text-pink-500" />,
      title: "Group or Solo Walks",
      description: "Select between solo walks or friendly group strolls.",
      link: "#learn-more",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 container mx-auto px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        variants={fadeIn("up", 0.3)}
        className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24"
      >
        {/* Header */}
        <motion.div variants={fadeIn("right", 0.4)} className="md:w-1/3">
          <motion.h2
            variants={textVariant(0.2)}
            className="text-3xl md:text-4xl font-bold mb-6 md:w-4/5"
          >
            Reliable Care for Every Tail Wag
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.5)}
            className="text-gray-600 text-lg mb-4 md:w-4/5"
          >
            Explore services designed to keep your dog happy, healthy, and
            active — while giving you peace of mind.
          </motion.p>
          <motion.div variants={fadeIn("up", 0.6)} className="space-y-3">
            <motion.div
              variants={fadeIn("right", 0.7)}
              className="flex items-center gap-2"
            >
              <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div>
              </div>
              <span className="text-gray-600">
                GPS-tracked walks & instant reports
              </span>
            </motion.div>
            <motion.div
              variants={fadeIn("right", 0.8)}
              className="flex items-center gap-2"
            >
              <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div>
              </div>
              <span className="text-gray-600">Trained & verified walkers</span>
            </motion.div>
          </motion.div>
          <motion.button
            variants={fadeIn("up", 0.9)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-blue-600 text-white px-8 py-3 cursor-pointer rounded-full hover:bg-blue-700 transition-colors"
          >
            Get started
          </motion.button>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.3 * (index + 1))}
              whileHover={{ scale: 1.05 }}
              className="bg-white max-w-72 cursor-pointer rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <motion.div
                variants={fadeIn("down", 0.4 * (index + 1))}
                className="mb-4"
              >
                {service.icon}
              </motion.div>
              <motion.h3
                variants={textVariant(0.3)}
                className="text-xl font-semibold mb-2"
              >
                {service.title}
              </motion.h3>
              <motion.p
                variants={fadeIn("up", 0.5 * (index + 1))}
                className="text-gray-600 mb-4"
              >
                {service.description}
              </motion.p>
              <motion.a
                variants={fadeIn("up", 0.6 * (index + 1))}
                href={service.link}
                className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
              >
                LEARN MORE
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;
