import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <div>
      <header>
        <nav>
          <div className="">
            <div className="flex justify-between h-16 px-10 shadow items-center">
              <div className="flex items-center space-x-2"> {/* Adjusted space-x */}
              <FontAwesomeIcon icon={faLocationDot} size="lg" />                               <h1 className="text-xl lg:text-2xl font-bold cursor-pointer">Se-Trails</h1> 
              </div>
              <div className="flex space-x-4 items-center">
                <a href="/" className="text-gray-800 text-sm">LOGIN</a>
                <a href="/" className="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm">SIGNUP</a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
