import { getStoreLocations } from "@/services";
import React from "react";

export default function Form() {
    const getStoreLocation_=async()=>{
        const resp=await getStoreLocations();
        console.log(resp);
    }
  return (
    <div className="shadow-lg rounded-2xl p-6 max-w-2xl mx-auto mt-10">
      <div className="flex flex-col w-full mb-5">
        <label className="text-sm text-gray-500 mb-2">Pick-up Location</label>
        <select className="select select-bordered w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500">
          <option disabled selected>
            Select a Location
          </option>
          <option>Colombo</option>
          <option>Maharagama</option>
        </select>
      </div>

    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <div className="flex flex-col">
          <label className="text-sm text-gray-500 mb-2">Pick-up Date</label>
          <input
            type="date"
            className="input input-bordered w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm text-gray-500 mb-2">Drop-off Date</label>
          <input
            type="date"
            className="input input-bordered w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <div className="flex flex-col">
          <label className="text-sm text-gray-500 mb-2">Pick-up Time</label>
          <input
            type="time"
            className="input input-bordered w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm text-gray-500 mb-2">Drop-off Time</label>
          <input
            type="time"
            className="input input-bordered w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      
      <div className="flex flex-col w-full mb-6">
        <label className="text-sm text-gray-500 mb-2">Contact Number</label>
        <div className="relative">
          <input
            type="tel"
            className="input input-bordered w-full rounded-xl pl-10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
            placeholder="Enter your phone number"
            pattern="[0-9]*"
            minLength={10}
            maxLength={10}
            title="Must be 10 digits"
          />
        </div>
      </div>

      <button className="w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition-colors">
        Confirm Booking
      </button>
    </div>
  );
}
