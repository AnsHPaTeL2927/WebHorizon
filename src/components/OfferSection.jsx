import React from 'react';

export default function OfferSection() {
  return (
    <div className="flex flex-wrap justify-between p-4 m-3">
      {/* Offer 1: Free Oil Change */}
      <div className="flex-1 min-w-[250px] mx-2">
        <div className="bg-gray-800 text-white rounded-lg shadow-md h-64 flex flex-col justify-between p-4">
          <h2 className="text-xl font-bold">Free Oil Change</h2>
          <img 
            src="images/oil-change.jpg" 
            alt="Free Oil Change" 
            className="w-full h-24 object-cover rounded-md my-2" 
          />
          <p>Get a complimentary oil change with any periodic service booking. Keep your engine running smoothly!</p>
        </div>
      </div>

      {/* Offer 2: Flat 20% Off on AC Repairs */}
      <div className="flex-1 min-w-[250px] mx-2">
        <div className="bg-gray-800 text-white rounded-lg shadow-md h-64 flex flex-col justify-between p-4">
          <h2 className="text-xl font-bold">Flat 20% Off on AC Repairs</h2>
          <img 
            src="public/images/OFFER-1 OFF.jpg" 
            alt="AC Repair Offer" 
            className="w-full h-24 object-cover rounded-md my-2" 
          />
          <p>Beat the heat! Enjoy 20% off all AC repair services this summer. Offer valid till the end of the season.</p>
        </div>
      </div>

      {/* Offer 3: Tyre & Wheel Care Combo */}
      <div className="flex-1 min-w-[250px] mx-2">
        <div className="bg-gray-800 text-white rounded-lg shadow-md h-64 flex flex-col justify-between p-4">
          <h2 className="text-xl font-bold">Tyre & Wheel Care Combo</h2>
          <img 
            src="public/images/OFFER-1.jpg" 
            alt="Tyre and Wheel Care Combo" 
            className="w-full h-24 object-cover rounded-md my-2" 
          />
          <p>Avail our combo offer: Tyre rotation, wheel alignment, and balancing at a discounted rate of ₹999!</p>
        </div>
      </div>
    </div>
  );
}
