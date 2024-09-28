/* eslint-disable react/prop-types */
import React from 'react';
import servicesData from '../assets/Services.json'; // Adjust the path as needed
import { useParams, useNavigate } from 'react-router-dom';

export default function SingleServicePage() {
  const { id } = useParams();
  const numericServiceId = parseInt(id, 10);
  const navigate = useNavigate(); // Hook for navigation

  const service = servicesData.catalogItems.find((item) => item.id === numericServiceId);

  if (!service) {
    return (
      <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded">
        <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
        <p>The requested service does not exist.</p>
      </div>
    );
  }
  console.log(service.imgUrl)
  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">{service.title}</h1>
      <img src={service.imgUrl} alt={service.title} className="w-full h-64 object-cover rounded-lg mb-4" />
      <p className="text-gray-600 mb-4">{service.description}</p>
      <button 
        onClick={() => navigate('/service')} // Redirects to the Services page
        className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
      >
        View More
      </button>
    </div>
  );
}
