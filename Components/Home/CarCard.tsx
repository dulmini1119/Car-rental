import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaGasPump } from "react-icons/fa";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { PiSteeringWheelFill } from "react-icons/pi";

export default function CarCard(props) {
  const [car, setCar] = useState(props.car);

  useEffect(()=>{
    if(props.car){
      setCar(props.car)
    }
  },[props.car])

  return car&&(
    <div className="group bg-gray-300 rounded-xl border-gray-300 p-4 m-3 sm:p-5 shadow:sm hover:shadow-lg hover:-translate-y-1 transition-transform cursor-pointer duration-300">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
        {car.name}
      </h2>
      <h2 className="text-[28px] font-bold mb-2 text-gray-900">
        <span className="text-[12px] font-light">Rs.</span>
        {car.price}
        <span className="text-[12px] font-light">/=</span>
      </h2>

      <div className="relative w-full h-[150px] sm:h-[180px] mb-4">
        <Image
          src={car.image?.url} 
          alt={car.name}
          width={200}
          height={150}
          className="object-contain rounded-lg"
        />
      </div>

      <div className="flex justify-around mt-3">
        <div className="text-center text-gray-500">
          <PiSteeringWheelFill className="mx-auto text-[14px] font-light mb-2" />
          <h2 className="line-clamp-5 text-[14px] font-light">
            {car.carType}{" "}
          </h2>
        </div>
        <div className="text-center text-gray-500">
          <MdAirlineSeatReclineNormal className="mx-auto text-[22px] mb-2" />
          <h2 className="line-clamp-5 text-[14px] font-light">
            {car.seats} Seat
          </h2>
        </div>
        <div className="text-center text-gray-500">
          <FaGasPump className="mx-auto text-[14px] font-light mb-2" />
          <h2 className="line-clamp-5 text-[14px] font-light">
            {car.carAvg} MPG
          </h2>
        </div>
      </div>
      <div className="mt-4 text-center">
        <button className="opacity-0 group-hover:opacity-100 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg transition-opacity duration-300">
          Rent Now
        </button>
      </div>
    </div>
  );
}
