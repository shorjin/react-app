import React from "react";

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
    <section className="max-w-7xl mx-auto px-4 py-16">
        {/* heading text */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">
          How does our dog walking service work?
        </h2>
        <p className="text-gray-600">
          Stress-free walks tailored for you and your furry companion
        </p>
      </div>
      {/* feature box */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center p-6">
            <div
              className="w-24 h-24 rounded-full mb-6 flex items-center justify-center"
              style={{
                backgroundColor:
                  index === 0 ? "#F1EFFD" : index === 1 ? "#FFE7E7" : "#FFF3E4",
              }}
            >
              <div className="text-3xl">{feature.icon}</div>
            </div>
            <h3 className="text-2xl font-medium mb-3">{feature.title}</h3>
            <p className="text-gray-500 text-center">{feature.description}</p>
          </div>
        ))}
      </div>
      {/* button */}
      {/* move the button to center for below div */}

      <div className="text-center mt-12">
        <button className="bg-blue-600 text-white cursor-pointer px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors relative">
          Book a Walk
          {/* define shadow */}
          <div className="absolute -z-10 w-full h-full rounded-full bg-blue-600/30 blur-xl top-0 left-0"></div>
        </button>
      </div>
    </section>
  );
};

export default FeatureSection;
