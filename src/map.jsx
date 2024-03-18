import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const currentLocation = [28.252400932775647, 83.97607147147342]; // Coordinates provided

  return (
    <div className="flex justify-center items-center h-45 m-0 -mt-52">
      <div style={{ width: '90%', height: '400px' }}>
        <MapContainer
          center={currentLocation}
          zoom={13}
          style={{ width: '100%', height: '100%' }}
        >
          {/* Add the TileLayer for OSM */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* Add marker for current location */}
          <Marker position={currentLocation}>
            <Popup>You are here</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
