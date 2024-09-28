import React from 'react';

const Overview = () => {
  return (
    <div className="bg-white">
      {/* Overview Section */}
      <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <img
              src="/images/carbeingrepaired.png"
              alt="Car being repaired"
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
              OVERVIEW
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
              Expert Car Repair & Service
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              We provide top-notch car repair and maintenance services to keep your vehicle running smoothly.
              Our team of experienced mechanics uses state-of-the-art equipment to diagnose and fix any issues
              your car may have.
            </p>
            <p className="text-base md:text-lg text-gray-600">
              From routine oil changes to complex engine repairs, we've got you covered. We pride ourselves
              on our attention to detail and commitment to customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Customer Satisfaction Section */}
      <section className="container mx-auto px-4 py-12 md:py-24 bg-gray-50">
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="w-full md:w-1/2">
            <img
              src="your-image-src-here.jpg"
              alt="Happy customer with car"
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <div className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
              CUSTOMER SATISFACTION
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
              Your Satisfaction, Our Priority
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              At our car repair service, customer satisfaction is at the heart of everything we do. We strive
              to exceed your expectations with our friendly service, transparent pricing, and quality workmanship.
            </p>
            <p className="text-base md:text-lg text-gray-600">
              Our team is dedicated to ensuring you have a positive experience from the moment you bring your
              car in until you drive away satisfied with our service.
            </p>
          </div>
        </div>
      </section>

      {/* Our Features Section */}
      <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <img
              src="your-image-src-here.jpg"
              alt="Mechanic working on a car"
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <div className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-sm font-semibold rounded-full">
              OUR FEATURES
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
              Why Choose Our Service
            </h2>
            <ul className="space-y-4 text-base md:text-lg text-gray-600">
              <li>
                <strong>Expert Technicians:</strong> Our certified mechanics have years of experience in handling all types of car repairs.
              </li>
              <li>
                <strong>Quality Service:</strong> We use only high-quality parts and advanced diagnostic tools to ensure the best service for your vehicle.
              </li>
              <li>
                <strong>Warranty Assured:</strong> All our repairs come with a warranty, giving you peace of mind and assurance in our work.
              </li>
              <li>
                <strong>Transparent Pricing:</strong> We provide clear, upfront pricing with no hidden fees, so you always know what to expect.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Overview;
