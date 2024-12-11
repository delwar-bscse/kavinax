import React from 'react';
import { FaSearch } from 'react-icons/fa';

const PropertyFilter = () => {
  return (
    <>
      <div className="flex lgl:inline-flex items-center bg-bgColor gap-2 px-3 pb-2">
        <button className="hover:bg-bodyColor hover:text-bgColor px-2 py-1 rounded-b-md">Sell</button>
        <button className="hover:bg-bodyColor hover:text-bgColor px-2 py-1 rounded-b-md">Rent</button>
        <button className="hover:bg-bodyColor hover:text-bgColor px-2 py-1 rounded-b-md">Buy</button>
      </div>
      <div className="bg-bgColor flex flex-col md:flex-row flex-wrap gap-4 p-4">
        <div className="flex flex-wrap gap-4">
          {/* Property Type */}
          <div className="flex flex-col grow">
            <label className="text-white mb-1">Type</label>
            <select className="p-2 bg-white text-blue-900 rounded shadow">
              <option>Property Type</option>
              {/* Add more options as needed */}
            </select>
          </div>

          {/* Location */}
          <div className="flex flex-col grow">
            <label className="text-white mb-1">Your Location</label>
            <select className="p-2 bg-white text-blue-900 rounded shadow">
              <option>Your Location</option>
              {/* Add more options as needed */}
            </select>
          </div>

          {/* Bed/Bathrooms */}
          <div className="flex flex-col grow">
            <label className="text-white mb-1">Bed/Bathrooms</label>
            <select className="p-2 bg-white text-blue-900 rounded shadow">
              <option>00 Bed / 00 Bathrooms</option>
              {/* Add more options as needed */}
            </select>
          </div>

          {/* Price */}
          <div className="flex flex-col grow">
            <label className="text-white mb-1">Price</label>
            <select className="p-2 bg-white text-blue-900 rounded shadow">
              <option>Price</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>
        {/* Button */}
        <div className="flex justify-center py-1 grow">
          <button className="grow flex items-center bg-white rounded-l px-4 py-2 text-blue-900">
            Search
          </button>
          <button className="flex items-center bg-blue-900 rounded-r px-4 py-2">
            <FaSearch className="text-white" />
          </button>
        </div>
      </div>
    </>
  );
};

export default PropertyFilter;
