import React, { useState } from 'react';

// Static reviews array (3 fixed reviews)
const staticReviews = [
  {
    id: 1,
    name: 'John Doe',
    review: 'Excellent service! My car has never felt better after a service at Vroom Care.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Jane Smith',
    review: 'The team at Vroom Care was very professional. Quick and efficient service!',
    rating: 4,
  },
  {
    id: 3,
    name: 'Alex Johnson',
    review: 'Affordable and reliable services. Will definitely recommend to others.',
    rating: 4.5,
  },
];

// Star component to display rating as stars
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, index) => (
        <svg key={index} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674h4.906c.969 0 1.371 1.24.588 1.81l-3.975 2.89 1.518 4.674c.3.921-.755 1.688-1.54 1.117l-3.975-2.89-3.975 2.89c-.785.571-1.84-.196-1.54-1.117l1.518-4.674-3.975-2.89c-.783-.57-.38-1.81.588-1.81h4.906l1.518-4.674z" />
        </svg>
      ))}
      {halfStar && (
        <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674h4.906c.969 0 1.371 1.24.588 1.81l-3.975 2.89 1.518 4.674c.3.921-.755 1.688-1.54 1.117l-3.975-2.89v-14h.026z" />
        </svg>
      )}
      {[...Array(5 - Math.ceil(rating))].map((_, index) => (
        <svg key={index} className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674h4.906c.969 0 1.371 1.24.588 1.81l-3.975 2.89 1.518 4.674c.3.921-.755 1.688-1.54 1.117l-3.975-2.89-3.975 2.89c-.785.571-1.84-.196-1.54-1.117l1.518-4.674-3.975-2.89c-.783-.57-.38-1.81.588-1.81h4.906l1.518-4.674z" />
        </svg>
      ))}
    </div>
  );
};

// Main Review Section component
const ReviewSection = () => {
  const [reviews, setReviews] = useState(staticReviews); // Load static reviews only
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({ name: '', review: '', rating: 0 });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.review && newReview.rating) {
      setReviews([...reviews, { id: reviews.length + 1, ...newReview }]); // Temporarily add review
      setNewReview({ name: '', review: '', rating: 0 });
      setIsModalOpen(false); // Close modal after submission
    }
  };

  return (
    <div className="p-6">
      {/* Reviews displayed on the page */}
      <h2 className="text-2xl font-bold mb-6 text-center">Customer Reviews</h2>

      {/* Horizontal Scrolling Container */}
      <div className="relative mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white shadow-lg rounded-lg p-4 min-w-[200px]"
            >
              <h3 className="text-lg font-semibold">{review.name}</h3>
              <p className="text-gray-600 mt-2">{review.review}</p>
              <div className="mt-4">
                <StarRating rating={review.rating} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <button
          className="mt-6 mb-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={() => setIsModalOpen(true)}
        >
          Rate Us
        </button>
      </div>

      {/* Modal for Viewing and Submitting Reviews */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 px-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:max-w-md md:max-w-3xl relative">
            <button
              className="absolute top-2 right-2 text-gray-500 text-2xl"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>
            <h3 className="text-xl font-semibold mb-4 text-center">Submit Your Review</h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Static Review Cards */}
              {reviews.slice(0, 3).map((review) => (
                <div key={review.id} className="bg-white shadow-lg rounded-lg p-4">
                  <h3 className="text-lg font-semibold">{review.name}</h3>
                  <p className="text-gray-600 mt-2">{review.review}</p>
                  <div className="mt-4">
                    <StarRating rating={review.rating} />
                  </div>
                </div>
              ))}

              {/* User Review Submission Card */}
              <div className="bg-white shadow-lg rounded-lg p-4">
                <h3 className="text-lg font-semibold">Submit Your Review</h3>
                <form onSubmit={handleSubmit} className="mt-4">
                  <div className="mb-4">
                    <label className="block text-gray-700">Name</label>
                    <input
                      type="text"
                      value={newReview.name}
                      onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                      className="border border-gray-300 rounded-md p-2 w-full"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Review</label>
                    <textarea
                      value={newReview.review}
                      onChange={(e) => setNewReview({ ...newReview, review: e.target.value })}
                      className="border border-gray-300 rounded-md p-2 w-full"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Rating</label>
                    <select
                      value={newReview.rating}
                      onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                      className="border border-gray-300 rounded-md p-2 w-full"
                      required
                    >
                      <option value="0">Select a rating</option>
                      <option value="1">1 Star</option>
                      <option value="2">2 Stars</option>
                      <option value="3">3 Stars</option>
                      <option value="4">4 Stars</option>
                      <option value="5">5 Stars</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                  >
                    Submit Review
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewSection;
