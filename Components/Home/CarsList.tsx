"use client";
import { Car } from "@/types/car";
import React, { useRef, useState } from "react";
import CarCard from "./CarCard";
import BookingModel from "../CarBooking/BookingModel";

interface CarsListProps {
  carsList: Car[];
}

export default function CarsList({ carsList }: CarsListProps) {
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  const openModal = () => {
    modalRef.current?.showModal();
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {carsList.map((car) => (
        <div
          key={car.id}
          onClick={() => {
            setSelectedCar(car);
            openModal();
          }}
          className="cursor-pointer"
        >
          <CarCard car={car} />
        </div>
      ))}

      <dialog ref={modalRef} id="my_modal_4" className="modal">
        {selectedCar && <BookingModel car={selectedCar} />}
      </dialog>
    </div>
  );
}
