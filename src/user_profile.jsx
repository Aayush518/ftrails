import React from 'react';
import ProfileCard from './profilecard';
import Sidebar from './Sidebar';
import Map from './map';

const user_profile = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full w-1/6">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="ml-[calc(1/6*100%)] p-4">
        {/* Profile Card */}
        <div className="mb-4">
          <ProfileCard />
        </div>

        {/* Map */}
        <div className='Map'>
        <Map />
        </div>
      </div>
    </div>
  );
};

export default user_profile;
