import React from 'react';

const EmcyMedicine = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Emergency Medicine Services</h1>
      <p className="text-lg text-gray-600 max-w-3xl mb-8">
        Our emergency medicine services are designed to provide quick and reliable care for urgent medical needs. Whether it’s a minor injury or a critical condition, our team is here to assist you 24/7.
      </p>
      <button
        className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-pink-500 hover:to-red-500 text-white px-6 py-3 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl font-semibold"
      >
        Contact Emergency Services
      </button>
    </div>
  );
};

export default EmcyMedicine;