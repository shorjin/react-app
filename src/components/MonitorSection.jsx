import React from "react";
import monitorCardBg from "../assets/monitor-card.jpg";

const MonitorSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
        {/* Left side - Image */}

        <div className="w-full md:w-1/2">
          <span className="text-green-500 font-semibold">LIVE MONITORING</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-4 mb-6  md:w-4/5">
            Track Your Dog’s Walk in Real Time
          </h2>
          <p className="text-gray-600 mb-8">
            Stay connected and worry-free. Get real-time GPS tracking, photo
            updates, and instant summaries after every walk — so you always know
            your dog is safe, happy, and on the move.
          </p>
          <a
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
        </div>

        {/* Right side - Content */}
        <div className="w-full md:w-1/2 ">
          <img
            src={monitorCardBg}
            alt="Dog walk monitoring"
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default MonitorSection;
