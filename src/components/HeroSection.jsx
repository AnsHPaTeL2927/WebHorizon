import React from "react";

export default function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      <img
        src="public/images/HERO SECTION IMAGE.jpeg" 
        alt="Hero Section Image"
        className="absolute inset-0 h-full w-auto"
        style={{ width: "2000px" }}
      />
      {/* Optional: Add dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
          <b>Your Vehicle Deserves the Best. We Deliver It.</b>
        </h1>
        <p className="max-w-2xl mb-6 font-light text-gray-200 lg:mb-8 md:text-lg lg:text-xl">
         <b><i> Vroom Care is where professionalism meets perfection. Our comprehensive services ensure your vehicle gets the premium care it deserves.</i></b>
        </p>
        <div>
          <a
            href="/service"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
          >
            SERVICES
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="/contact"
             className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
          >
            CONTACT US 
          </a>
        </div>
      </div>
    </section>
  );
}
