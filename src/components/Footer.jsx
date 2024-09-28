import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1 - Company */}
          <div>
            <h3 className="mb-6 text-sm font-semibold text-white uppercase">Company</h3>
            <ul>
              <li className="mb-4">
                <a href="#" className="hover:underline">About</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Careers</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Brand Center</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Blog</a>
              </li>
            </ul>
          </div>

          {/* Column 2 - Help Center */}
          <div>
            <h3 className="mb-6 text-sm font-semibold text-white uppercase">Help Center</h3>
            <ul>
              <li className="mb-4">
                <a href="#" className="hover:underline">Discord Server</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Twitter</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Facebook</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Legal */}
          <div>
            <h3 className="mb-6 text-sm font-semibold text-white uppercase">Legal</h3>
            <ul>
              <li className="mb-4">
                <a href="#" className="hover:underline">Privacy Policy</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Licensing</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Terms & Conditions</a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Download */}
          <div>
            <h3 className="mb-6 text-sm font-semibold text-white uppercase">Download</h3>
            <ul>
              <li className="mb-4">
                <a href="#" className="hover:underline">iOS</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Android</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Windows</a>
              </li>
              <li>
                <a href="#" className="hover:underline">MacOS</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <span>&copy; 2024 Vroom Care. All Rights Reserved.</span>
          {/* Social Media Icons */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition duration-200">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.04c-5.48 0-9.96 4.48-9.96 9.96 0 5.52 4.48 9.96 9.96 9.96 5.52 0 9.96-4.44 9.96-9.96 0-5.48-4.44-9.96-9.96-9.96zm4.56 7.92H15.6c0 1.68 0 3.84 0 3.84s0 1.68-1.68 1.68c-1.68 0-1.68-1.68-1.68-1.68V9.96H9.84v1.68H8.4V9.6h1.44v-.96c0-1.68.48-2.16 2.16-2.16h1.68v1.68h-1.44c-.96 0-.96.72-.96.96v.96h2.4v1.68z"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-200">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.04c-5.52 0-9.96 4.44-9.96 9.96 0 5.52 4.44 9.96 9.96 9.96s9.96-4.44 9.96-9.96c0-5.52-4.44-9.96-9.96-9.96zm2.16 7.92h-1.68c-.96 0-.96.72-.96.96v.96h2.4v1.68H12v3.84H9.6v-3.84h-1.2V9.6h1.2V8.16c0-1.68.48-2.16 2.16-2.16h1.68v1.68h-1.44c-.96 0-.96.72-.96.96v.96h2.4v1.68z"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-200">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.04c-5.48 0-9.96 4.44-9.96 9.96 0 5.52 4.44 9.96 9.96 9.96s9.96-4.44 9.96-9.96c0-5.52-4.44-9.96-9.96-9.96zm.24 8.76H9.6v3.84h3.36v3.84H7.2v-3.84H4.8V8.4h2.4v1.68h.24V8.4h2.16V6.72H7.44v-3.6h4.8v5.52z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
