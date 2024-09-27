import React from 'react';
import PropTypes from 'prop-types';

// Sample data for the catalog cards, including image URLs
const catalogItems = [
  { id: 1, title: 'Periodic Service', imgUrl: 'images/PERIODIC SERVICES.png' },
  { id: 2, title: 'AC Repair & Service', imgUrl: 'images/AC SERVICE.png' },
  { id: 3, title: 'Batteries', imgUrl: 'images/BATTERIES.png' },
  { id: 4, title: 'Tyres & Wheel Care', imgUrl: 'images/TYRE CARE.png' },
  { id: 5, title: 'Denting & Painting', imgUrl: 'images/DENTING & PAINTING.png' },
  { id: 6, title: 'Detailing Services', imgUrl: 'images/DETAILING SERVICE.png' },
  { id: 7, title: 'Car Spa & Cleaning', imgUrl: 'images/CAR SPA & CLEANING.png' },
  { id: 8, title: 'Car Inspections', imgUrl: 'images/CAR INSPECTION.png' },
  { id: 9, title: 'Wind Shields & Lights', imgUrl: 'images/WINDSHELDS & LIGHTS.png' },
  { id: 10, title: 'Suspension & Fitments', imgUrl: 'images/SUSPENSION & FITMENT.png' },
  { id: 11, title: 'Clutch & Body Parts', imgUrl: 'images/CLUTCH & BODY PARTS.png' },
  { id: 12, title: 'Insurance Claims', imgUrl:'images/INSURANCE CLAIM.png' },
];

// Carousel component that displays catalog items in groups of 6
const Carousel = () => {
  const [currentGroup, setCurrentGroup] = React.useState(0); // Track the current group (0 or 1)
  const itemsPerGroup = 6;
  const groups = [
    catalogItems.slice(0, itemsPerGroup),  // First group of 6 items
    catalogItems.slice(itemsPerGroup),     // Second group of 6 items
  ];

  // Function to switch between groups
  const handleNext = () => setCurrentGroup((currentGroup + 1) % groups.length);
  const handlePrev = () => setCurrentGroup((currentGroup - 1 + groups.length) % groups.length);

  return (
    <div id="carousel" className="relative w-full">
      <div className="relative overflow-hidden rounded-lg">
        <div className="flex transition duration-700 ease-in-out">
          {/* Display current group of items */}
          <div className="flex w-full justify-between p-4 mb-12">
            {groups[currentGroup].map(item => (
              <div key={item.id} className="border border-gray-300 rounded-lg p-4 shadow-md w-48 mr-4">
                <h3 className="font-semibold text-center">{item.title}</h3>
                {/* Image for each item */}
                <img src={item.imgUrl} alt={item.title} className="w-full h-32 object-cover rounded mt-2" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slider Controls */}
      <button
        type="button"
        className="absolute top-1/2 left-0 z-30 flex items-center justify-center h-10 w-10 rounded-full bg-white border-2 border-blue-500 text-blue-500 transform -translate-y-1/2 hover:bg-blue-500 hover:text-white transition-all duration-300"
        onClick={handlePrev}
      >
        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
        </svg>
      </button>
      <button
        type="button"
        className="absolute top-1/2 right-0 z-30 flex items-center justify-center h-10 w-10 rounded-full bg-white border-2 border-blue-500 text-blue-500 transform -translate-y-1/2 hover:bg-blue-500 hover:text-white transition-all duration-300"
        onClick={handleNext}
      >
        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 9l4-4-4-4" />
        </svg>
      </button>
    </div>
  );
};

// Catalog Section Component
export default function CatalogSection({ title }) {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">{title}</h2>

      {/* Carousel Component */}
      <Carousel />
    </div>
  );
}

// Prop validation
CatalogSection.propTypes = {
  title: PropTypes.string.isRequired,
};

// Default prop
CatalogSection.defaultProps = {
  title: '', // Default title if none is provided
};
