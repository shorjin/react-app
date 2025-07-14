import { useState } from "react";

const PricingSection = () => {
  const [productCount, setProductCount] = useState(1);

  // Calculate prices based on product count
  const basicPrice = productCount * 18;
  const premiumPrice = productCount * 28;

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Our Price
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* basic Plan */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl text-gray-600 mb-4">Basic Plan</h3>
            <p className="text-3xl font-bold mb-6">${basicPrice}/week</p>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>✔ Up to {productCount} walk(s) per week</li>
              <li>✔ 30-minute walks</li>
              <li>✔ Photo updates after each walk</li>
            </ul>
          </div>

          {/* premium Plan */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl text-gray-600 mb-4">Premium Plan</h3>
            <p className="text-3xl font-bold mb-6">${premiumPrice}/week</p>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>✔ Up to {productCount} walk(s) per week</li>
              <li>✔ 60-minute walks</li>
              <li>✔ Priority scheduling & support</li>
              <li>✔ Real-time GPS tracking</li>
              <li>✔ Free treats & water refills</li>
            </ul>
          </div>
        </div>

        <div className="max-w-xl mx-auto">
          <p className="text-center text-gray-600 mb-4">
            {productCount} walks per week for your furry friend!
          </p>

          <div className="relative px-4">
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm text-gray-600">1</span>
              <input
                type="range"
                min="1"
                max="15"
                value={productCount}
                onChange={(e) => setProductCount(parseInt(e.target.value))}
                className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <span className="text-xs sm:text-sm text-gray-600">15</span>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-xl text-gray-600 mb-4">Your dog’s new favorite routine starts here.</p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
              Book Your First Walk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
