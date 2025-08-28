import React from 'react';
import './SlidingPosition.css'; // <-- import your custom animations here

const SlidingPosition = () => {
  return (
    <div className="flex justify-center items-center gap-8 min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/5 rounded-full animate-bounce"></div>

      <div className="animate-slide-right">
        <div className="group relative overflow-hidden bg-white/95 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 max-w-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="flex relative z-10">
            <div className="w-32 h-40 relative overflow-hidden rounded-l-2xl">
              <img
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=300&fit=crop&crop=center"
                alt="Technology"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent"></div>
            </div>
            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <h5 className="mb-3 text-xl font-bold tracking-tight text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  Tech Innovation 2024
                </h5>
                <p className="font-normal text-gray-600 text-sm leading-relaxed">
                  Discover the latest breakthroughs in artificial intelligence and machine learning transforming industries worldwide.
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                  Technology
                </span>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="animate-slide-left">
        <div className="group relative overflow-hidden bg-white/95 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 max-w-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="flex relative z-10">
            <div className="w-32 h-40 relative overflow-hidden rounded-l-2xl">
              <img
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=200&h=300&fit=crop&crop=center"
                alt="Business"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/30 to-transparent"></div>
            </div>
            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <h5 className="mb-3 text-xl font-bold tracking-tight text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                  Business Growth 2024
                </h5>
                <p className="font-normal text-gray-600 text-sm leading-relaxed">
                  Explore strategic business transformations and market expansions that are shaping the future of commerce.
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
                  Business
                </span>
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SlidingPosition;
