import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const testimonials = [
  {
    id: 1,
    name: "Emily R.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "My dog absolutely loves their walks! Reliable, friendly, and always punctual. Highly recommend!",
  },
  {
    id: 2,
    name: "Michael S.",
    image: "https://randomuser.me/api/portraits/men/43.jpg",
    text: "Great service with flexible scheduling. The walkers truly care about the dogs and their safety.",
  },
  {
    id: 3,
    name: "Sarah K.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    text: "I feel confident leaving my pup in their hands. They send updates and photos after every walk!",
  },
  {
    id: 4,
    name: "Jason T.",
    image: "https://randomuser.me/api/portraits/men/27.jpg",
    text: "Affordable and professional dog walking service. My dog gets plenty of exercise and social time.",
  },
  {
    id: 5,
    name: "Linda W.",
    image: "https://randomuser.me/api/portraits/women/35.jpg",
    text: "The best dog walkers I've ever hired. Always caring and trustworthy.",
  },
  {
    id: 6,
    name: "David M.",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
    text: "Responsive, friendly, and thorough. My dog looks forward to their walks every day.",
  },
];

const TestimonialsSection = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView="show"
      id="testimonials"
      className="py-16 px-4 max-w-7xl mx-auto"
    >
      <motion.div variants={fadeIn("up", 0.3)} className="text-center mb-12">
        <motion.h2
          variants={textVariant(0.2)}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          What Our Happy Dog Owners Say
        </motion.h2>
        <motion.p variants={fadeIn("up", 0.4)} className="text-gray-600">
          Trusted by pet parents for loving, reliable dog walking services
        </motion.p>
      </motion.div>

      <motion.div variants={fadeIn("up", 0.5)} className="relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="testimonials-swiper md:mb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.id} className="h-full md:py-12 py-4 ">
              <motion.div
                variants={fadeIn("up", 0.3 * (index + 1))}
                className="text-center bg-white p-4 rounded-lg shadow-md h-full flex flex-col "
                style={{ minHeight: "300px" }}
              >
                <motion.div
                  variants={fadeIn("down", 0.4 * (index + 1))}
                  className="w-24 h-24 mx-auto mb-4"
                >
                  <motion.img
                    variants={fadeIn("up", 0.5 * (index + 1))}
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 0.4 * (index + 1))}
                  className="flex justify-center mb-2"
                >
                  {[...Array(5)].map((_, starIndex) => (
                    <motion.span
                      key={starIndex}
                      variants={fadeIn("up", 0.1 * starIndex)}
                      className="text-blue-600"
                    >
                      ★
                    </motion.span>
                  ))}
                </motion.div>
                <motion.h3
                  variants={textVariant(0.3)}
                  className="font-semibold text-xl mb-3"
                >
                  {testimonial.name}
                </motion.h3>
                <motion.p
                  variants={fadeIn("up", 0.6 * (index + 1))}
                  className="text-gray-600"
                >
                  {testimonial.text}
                </motion.p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <motion.div
          variants={fadeIn("up", 0.7)}
          className="flex justify-center gap-4 mt-8"
        >
          <motion.button
            variants={fadeIn("right", 0.8)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="swiper-button-prev-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white cursor-pointer transition-colors"
          >
            <BsChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button
            variants={fadeIn("left", 0.8)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="swiper-button-next-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white cursor-pointer transition-colors"
          >
            <BsChevronRight className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default TestimonialsSection;
