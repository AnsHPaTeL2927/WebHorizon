import React, { useEffect, useState } from 'react';
import HeadingComponent from "../components/HeadingComponent";
import CalendarTimePicker from '../components/CalenderTimePicker'; // Import the new combined component
import PaymentLoader from '../components/PaymentLoader';
import EmailSender from '../components/EmailSender'; // Import the EmailSender component

export default function AddToCart() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [schedule, setSchedule] = useState(null); // For date and time selection
  const [isLoading, setIsLoading] = useState(false); // Loader state
  const [paymentMessage, setPaymentMessage] = useState(''); // Payment confirmation message

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
    calculateTotal(storedCart);
  }, []);

  const calculateTotal = (cartItems) => {
    const totalPrice = cartItems.reduce((sum, item) => sum + item.service.current_price, 0);
    setTotal(totalPrice);
  };

  const handleRemoveService = (indexToRemove) => {
    const updatedCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  const processPayment = (userEmail) => {
    setIsLoading(true); // Start loading
    setTimeout(() => {
      setIsLoading(false); // Stop loading
      setPaymentMessage('Payment Successful! Your booking has been confirmed.'); // Set payment message
      setCart([]); // Clear the cart
      localStorage.removeItem('cart'); // Clear the cart from local storage
      calculateTotal([]); // Reset total to 0

      // Call the EmailSender to send confirmation email
      const emailSender = EmailSender({ userEmail, total });
      console.log(emailSender)
      emailSender.sendEmail(); // Send the email
    }, 3000); // Simulate a delay of 3 seconds
  };

  const handlePayment = () => {
    // Replace with actual user email; for example, retrieve from a user state or context
    const userEmail = "dalsaniaansh2004@gmail.com"; // Replace this with the actual email
    processPayment(userEmail); // Call the payment processing function
  };

  // Toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Handle schedule selection
  const handleScheduleSelect = (schedule) => {
    setSchedule(schedule);
    toggleModal(); // Close modal after saving
    alert(`Scheduled for: ${schedule.date.toLocaleDateString()} at ${schedule.time}`);
  };

  return (
    <div className="App px-4 py-10">
      <HeadingComponent fromPage={"Home"} currentPage={"Add to Cart"} heading={"Your Cart"} />

      <div className="max-w-4xl mx-auto">
        {cart.length > 0 ? (
          <>
            <ul>
              {cart.map((item, idx) => (
                <li className="mb-4" key={idx}>
                  <div className="p-4 border border-gray-300 rounded-lg flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-bold">{item.service.main_heading}</h3>
                      <p>{item.selectedCompany} - {item.selectedModel} - {item.selectedFuelType}</p>
                      <p>₹ {item.service.current_price}</p>
                    </div>
                    <button
                      className="ml-4 p-2 bg-red-500 text-white rounded"
                      onClick={() => handleRemoveService(idx)}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 border-t-2 border-gray-300">
              <h3 className="text-xl font-semibold">Total: ₹ {total}</h3>
            </div>

            {/* Add Schedule Button */}
            <div className="mt-6 p-4">
              <button
                className="w-full p-4 text-white font-semibold rounded bg-blue-500"
                onClick={toggleModal}
              >
                Add Schedule
              </button>
              {schedule && (
                <p className="mt-2 text-gray-700">
                  Scheduled for: {schedule.date.toLocaleDateString()} at {schedule.time}
                </p>
              )}
            </div>

            {/* Payment button */}
            <div className="mt-4 p-4">
              <button
                className={`w-full p-4 text-white font-semibold rounded ${cart.length > 0 ? 'bg-green-500' : 'bg-gray-400 cursor-not-allowed'}`}
                onClick={handlePayment}
                disabled={cart.length === 0 || isLoading}
              >
                {isLoading ? 'Processing...' : 'Proceed to Payment'}
              </button>
            </div>

            <div className="mt-4">
              <p className="text-gray-700 text-center">
                We are accepting online payment only.
              </p>
            </div>

            {/* Payment Confirmation Message */}
            {paymentMessage && (
              <div className="mt-4 p-4 bg-green-100 text-green-800 rounded">
                {paymentMessage}
              </div>
            )}
          </>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>

      {/* Schedule Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Select Schedule</h3>
            <CalendarTimePicker onScheduleSelect={handleScheduleSelect} /> {/* Combined Component */}
            <div className="flex justify-end">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={toggleModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <PaymentLoader isLoading={isLoading} />
    </div>
  );
}
