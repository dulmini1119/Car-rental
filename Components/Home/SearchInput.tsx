"use client";
import React, { useState } from "react";
import { Car } from "@/types/car";

interface SearchInputProps {
  carsOrgList: Car[];
  setCarsList: (cars: Car[]) => void;
}

export default function SearchInput({
  carsOrgList,
  setCarsList,
}: SearchInputProps) {
  const [pickupDate, setPickupDate] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");

  const handleSearch = () => {
    if (!pickupDate || !dropoffDate) {
      alert("Please select both pickup and dropoff dates");
      return;
    }

    const pickup = new Date(pickupDate);
    const dropoff = new Date(dropoffDate);

    const filtered = carsOrgList.filter((car) => {
      const availableFrom = new Date(car.availableFrom);
      const availableTo = new Date(car.availableTo);
      return pickup >= availableFrom && dropoff <= availableTo;
    });

    setCarsList(filtered);
  };

  const handleClear = () => {
    setPickupDate("");
    setDropoffDate("");
    setCarsList(carsOrgList);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 mt-10">
      <h2 className="text-center text-2xl md:text-3xl font-semibold text-white mb-8">
        Find Your Car
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full justify-center">
        {/* Pickup Date */}
        <div className="flex-1 min-w-[150px]">
          <label className="block mb-1 text-gray-400">Pickup Date</label>
          <input
            type="date"
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
            className="input input-bordered w-full rounded-xl"
          />
        </div>

        {/* Dropoff Date */}
        <div className="flex-1 min-w-[150px]">
          <label className="block mb-1 text-gray-400">Dropoff Date</label>
          <input
            type="date"
            value={dropoffDate}
            min={pickupDate}
            onChange={(e) => setDropoffDate(e.target.value)}
            className="input input-bordered w-full rounded-xl"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-2 md:mt-0">
          <button
            onClick={handleSearch}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-all duration-200 whitespace-nowrap"
          >
            Search
          </button>
          <button
            onClick={handleClear}
            className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-3 rounded-xl transition-all duration-200 whitespace-nowrap"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
