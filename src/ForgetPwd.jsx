import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImg from './assets/photos/1.jpg';
import Navbar from './Navbar';
import Footer from './Footer';

const ForgetPwd = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle the password reset request
    setMessage('Password reset instructions have been sent to your email.');
    setEmail('');
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-screen w-full px-5 sm:px-0">
        <div className="bg-white rounded-lg shadow-lg border overflow-hidden max-w-5xl w-full flex">
          <div
            className="hidden md:block md:w-1/2 lg:w-2/3 bg-cover bg-center"
            style={{
              backgroundImage: `url(${backgroundImg})`,
            }}
          ></div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Forgot Password</h2>
            <p className="text-gray-500 mb-6">
              Enter your email address and we'll send you instructions to reset your password.
            </p>
            {message && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                {message}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-700 text-white font-bold py-3 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Reset Password
              </button>
            </form>
            <div className="mt-4 text-center">
              <Link to="/login" className="text-gray-500 hover:text-gray-700 text-sm">
                Remember your password? <span className="text-blue-600">Sign In</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ForgetPwd;