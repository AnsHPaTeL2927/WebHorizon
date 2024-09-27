/* eslint-disable react/prop-types */
import React from "react";

const MultiStepModal = ({
  showModal,
  onClose,
  carData,
  fuelTypes,
  selectedCompany,
  selectedModel,
  selectedFuelType,
  setSelectedCompany,
  setSelectedModel,
  setSelectedFuelType,
  step,
  setStep,
  selectedService,
  addToCart
}) => {

  const handleCompanySelect = (company) => {
    setSelectedCompany(company);
    setStep(2);
  };

  const handleModelSelect = (model) => {
    setSelectedModel(model);
    setStep(3);
  };

  const handleFuelTypeSelect = (fuelType) => {
    setSelectedFuelType(fuelType);
    const serviceDetails = {
      service: selectedService,
      selectedCompany,
      selectedModel,
      selectedFuelType: fuelType,
    };
    addToCart(serviceDetails);
    // Close the modal after selecting the fuel type
    onClose();
  };

  return (
    <div id="select-modal" role="dialog" aria-hidden={!showModal} className={`modal ${showModal ? "block" : "hidden"} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {step === 1 ? "Select Car Company" : step === 2 ? "Select Car Model" : "Select Fuel Type"}
            </h3>
            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={onClose}>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-4 md:p-5">
            {step === 1 && (
              <>
                <p className="text-gray-500 dark:text-gray-400 mb-4">Select a car company:</p>
                <ul className="space-y-4 mb-4">
                  {Object.keys(carData).map((company) => (
                    <li key={company}>
                      <input type="radio" id={company} name="company" value={company} className="hidden peer" required />
                      <label htmlFor={company} className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500" onClick={() => handleCompanySelect(company)}>
                        <div className="block">{company}</div>
                        <svg className="w-4 h-4 ms-3 rtl:rotate-180 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>
                      </label>
                    </li>
                  ))}
                </ul>
              </>
            )}
            {step === 2 && (
              <>
                <button onClick={() => setStep(1)} className="text-blue-500 mb-4">Back</button>
                <p className="text-gray-500 dark:text-gray-400 mb-4">Select a car model:</p>
                <ul className="space-y-4 mb-4">
                  {carData[selectedCompany]?.map((model) => (
                    <li key={model}>
                      <input type="radio" id={model} name="model" value={model} className="hidden peer" required />
                      <label htmlFor={model} className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500" onClick={() => handleModelSelect(model)}>
                        <div className="block">{model}</div>
                        <svg className="w-4 h-4 ms-3 rtl:rotate-180 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>
                      </label>
                    </li>
                  ))}
                </ul>
              </>
            )}
            {step === 3 && (
              <>
                <button onClick={() => setStep(2)} className="text-blue-500 mb-4">Back</button>
                <p className="text-gray-500 dark:text-gray-400 mb-4">Select fuel type:</p>
                <ul className="space-y-4 mb-4">
                  {fuelTypes.map((fuelType) => (
                    <li key={fuelType}>
                      <input type="radio" id={fuelType} name="fuel" value={fuelType} className="hidden peer" required />
                      <label htmlFor={fuelType} className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500" onClick={() => handleFuelTypeSelect(fuelType)}>
                        <div className="block">{fuelType}</div>
                        <svg className="w-4 h-4 ms-3 rtl:rotate-180 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>
                      </label>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiStepModal;
