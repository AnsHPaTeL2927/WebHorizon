import React from 'react';

export default function ContactUs() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
      
      {/* Contact Information Section */}
      <div className="flex flex-wrap justify-between mb-8">
        {/* Contact Info */}
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-xl font-semibold mb-4">Get In Touch</h2>
          <p className="mb-2">Phone: +1-800-123-4567</p>
          <p className="mb-2">Email: support@vroomcare.com</p>
          <p className="mb-2">Address: 1234 Service Lane, Car City, Auto State</p>
        </div>

        {/* Google Map Section */}
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-xl font-semibold mb-4">Our Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg"
            title="Our Location"
          ></iframe>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-gray-100 p-8 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-6 text-center">Send Us a Message</h2>
        
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md"
              rows="5"
              placeholder="Your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
