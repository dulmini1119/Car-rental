import React from "react";
import { Car } from "@/types/car";
import CarCard from "../Home/CarCard";
import Form from "./Form";

interface BookingModelProps {
  car: Car;
}

export default function BookingModel({ car }: BookingModelProps) {
  return (
    <form method="dialog" className="modal-box w-11/12 max-w-5xl">
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      <div className="border-b-[1px] pb-2">
        <h3 className="text-[30px] font-light text-gray-400">
          Rent A Car Now!
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="mt-10  rounded-xl shadow-md ">
          <CarCard car={car} />
        </div>
        <div>
          <Form car={car}/>
        </div>
      </div>
      
    </form>
  );
}
