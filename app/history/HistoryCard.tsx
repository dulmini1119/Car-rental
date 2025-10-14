"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { Booking } from "@/types/booking";

interface HistoryCardProps {
  booking: Booking;
}

export default function HistoryCard({ booking }: HistoryCardProps) {
  const router = useRouter();

  const getStatus = () => {
    const now = new Date();
    const pickup = new Date(booking.pickupDate);
    const dropoff = new Date(booking.dropoffDate);

    if (booking.isCancelled) return "Cancelled";
    if (now < pickup) return "Upcoming";
    if (now >= pickup && now <= dropoff) return "Ongoing";
    if (now > dropoff) return "Completed";
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-100 text-green-800";
      case "Ongoing": return "bg-blue-100 text-blue-800";
      case "Upcoming": return "bg-yellow-100 text-yellow-800";
      case "Cancelled": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const status = getStatus();

  return (
    <div className="m-4">
      <div className="group bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 duration-300 p-5 cursor-pointer w-full max-w-sm mx-auto">

      <div>
          <h2 className="text-lg sm:text-xl font-semibold text-white mb-1">
          {booking.car?.name}
        </h2>
        <p className="text-gray-400 text-sm">{booking.car?.carBrand || ""}</p>
      </div>

        <div className="relative w-full h-[180px] mb-4 flex items-center justify-center">
          {booking.car?.image?.url ? (
            <Image
              src={booking.car.image.url}
              alt={booking.car.name}
              width={200}
              height={150}
              className="object-contain rounded-xl"
            />
          ) : (
            <div className="w-full h-full bg-gray-700 flex items-center justify-center rounded-xl text-gray-400">
              No Image
            </div>
          )}
        </div>


        <div className="mt-4 text-gray-300 text-sm space-y-1 mb-5">
          <p><strong>Pickup:</strong> {new Date(booking.pickupDate).toLocaleDateString()}</p>
          <p><strong>Dropoff:</strong> {new Date(booking.dropoffDate).toLocaleDateString()}</p>
          <p><strong>Location:</strong> {booking.location?.address || "Not specified"}</p>
        </div>

        
        <div className="flex justify-between items-center mt-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(status!)}`}>
            {status}
          </span>
          <p className="text-white font-medium">Rs. {booking.totalAmount || "0"}/=</p>
        </div>

        <div className="flex gap-3 mt-4">
          <button
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl text-sm"
            onClick={() => router.push(`/history/receipt/${booking.id}`)}
          >
            View Receipt
          </button>
          <button
            className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-2 rounded-xl text-sm"
            onClick={() => router.push(`/form?carId=${booking.car.id}`)}
          >
            Rent Again
          </button>
        </div>
      </div>
    </div>
  );
}
