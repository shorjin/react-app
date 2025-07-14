import React from "react";

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
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
          <div>
            <div className="text-sm text-purple-600 font-medium mb-2">
               Why Choose Us?
            </div>
            <h2 className="text-2xl md:w-4/5 md:text-3xl font-bold text-gray-900">
              Built with love for pets and peace of mind for owners
            </h2>
          </div>
{/* bullet point */}
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 justify-between gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-start rounded-lg">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurposeSection;
