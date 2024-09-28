import React from 'react';
import PropTypes from 'prop-types';

// Sample data for the catalog cards, including image URLs and placeholder links
const catalogItems = [
  { id: 1, title: 'Periodic Service', imgUrl: 'images/PERIODIC SERVICES.png', link: '/services/periodic-service' },
  { id: 2, title: 'AC Repair & Service', imgUrl: 'images/AC SERVICE.png', link: '/services/ac-repair' },
  { id: 3, title: 'Batteries', imgUrl: 'images/BATTERIES.png', link: '/services/batteries' },
  { id: 4, title: 'Tyres & Wheel Care', imgUrl: 'images/TYRE CARE.png', link: '/services/tyres' },
  { id: 5, title: 'Denting & Painting', imgUrl: 'images/DENTING & PAINTING.png', link: '/services/denting-painting' },
  { id: 6, title: 'Detailing Services', imgUrl: 'images/DETAILING SERVICE.png', link: '/services/detailing' },
  { id: 7, title: 'Car Spa & Cleaning', imgUrl: 'images/CAR SPA & CLEANING.png', link: '/services/car-spa' },
  { id: 8, title: 'Car Inspections', imgUrl: 'images/CAR INSPECTION.png', link: '/services/inspections' },
  { id: 9, title: 'Wind Shields & Lights', imgUrl: 'images/WINDSHELDS & LIGHTS.png', link: '/services/windshields-lights' },
  { id: 10, title: 'Suspension & Fitments', imgUrl: 'images/SUSPENSION & FITMENT.png', link: '/services/suspension' },
  { id: 11, title: 'Clutch & Body Parts', imgUrl: 'images/CLUTCH & BODY PARTS.png', link: '/services/clutch-body' },
  { id: 12, title: 'Insurance Claims', imgUrl: 'images/INSURANCE CLAIM.png', link: '/services/insurance' },
];

// Carousel component that displays catalog items
const Carousel = () => {
  const [currentGroup, setCurrentGroup] = React.useState(0); // Track the current group (0 or 1)

  // Dynamic number of items per row based on screen size using CSS grid
  const getGridCols = () => {
    if (window.innerWidth >= 1280) return 'grid-cols-6'; // XL: 6 items
    if (window.innerWidth >= 1024) return 'grid-cols-4'; // LG: 4 items
    if (window.innerWidth >= 768) return 'grid-cols-3';  // MD: 3 items
    return 'grid-cols-2'; // SM and below: 2 items
  };

  const gridCols = getGridCols();

  // Function to switch between groups
  const handleNext = () => setCurrentGroup((currentGroup + 1) % Math.ceil(catalogItems.length / 6));
  const handlePrev = () => setCurrentGroup((currentGroup - 1 + Math.ceil(catalogItems.length / 6)) % Math.ceil(catalogItems.length / 6));

  return (
    <div id="carousel" className="relative ml-3 mr-4 items-center overflow-hidden">
      <div className="relative overflow-hidden rounded-lg">
        <div className={`grid ${gridCols} gap-4 transition duration-700 ease-in-out`}>
          {/* Display current group of items */}
          {catalogItems.slice(currentGroup * 6, currentGroup * 6 + 6).map((item) => (
            <a
              href={item.link}
              key={item.id}
              className="border border-gray-300 rounded-lg p-4 shadow-md transform transition duration-300 hover:border-light-blue-500 hover:shadow-xl hover:scale-105"
            >
              <h3 className="font-semibold text-center">{item.title}</h3>
              {/* Image for each item */}
              <img
                src={item.imgUrl}
                alt={item.title}
                className="w-full h-auto object-cover rounded mt-2"
              />
            </a>
          ))}
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
