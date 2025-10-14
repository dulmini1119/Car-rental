"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import { getCarsList } from "@/services";
import { Car } from "@/types/car";
import Form from "@/Components/CarBooking/Form";

export default function FormPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const carId = searchParams.get("carId");

  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    async function fetchCar() {
      setLoading(true);
      try {
        if (!carId) {
          setErrorMessage("Car ID is missing in the URL.");
          return;
        }

        const data = await getCarsList();
        console.log("CarId from URL:", carId);
        console.log("Fetched cars IDs:", data.carLists.map((c) => c.id));

        const foundCar = data.carLists.find((c) => c.id === carId) || null;

        if (!foundCar) {
          setErrorMessage("Car not found.");
        } else {
          setSelectedCar(foundCar);
        }
      } catch (error) {
        console.error("Failed to fetch car list:", error);
        setErrorMessage("Failed to fetch car details.");
      } finally {
        setLoading(false);
      }
    }

    fetchCar();
  }, [carId]);

  if (loading) {
    return (
      <p className="text-center mt-20 text-gray-500">Loading car details...</p>
    );
  }

  if (errorMessage) {
    return (
      <div className="text-center mt-20 text-red-500">
        <p>{errorMessage}</p>
        <button
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          onClick={() => router.back()}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="py-10 px-4">
      <button
        onClick={() => router.back()}
        className="mb-6 bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded"
      >
        &larr; Back to History
      </button>

      <Form car={selectedCar!} />
    </div>
  );
}
