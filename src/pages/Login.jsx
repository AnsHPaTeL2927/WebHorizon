import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-gray-200 text-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center mb-6">Welcome back</h2>

        {/* Social Login Buttons */}
        <div className="flex justify-center gap-4 mb-6">
          <button className="flex items-center justify-center w-full py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition duration-200">
            <img src="public/images/google.png" alt="Google" className="w-5 h-5 mr-2" />
            Log in with Google
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-between mb-6">
          <hr className="w-full border-gray-400" />
          <span className="mx-4 text-gray-500">or</span>
          <hr className="w-full border-gray-400" />
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-gray-100 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-600 mb-2">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 bg-gray-100 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Sign in to your account
          </button>
        </form>

        {/* Additional Links */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don’t have an account yet? <NavLink to="/signup" className="text-blue-500 hover:underline">Sign up here</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
