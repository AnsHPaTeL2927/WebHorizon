import React, { useState } from "react";
import HeadingComponent from "../components/HeadingComponent";
import Step from "../components/Step";
import MultiStepModal from "../components/MultiStepModal";
import SingleServicePage from "./SingleServicePage";

export default function Services() {
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedFuelType, setSelectedFuelType] = useState(null);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  ); // Load cart from localStorage

  const services = [
    {
      id: 1,
      main_heading: "Regular AC Service",
      description:
        "Comprehensive AC service including vent cleaning, gas refill, and inspection.",
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
      main_heading: "Periodic Service",
      description:
        "Thorough service to maintain your vehicle's performance, including oil change, filter replacement, and safety checks.",
      free_offer: "FREE VEHICLE INSPECTION",
      previous_price: 4899,
      current_price: 3699,
      tasks: [
        { name: "Engine Oil Replacement", completed: true },
        { name: "Oil Filter Change", completed: true },
        { name: "Air Filter Cleaning", completed: true },
        { name: "Brake Inspection", completed: true },
        { name: "Fluid Top-up (Coolant, Brake Fluid)", completed: true },
        { name: "Battery Health Check", completed: true },
        { name: "Tyre Rotation & Pressure Check", completed: true },
      ],
      duration: "Takes 6 hours",
      warranty: "1,000 Kms or 2 Months Warranty",
      recommendation: "Every 10,000 Kms or 6 Months",
    },
    {
      id: 3,
      main_heading: "Battery Service",
      description:
        "Comprehensive battery health check and maintenance to ensure optimal performance and longevity.",
      free_offer: "FREE BATTERY INSPECTION",
      previous_price: 1999,
      current_price: 1499,
      tasks: [
        { name: "Battery Health Check", completed: true },
        { name: "Terminal Cleaning", completed: true },
        { name: "Battery Fluid Top-up", completed: true },
        { name: "Cable Inspection & Tightening", completed: true },
        { name: "Charging System Check", completed: true },
      ],
      duration: "Takes 1 hour",
      warranty: "3,000 Kms or 3 Months Warranty",
      recommendation: "Every 12,000 Kms or 12 Months",
    },
    {
      "id": 4,
      "main_heading": "Tyre & Wheel Care",
      "description": "Complete tyre and wheel maintenance, including alignment, balancing, and inspection for a smoother and safer drive.",
      "free_offer": "FREE WHEEL ALIGNMENT CHECK",
      "previous_price": 2599,
      "current_price": 1899,
      "tasks": [
        { "name": "Tyre Pressure Check", "completed": true },
        { "name": "Wheel Alignment", "completed": true },
        { "name": "Wheel Balancing", "completed": true },
        { "name": "Tyre Rotation", "completed": true },
        { "name": "Tyre Tread & Sidewall Inspection", "completed": true }
      ],
      "duration": "Takes 2 hours",
      "warranty": "2,000 Kms or 1 Month Warranty",
      "recommendation": "Every 8,000 Kms or 6 Months"
    },
    {
      "id": 5,
      "main_heading": "Denting & Painting",
      "description": "Professional dent repair and quality painting to restore your car’s look and finish.",
      "free_offer": "FREE DENT INSPECTION",
      "previous_price": 7999,
      "current_price": 5999,
      "tasks": [
        { "name": "Dent Removal", "completed": true },
        { "name": "Surface Preparation & Sanding", "completed": true },
        { "name": "Primer Application", "completed": true },
        { "name": "High-Quality Paint Coating", "completed": true },
        { "name": "Polishing & Buffing", "completed": true }
      ],
      "duration": "Takes 8 hours",
      "warranty": "6 Months Paint Warranty",
      "recommendation": "As needed for dents or paint damage"
    },
    {
      "id": 6,
      "main_heading": "Detailing Services",
      "description": "Premium interior and exterior detailing for a spotless and refreshed car appearance.",
      "free_offer": "FREE INTERIOR CLEANING",
      "previous_price": 5499,
      "current_price": 4199,
      "tasks": [
        { "name": "Exterior Wash & Wax", "completed": true },
        { "name": "Interior Vacuuming & Cleaning", "completed": true },
        { "name": "Dashboard & Panel Polishing", "completed": true },
        { "name": "Tyre & Wheel Shine", "completed": true },
        { "name": "Glass & Mirror Cleaning", "completed": true }
      ],
      "duration": "Takes 3 hours",
      "warranty": "Satisfaction Guaranteed",
      "recommendation": "Every 6,000 Kms or 6 Months"
    },
    {
      "id": 7,
      "main_heading": "Car Spa & Cleaning",
      "description": "Complete car spa and deep cleaning for a sparkling exterior and fresh interior.",
      "free_offer": "FREE EXTERIOR WASH",
      "previous_price": 2999,
      "current_price": 2299,
      "tasks": [
        { "name": "Foam Wash & Pressure Cleaning", "completed": true },
        { "name": "Underbody Cleaning", "completed": true },
        { "name": "Interior Vacuum & Shampoo", "completed": true },
        { "name": "Dashboard & Upholstery Wipe", "completed": true },
        { "name": "Tyre Cleaning & Polishing", "completed": true }
      ],
      "duration": "Takes 2.5 hours",
      "warranty": "Satisfaction Guaranteed",
      "recommendation": "Every 5,000 Kms or 3 Months"
    },
    {
      "id": 8,
      "main_heading": "Car Suspension Service",
      "description": "Comprehensive suspension inspection and maintenance for a smoother and safer drive.",
      "free_offer": "FREE SUSPENSION CHECK",
      "previous_price": 3999,
      "current_price": 3199,
      "tasks": [
        { "name": "Shock Absorber Inspection", "completed": true },
        { "name": "Suspension Bush Check", "completed": true },
        { "name": "Link Rod Inspection", "completed": true },
        { "name": "Ball Joint Lubrication & Check", "completed": true },
        { "name": "Spring & Strut Inspection", "completed": true }
      ],
      "duration": "Takes 3 hours",
      "warranty": "2,000 Kms or 1 Month Warranty",
      "recommendation": "Every 15,000 Kms or Annually"
    },
    {
      "id": 9,
      "main_heading": "Windshields & Lights Service",
      "description": "Complete care for windshields and lights to enhance visibility and safety.",
      "free_offer": "FREE LIGHT & WINDSHIELD INSPECTION",
      "previous_price": 2499,
      "current_price": 1899,
      "tasks": [
        { "name": "Windshield Cleaning & Inspection", "completed": true },
        { "name": "Wiper Blade Check & Replacement", "completed": true },
        { "name": "Headlight Cleaning & Adjustment", "completed": true },
        { "name": "Taillight & Indicator Check", "completed": true },
        { "name": "Fog Light & Signal Inspection", "completed": true }
      ],
      "duration": "Takes 1.5 hours",
      "warranty": "1,500 Kms or 1 Month Warranty",
      "recommendation": "Every 10,000 Kms or 6 Months"
    },
    {
      "id": 10,
      "main_heading": "Suspension & Fitment Service",
      "description": "Thorough check and fitment of your car's suspension components to ensure smooth handling and stability.",
      "free_offer": "FREE SUSPENSION FITMENT INSPECTION",
      "previous_price": 4599,
      "current_price": 3499,
      "tasks": [
        { "name": "Full Suspension System Check", "completed": true },
        { "name": "Shock Absorber Replacement", "completed": true },
        { "name": "Suspension Mounting Fitment", "completed": true },
        { "name": "Wheel Alignment & Balancing", "completed": true },
        { "name": "Control Arm & Bushes Check", "completed": true }
      ],
      "duration": "Takes 4 hours",
      "warranty": "5,000 Kms or 2 Months Warranty",
      "recommendation": "Every 20,000 Kms or Annually"
    },
    {
      "id": 11,
      "main_heading": "Clutch & Body Parts Service",
      "description": "Expert maintenance for clutch systems and body parts to ensure optimal vehicle performance and durability.",
      "free_offer": "FREE CLUTCH & BODY CHECK",
      "previous_price": 5299,
      "current_price": 3999,
      "tasks": [
        { "name": "Clutch Plate Inspection & Replacement", "completed": true },
        { "name": "Clutch Cable & Fluid Check", "completed": true },
        { "name": "Body Panel Inspection & Alignment", "completed": true },
        { "name": "Door & Hinge Lubrication", "completed": true },
        { "name": "Bumper & Fenders Check", "completed": true }
      ],
      "duration": "Takes 5 hours",
      "warranty": "3,000 Kms or 2 Months Warranty",
      "recommendation": "Every 25,000 Kms or Annually"
    },
    {
      "id": 12,
      "main_heading": "Insurance Claims Assistance",
      "description": "Hassle-free support for processing insurance claims and getting your vehicle back on the road quickly.",
      "free_offer": "FREE CLAIM PROCESSING ASSISTANCE",
      "previous_price": 2999,
      "current_price": 1999,
      "tasks": [
        { "name": "Accident Damage Assessment", "completed": true },
        { "name": "Document Collection & Submission", "completed": true },
        { "name": "Insurance Claim Filing & Follow-Up", "completed": true },
        { "name": "Repair Coordination with Workshop", "completed": true },
        { "name": "Claim Settlement Support", "completed": true }
      ],
      "duration": "Depends on Claim Process",
      "warranty": "Support Until Claim Settlement",
      "recommendation": "Whenever Vehicle Damage Occurs"
    }    
  ];

  const carData = {
    "Maruti Suzuki": ["Swift", "Alto", "Baleno"],
    Hyundai: ["i10", "i20", "Creta"],
    Honda: ["City", "Civic", "Jazz"],
    Tata: ["Harrier", "Nexon", "Safari"],
    Ford: ["Fiesta", "Ecosport", "Endeavour"],
    Volkswagen: ["Polo", "Vento", "Passat"],
  };

  const fuelTypes = ["Petrol", "Diesel", "Electric", "Hybrid"];

  const handleShowModal = (serviceId) => {
    const service = services.find((service) => service.id === serviceId);
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
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save cart to localStorage
    handleCloseModal();
  };

  return (
    <div className="App px-4 py-10">
      <HeadingComponent
        fromPage={"Home"}
        currentPage={"Services"}
        heading={"Services"}
      />
      <div className="max-w-4xl mx-auto relative">
        {services.map((service, index) => (
          <Step
            key={service.id}
            service={service}
            index={index}
            onAddToCart={handleShowModal}
          />
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
