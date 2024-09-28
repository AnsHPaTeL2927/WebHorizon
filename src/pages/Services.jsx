import React, { useState } from 'react';
import HeadingComponent from "../components/HeadingComponent";
import Step from "../components/Step";
import MultiStepModal from "../components/MultiStepModal";
import SingleServicePage from './SingleServicePage';

export default function Services() {
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedFuelType, setSelectedFuelType] = useState(null);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []); // Load cart from localStorage

  const services = [
    {
      id: 1,
      main_heading: "Regular AC Service",
      description: "Comprehensive AC service including vent cleaning, gas refill, and inspection.",
      free_offer: "FREE AC UNIT INSPECTION",
      previous_price: 3132,
      current_price: 2349,
      tasks: [
        { name: "AC Vent Cleaning", completed: true },
        { name: "AC Gas (upto 400 gms)", completed: true },
        { name: "AC Filter Cleaning", completed: true },
        { name: "AC Inspection", completed: true },
        { name: "Condenser Cleaning", completed: true },
      ],
      duration: "Takes 4 hours",
      warranty: "500 Kms or 1 Month Warranty",
      recommendation: "Every 5,000 Kms or 3 Months",
    },
    {
      id: 2,
      main_heading: "Regular AC Service",
      description: "Comprehensive AC service including vent cleaning, gas refill, and inspection.",
      free_offer: "FREE AC UNIT INSPECTION",
      previous_price: 3132,
      current_price: 2349,
      tasks: [
        { name: "AC Vent Cleaning", completed: true },
        { name: "AC Gas (upto 400 gms)", completed: true },
        { name: "AC Filter Cleaning", completed: true },
        { name: "AC Inspection", completed: true },
        { name: "Condenser Cleaning", completed: true },
      ],
      duration: "Takes 4 hours",
      warranty: "500 Kms or 1 Month Warranty",
      recommendation: "Every 5,000 Kms or 3 Months",
    },
    {
      id: 3,
      main_heading: "Regular AC Service",
      description: "Comprehensive AC service including vent cleaning, gas refill, and inspection.",
      free_offer: "FREE AC UNIT INSPECTION",
      previous_price: 3132,
      current_price: 2349,
      tasks: [
        { name: "AC Vent Cleaning", completed: true },
        { name: "AC Gas (upto 400 gms)", completed: true },
        { name: "AC Filter Cleaning", completed: true },
        { name: "AC Inspection", completed: true },
        { name: "Condenser Cleaning", completed: true },
      ],
      duration: "Takes 4 hours",
      warranty: "500 Kms or 1 Month Warranty",
      recommendation: "Every 5,000 Kms or 3 Months",
    },
    {
      id: 4,
      main_heading: "Regular AC Service",
      description: "Comprehensive AC service including vent cleaning, gas refill, and inspection.",
      free_offer: "FREE AC UNIT INSPECTION",
      previous_price: 3132,
      current_price: 2349,
      tasks: [
        { name: "AC Vent Cleaning", completed: true },
        { name: "AC Gas (upto 400 gms)", completed: true },
        { name: "AC Filter Cleaning", completed: true },
        { name: "AC Inspection", completed: true },
        { name: "Condenser Cleaning", completed: true },
      ],
      duration: "Takes 4 hours",
      warranty: "500 Kms or 1 Month Warranty",
      recommendation: "Every 5,000 Kms or 3 Months",
    },
    {
      id: 6,
      main_heading: "Regular AC Service",
      description: "Comprehensive AC service including vent cleaning, gas refill, and inspection.",
      free_offer: "FREE AC UNIT INSPECTION",
      previous_price: 3132,
      current_price: 2349,
      tasks: [
        { name: "AC Vent Cleaning", completed: true },
        { name: "AC Gas (upto 400 gms)", completed: true },
        { name: "AC Filter Cleaning", completed: true },
        { name: "AC Inspection", completed: true },
        { name: "Condenser Cleaning", completed: true },
      ],
      duration: "Takes 4 hours",
      warranty: "500 Kms or 1 Month Warranty",
      recommendation: "Every 5,000 Kms or 3 Months",
    },
    {
      id: 7,
      main_heading: "Regular AC Service",
      description: "Comprehensive AC service including vent cleaning, gas refill, and inspection.",
      free_offer: "FREE AC UNIT INSPECTION",
      previous_price: 3132,
      current_price: 2349,
      tasks: [
        { name: "AC Vent Cleaning", completed: true },
        { name: "AC Gas (upto 400 gms)", completed: true },
        { name: "AC Filter Cleaning", completed: true },
        { name: "AC Inspection", completed: true },
        { name: "Condenser Cleaning", completed: true },
      ],
      duration: "Takes 4 hours",
      warranty: "500 Kms or 1 Month Warranty",
      recommendation: "Every 5,000 Kms or 3 Months",
    },
    {
      id: 8,
      main_heading: "Regular AC Service",
      description: "Comprehensive AC service including vent cleaning, gas refill, and inspection.",
      free_offer: "FREE AC UNIT INSPECTION",
      previous_price: 3132,
      current_price: 2349,
      tasks: [
        { name: "AC Vent Cleaning", completed: true },
        { name: "AC Gas (upto 400 gms)", completed: true },
        { name: "AC Filter Cleaning", completed: true },
        { name: "AC Inspection", completed: true },
        { name: "Condenser Cleaning", completed: true },
      ],
      duration: "Takes 4 hours",
      warranty: "500 Kms or 1 Month Warranty",
      recommendation: "Every 5,000 Kms or 3 Months",
    },
    {
      id: 9,
      main_heading: "Regular AC Service",
      description: "Comprehensive AC service including vent cleaning, gas refill, and inspection.",
      free_offer: "FREE AC UNIT INSPECTION",
      previous_price: 3132,
      current_price: 2349,
      tasks: [
        { name: "AC Vent Cleaning", completed: true },
        { name: "AC Gas (upto 400 gms)", completed: true },
        { name: "AC Filter Cleaning", completed: true },
        { name: "AC Inspection", completed: true },
        { name: "Condenser Cleaning", completed: true },
      ],
      duration: "Takes 4 hours",
      warranty: "500 Kms or 1 Month Warranty",
      recommendation: "Every 5,000 Kms or 3 Months",
    },
    {
      id: 10,
      main_heading: "Regular AC Service",
      description: "Comprehensive AC service including vent cleaning, gas refill, and inspection.",
      free_offer: "FREE AC UNIT INSPECTION",
      previous_price: 3132,
      current_price: 2349,
      tasks: [
        { name: "AC Vent Cleaning", completed: true },
        { name: "AC Gas (upto 400 gms)", completed: true },
        { name: "AC Filter Cleaning", completed: true },
        { name: "AC Inspection", completed: true },
        { name: "Condenser Cleaning", completed: true },
      ],
      duration: "Takes 4 hours",
      warranty: "500 Kms or 1 Month Warranty",
      recommendation: "Every 5,000 Kms or 3 Months",
    },
    {
      id: 11,
      main_heading: "Regular AC Service",
      description: "Comprehensive AC service including vent cleaning, gas refill, and inspection.",
      free_offer: "FREE AC UNIT INSPECTION",
      previous_price: 3132,
      current_price: 2349,
      tasks: [
        { name: "AC Vent Cleaning", completed: true },
        { name: "AC Gas (upto 400 gms)", completed: true },
        { name: "AC Filter Cleaning", completed: true },
        { name: "AC Inspection", completed: true },
        { name: "Condenser Cleaning", completed: true },
      ],
      duration: "Takes 4 hours",
      warranty: "500 Kms or 1 Month Warranty",
      recommendation: "Every 5,000 Kms or 3 Months",
    },
    {
      id: 12,
      main_heading: "Regular AC Service",
      description: "Comprehensive AC service including vent cleaning, gas refill, and inspection.",
      free_offer: "FREE AC UNIT INSPECTION",
      previous_price: 3132,
      current_price: 2349,
      tasks: [
        { name: "AC Vent Cleaning", completed: true },
        { name: "AC Gas (upto 400 gms)", completed: true },
        { name: "AC Filter Cleaning", completed: true },
        { name: "AC Inspection", completed: true },
        { name: "Condenser Cleaning", completed: true },
        { name: "Condenser Cleaning", completed: true },
        { name: "Condenser Cleaning", completed: true },
      ],
      duration: "Takes 4 hours",
      warranty: "500 Kms or 1 Month Warranty",
      recommendation: "Every 5,000 Kms or 3 Months",
    },
  ];

  const carData = {
    'Maruti Suzuki': ["Swift", "Alto", "Baleno"],
    'Hyundai': ["i10", "i20", "Creta"],
    'Honda': ["City", "Civic", "Jazz"],
    'Tata': ["Harrier", "Nexon", "Safari"],
    'Ford': ["Fiesta", "Ecosport", "Endeavour"],
    'Volkswagen': ["Polo", "Vento", "Passat"],
  };

  const fuelTypes = ["Petrol", "Diesel", "Electric", "Hybrid"];

  const handleShowModal = (serviceId) => {
    const service = services.find(service => service.id === serviceId);
    setSelectedService(service);
    setShowModal(true);
    setStep(1); // Reset to step 1 whenever modal is shown
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAddToCart = (serviceDetails) => {
    const updatedCart = [...cart, serviceDetails];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Save cart to localStorage
    handleCloseModal();
  };

  return (
    <div className="App px-4 py-10">
      <HeadingComponent fromPage={"Home"} currentPage={"Services"} />
      <div className="max-w-4xl mx-auto relative">
        {services.map((service, index) => (
          <Step key={service.id} service={service} index={index} onAddToCart={handleShowModal} />
        ))}
      </div>

      {showModal && (
        <MultiStepModal
          showModal={showModal}
          onClose={handleCloseModal}
          carData={carData}
          fuelTypes={fuelTypes}
          selectedCompany={selectedCompany}
          setSelectedCompany={setSelectedCompany}
          selectedModel={selectedModel}
          setSelectedModel={setSelectedModel}
          selectedFuelType={selectedFuelType}
          setSelectedFuelType={setSelectedFuelType}
          step={step}
          setStep={setStep}
          selectedService={selectedService}
          addToCart={handleAddToCart}
        />
      )}
    </div>
  );
}
export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<SingleServicePage />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}