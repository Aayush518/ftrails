import React from "react";
import { Link } from "react-router-dom";
import backgroundImg from "./assets/photos/1.jpg"; // Import the local image
import Navbar from "./Navbar";
import Footer from "./Footer";

const LoginWithGoogleButton = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-screen w-full px-5 sm:px-0">
        <div className="bg-white rounded-lg shadow-lg border overflow-hidden max-w-5xl w-full flex">
          <div
            className="hidden md:block md:w-1/2 lg:w-2/3 bg-cover bg-center"
            style={{
              backgroundImage: `url(${backgroundImg})`, // Use the imported image
            }}
          ></div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome back!</h2>
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
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-2"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type="password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Link
                  to="/ForgetPwd"
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 text-xs text-gray-500 hover:text-gray-900"
                >
                  Forget Password?
                </Link>
              </div>
            </div>
            <button className="w-full bg-blue-700 text-white font-bold py-3 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <Link to="/user_profile">Login</Link>
            </button>
            <div className="mt-4 flex items-center justify-center">
              <a
                href="#"
                className="flex items-center justify-center text-white bg-gray-800 hover:bg-gray-700 rounded-lg shadow-md py-3 px-4 w-full"
              >
                <div className="mr-2">
                  <svg className="h-6 w-6" viewBox="0 0 40 40">
                    {/* Google logo SVG */}
                  </svg>
                </div>
                <span className="font-medium">Sign in with Google</span>
              </a>
            </div>
            <div className="mt-4 text-center">
              <Link
                to="/signup"
                className="text-gray-500 hover:text-gray-700 text-sm"
              >
                Don't have an account yet? <span className="text-blue-600">Sign Up</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginWithGoogleButton;