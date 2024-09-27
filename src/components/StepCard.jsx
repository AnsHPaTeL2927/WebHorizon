/* eslint-disable react/prop-types */
import React, { useState } from "react";

const checkmarkSVG = (
  <svg className="w-4 h-4 inline-block mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const ServiceCard = ({ service }) => {
  const [expanded, setExpanded] = useState(false);

  const displayTasks = expanded ? service.tasks : service.tasks.slice(0, 5);

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="flex flex-col items-center lg:flex-row items-start bg-black-800 border border-gray-700 rounded-lg shadow-lg hover:bg-white-700 transition duration-300 ease-in-out transform hover:scale-105 mx-auto max-w-full lg:max-w-4xl my-4">
      
      {/* Image Container - Responsive - Full Width for Mobile */}
      <div className="relative w-full lg:w-1/3">
        {/* Image with responsive sizing */}
        <img
          className="object-contain w-full h-auto rounded-lg lg:rounded-l-lg"  // Ensures proper scaling
          src="images/AC SERVICE.png"
          alt="AC Service"
        />
        {/* Badge showing free offer */}
        <div className="absolute top-2 left-0 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-r-lg">
          {service.free_offer}
        </div>
      </div>

      {/* Right Side Content */}
      <div className="relative flex flex-col w-full lg:w-fit justify-between p-4 lg:p-6 leading-normal bg-black text-white rounded-lg lg:rounded-r-lg">
        <div className="absolute top-1 right-1 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">{service.duration}</div>

        <p className="mb-2 text-lg font-bold text-gray-200">{service.description}</p>

        {/* Task List */}
        <div className="grid grid-cols-1 md:grid-cols-2 mb-2">
          {displayTasks.map((task, index) => (
            <div key={index} className="flex items-center text-gray-200">
              {task.completed && checkmarkSVG}
              {task.name}
            </div>
          ))}
          {/* View more/less option */}
          {!expanded && service.tasks.length > 5 && (
            <div className="text-green-500 cursor-pointer underline" onClick={handleToggleExpand}>
              View All
            </div>
          )}
        </div>

        {expanded && service.tasks.length > 5 && (
          <div className="text-green-500 cursor-pointer underline mb-2" onClick={handleToggleExpand}>
            Show Less
          </div>
        )}

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between mb-1">
          <div className="mb-2 sm:mb-0">
            <span className="line-through text-gray-400">Rs. {service.previous_price}</span>
            <span className="text-2xl font-bold ml-2 text-pink-500">₹ {service.current_price}</span>
          </div>
          <div>
            <button className="text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 inline-flex items-center dark:focus:ring-red-800">
              + ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
