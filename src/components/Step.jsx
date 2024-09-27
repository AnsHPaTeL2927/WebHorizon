import React from 'react';
import StepCard from './StepCard';

/* eslint-disable react/prop-types */
const Step = ({ service, index }) => {
  return (
    <div className="flex flex-col md:flex-row items-start mb-8 relative">
      <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full text-lg font-bold z-10 mx-auto md:mx-0 md:flex-shrink-0 md:mr-4 lg:mr-6">
        <span className="hidden md:block">{index + 1}</span>
      </div>
      <div className="flex-1 ml-0 md:ml-4 lg:ml-6 mt-4 md:mt-0 text-center md:text-left">
        <h3 className="text-xl font-bold mb-4">{service.service_package}</h3>
        <p className="text-gray-700 mb-4">Description</p>

        <StepCard service={service} index={service.id}/>
      </div>
      {index < 3 && (
        <div className="hidden md:block absolute left-1/2 md:left-5 lg:left-5 transform -translate-x-1/2 md:translate-x-0 top-10 md:bottom-0 h-10 md:h-full w-1 bg-gray-300"></div>
      )}
    </div>
  );
};

export default Step;
