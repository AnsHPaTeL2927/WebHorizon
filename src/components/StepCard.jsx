import React from 'react';

export default function StepCard({ step }) {
  return (
    <>
      <a
        href="#"
        className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mx-auto max-w-full lg:max-w-2xl my-4"
      >
        <img
          className="object-cover w-full md:w-48 h-48 md:h-auto rounded-t-lg md:rounded-l-lg"
          src={step.imgSrc}
          alt={step.title}
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {step.title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {step.description}
          </p>
        </div>
      </a>
    </>
  );
}
