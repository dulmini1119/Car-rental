import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaGasPump } from "react-icons/fa";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { PiSteeringWheelFill } from "react-icons/pi";

export default function CarCard(props) {
  const [car, setCar] = useState(props.car);

  useEffect(() => {
    if (props.car) {
      setCar(props.car);
    }
  }, [props.car]);

  return (
    car && (
      <div className="m-4">
        <div className="group bg-white dark:bg-gray-700 rounded-2xl shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 duration-300 p-5 cursor-pointer w-full max-w-sm mx-auto">

        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100 mb-1">
          {car.name}
        </h2>


        <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-200">
          <span className="text-sm font-light">Rs.</span>
          {car.price}
          <span className="text-sm font-light">/=</span>
        </h2>


        <div className="relative w-full h-[180px] mb-4 flex items-center justify-center">
          <Image
            src={car.image?.url}
            alt={car.name}
            width={200}
            height={150}
            className="object-contain rounded-xl"
          />
        </div>


        <div className="flex justify-around mt-3 text-gray-500 dark:text-gray-400">
          <div className="text-center">
            <PiSteeringWheelFill className="mx-auto text-lg mb-1" />
            <p className="text-sm font-light">{car.carType}</p>
          </div>
          <div className="text-center">
            <MdAirlineSeatReclineNormal className="mx-auto text-lg mb-1" />
            <p className="text-sm font-light">{car.seats} Seat</p>
          </div>
          <div className="text-center">
            <FaGasPump className="mx-auto text-lg mb-1" />
            <p className="text-sm font-light">{car.carAvg} MPG</p>
          </div>
        </div>

        <div className="mt-4 text-center">
          <button className="opacity-0 group-hover:opacity-100 px-4 py-2 bg-blue-600 text-white font-semibold rounded-xl transition-opacity duration-300 hover:bg-blue-700">
            Rent Now
          </button>
        </div>
      </div>
      </div>
    )
  );
}
