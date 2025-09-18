import { BookCreatedFlagContext } from "@/context/BookCreatedFlagContext";
import { createBooking, getStoreLocations } from "@/services";
import { CarFormProps } from "@/types/car";
import { StoreLocation } from "@/types/store";
import React, { useContext, useEffect, useState } from "react";

export default function Form({car}:CarFormProps) {
  const [storeLocation, setStoreLocation] = useState<StoreLocation[]>([]);
 const { setToast } = useContext(BookCreatedFlagContext);
  const [formValue, setFormValue] = useState({
    location:'',
    pickupDate: '',
    dropoffDate:'',
    pickupTime:'',
    dropoffTime:'',
    contactNumber:'',
    userName:'',
    carId: '',
  })

  useEffect(() => {
    const getStoreLocation_ = async () => {
      try {
        const resp = await getStoreLocations();
        setStoreLocation(resp?.storeLocations ?? []); 
      } catch (error) {
        console.error("Error fetching store locations:", error);
        setToast({message: "Failed to load store locations", type: "error"});
      }
    };

    getStoreLocation_();
  }, [setToast]);

useEffect(() => {
  if (car) {
    setFormValue((prev) => ({
      ...prev,
      carId: car.id // this id exists now
    }));
  }
}, [car]);


  const handleChange=(event:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
    setFormValue({
      ...formValue,
      [event.target.name] : event.target.value,
    })
  }

  const handleSubmit=async()=>{
    try {
      const resp = await createBooking(formValue);
      console.log(resp);

      if (resp) {
        setToast({ message: "Booking created successfully", type: "success" });
      }
    } catch (error) {
      console.error("Booking failed:", error);
      setToast({ message: "Failed to create booking", type: "error" });
    }
  };

  return (
    <div className="shadow-lg rounded-2xl p-6 max-w-2xl mx-auto mt-10">
      <div className="flex flex-col w-full mb-5">
        <label className="text-sm text-gray-500 mb-2">Name</label>
        <input
            name="userName"
            type="text"
            className="input input-bordered w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={handleChange}
            value={formValue.userName}
            placeholder="Enter your name"
          />
      </div>

      <div className="flex flex-col w-full mb-5">
        <label className="text-sm text-gray-500 mb-2">Pick-up Location</label>
        <select
          className="select select-bordered w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          name="location"
          onChange={handleChange}
          value={formValue.location}
        >
          <option value="" disabled>
            Select a Location
          </option>
          {storeLocation.map((loc) => (
            <option key={loc.id} value={loc.id}>
              {loc.address}
            </option>
          ))}
        </select>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <div className="flex flex-col">
          <label className="text-sm text-gray-500 mb-2">Pick-up Date</label>
          <input
            name="pickupDate"
            type="date"
            className="input input-bordered w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={handleChange}
            value={formValue.pickupDate}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm text-gray-500 mb-2">Drop-off Date</label>
          <input
            name="dropoffDate"
            type="date"
            className="input input-bordered w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={handleChange}
            value={formValue.dropoffDate}
          />
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <div className="flex flex-col">
          <label className="text-sm text-gray-500 mb-2">Pick-up Time</label>
          <input
            name="pickupTime"
            type="time"
            className="input input-bordered w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={handleChange}
            value={formValue.pickupTime}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm text-gray-500 mb-2">Drop-off Time</label>
          <input
            name="dropoffTime"
            type="time"
            className="input input-bordered w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={handleChange}
            value={formValue.dropoffTime}
          />
        </div>
      </div>


      <div className="flex flex-col w-full mb-6">
        <label className="text-sm text-gray-500 mb-2">Contact Number</label>
        <div className="relative">
          <input
            name="contactNumber"
            type="tel"
            className="input input-bordered w-full rounded-xl pl-10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your phone number"
            pattern="[0-9]*"
            minLength={10}
            maxLength={10}
            title="Must be 10 digits"
            onChange={handleChange}
            value={formValue.contactNumber}
          />
        </div>
      </div>

      <button className="w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition-colors" onClick={handleSubmit}>
        Confirm Booking
      </button>
    </div>
  );
}
