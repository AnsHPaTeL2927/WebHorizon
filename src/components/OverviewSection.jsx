import React from 'react';

const Overview = () => {
  return (
    <div className="flex flex-col space-y-6 p-6">
      {/* Overview Section Heading */}
      <h1 className="text-3xl font-bold text-center mb-8">Overview Section</h1>
      
      <div className="flex justify-start">
        {/* First Container */}
        <div className="bg-white shadow-lg rounded-lg p-4 w-full max-w-md hover:bg-blue-100 transition-all duration-300 ease-in-out transform hover:scale-105">
          <h2 className="text-xl font-bold mb-4">Building Solutions,</h2>
          <p className="text-gray-700">
            We design, develop, and deploy the best-in-class digital solutions for your business. Yudiz is a top-notch game development studio and an award-winning development service provider.
          </p>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Let’s Work Together</button>
        </div>
      </div>
      
      <div className="flex justify-end">
        {/* Second Container */}
        <div className="bg-white shadow-lg rounded-lg p-4 w-full max-w-md hover:bg-blue-100 transition-all duration-300 ease-in-out transform hover:scale-105">
          <h2 className="text-xl font-bold mb-4">Building Solutions,</h2>
          <p className="text-gray-700">
            We design, develop, and deploy the best-in-class digital solutions for your business. Yudiz is a top-notch game development studio and an award-winning development service provider.
          </p>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Let’s Work Together</button>
        </div>
      </div>

      <div className="flex justify-start">
        {/* Third Container */}
        <div className="bg-white shadow-lg rounded-lg p-4 w-full max-w-md hover:bg-blue-100 transition-all duration-300 ease-in-out transform hover:scale-105">
          <h2 className="text-xl font-bold mb-4">Building Solutions,</h2>
          <p className="text-gray-700">
            We design, develop, and deploy the best-in-class digital solutions for your business. Yudiz is a top-notch game development studio and an award-winning development service provider.
          </p>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Let’s Work Together</button>
        </div>
      </div>
    </div>
  );
};

export default Overview;
