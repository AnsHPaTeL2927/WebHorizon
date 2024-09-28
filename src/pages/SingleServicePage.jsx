import React from 'react';

const SingleServicePage = ({ match }) => {
  const serviceId = match.params.id; // Assuming you're using React Router
  const serviceDetails = {
    'periodic-service': {
      title: 'Periodic Service',
      description: `Periodic car service is an essential maintenance routine that ensures your vehicle operates efficiently and safely. This comprehensive service includes several key components. First, an oil change involves replacing the engine oil and oil filter to maintain engine health and performance, typically every 5,000 to 7,500 miles as recommended by the manufacturer. Fluid checks and replenishment are also crucial, as they involve inspecting and topping up vital fluids like coolant, brake fluid, and transmission fluid to keep all systems functioning properly. A thorough brake inspection assesses brake pads, rotors, and fluid levels, ensuring the braking system operates safely and effectively. 

      Additionally, tire maintenance involves checking tire pressure, tread depth, and overall condition, along with rotating tires to promote even wear and performing alignment checks as necessary. Battery inspections help prevent unexpected failures by testing the battery’s charge and cleaning terminals. Replacing air filters and cabin filters maintains air quality and engine performance, while inspecting belts and hoses identifies any wear, cracks, or leaks. Wiper blade replacement ensures visibility during adverse weather conditions, and checking the light and electrical systems guarantees all components function properly. 

      An overall vehicle inspection includes a comprehensive check of steering, suspension, exhaust, and chassis components to identify potential issues early, avoiding costly repairs. The benefits of periodic car service are significant: it enhances safety by reducing the risk of breakdowns, improves performance by maintaining fuel efficiency, extends the lifespan of your vehicle, and helps retain higher resale value. Regular maintenance is vital for your vehicle’s health and safety; following the manufacturer's service schedule and consulting a certified mechanic for specific needs will keep your car running smoothly and safely.`,
    },
    'ac-repair': {
      title: 'AC Repair & Service',
      description: 'This is the description for AC Repair & Service.',
    },
    // Add details for other services...
  };

  const service = serviceDetails[serviceId] || { title: 'Service Not Found', description: '' };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Service Details</h1> {/* Updated title */}
      <h2 className="text-xl font-bold mb-2">{service.title}</h2>
      <p className="mt-2 text-gray-700">{service.description}</p>
      {/* Add other service details like images, etc. */}
    </div>
  );
};

export default SingleServicePage;
