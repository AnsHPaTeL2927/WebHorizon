/* eslint-disable react/prop-types */
import React from 'react';
import servicesData from '../assets/Services.json'; // Adjust the path as needed
import { useParams } from 'react-router-dom';

const SingleServicePage = () => {
  const { id } = useParams(); // Fetching id from the URL using React Router

  // Convert id to a number, as ids in the JSON are numeric
  const numericServiceId = parseInt(id, 10);

  // Find the service based on the `id` field in the JSON data
  const service = servicesData.catalogItems.find((item) => item.id === numericServiceId);

  // If the service is not found, display a 'Service Not Found' message
  if (!service) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
        <p>The requested service does not exist.</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Service Details</h1>
      <h2 className="text-xl font-bold mb-2">{service.title}</h2>
      <p className="mt-2 text-gray-700">{/* Add dynamic description here if available */}</p>
      <img src={service.imgUrl} alt={service.title} className="mt-4" />
      {/* Add other service details like descriptions, etc. */}
    </div>
  );
};

export default SingleServicePage;
