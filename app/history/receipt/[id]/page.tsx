"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getBookings } from "@/services/index";
import { Booking } from "@/types/booking";
import Image from "next/image";

export default function ReceiptPage() {
  const { id } = useParams(); 
  const router = useRouter();
  const [booking, setBooking] = useState<Booking | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBooking() {
      try {
        const data = await getBookings();
        const found = data.bookings.find((b) => b.id === id) || null;
        setBooking(found);
      } catch (err) {
        console.error("Error fetching booking:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchBooking();
  }, [id]);

  if (loading) return <p className="text-center mt-10 text-gray-400">Loading...</p>;
  if (!booking) return <p className="text-center mt-10 text-gray-400">Booking not found.</p>;

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-gray-800 rounded-xl text-white flex flex-col gap-6">

     
      <button
        onClick={() => router.push("/history")}
        className="self-start mb-4 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-all duration-200"
      >
        &larr; Back to History
      </button>

      <div className="flex flex-col md:flex-row gap-6">

      
        <div className="md:w-1/2 flex items-center justify-center">
          {booking.car?.image?.url ? (
            <Image
              src={booking.car.image.url}
              alt={booking.car?.name}
              width={300}
              height={200}
              className="object-contain rounded-xl"
            />
          ) : (
            <div className="w-full h-64 bg-gray-700 flex items-center justify-center rounded-xl text-gray-400">
              No Image
            </div>
          )}
        </div>

        <div className="md:w-1/2 flex flex-col gap-2">
          <h2 className="text-2xl font-bold">{booking.car?.name}</h2>
          <p><strong>Brand:</strong> {booking.car?.carBrand || "-"}</p>
          <p><strong>Pickup Date:</strong> {new Date(booking.pickupDate).toLocaleDateString()}</p>
          <p><strong>Dropoff Date:</strong> {new Date(booking.dropoffDate).toLocaleDateString()}</p>
          <p><strong>Pickup Time:</strong> {booking.pickupTime}</p>
          <p><strong>Dropoff Time:</strong> {booking.dropoffTime}</p>
          <p><strong>Location:</strong> {booking.location?.address || "Not specified"}</p>
          <p><strong>User:</strong> {booking.userName}</p>
          <p><strong>Contact:</strong> {booking.contactNumber}</p>
          <p><strong>Email:</strong> {booking.email || "-"}</p>
          <p><strong>Total Amount:</strong> Rs. {booking.totalAmount || "-"}</p>
          <p><strong>Status:</strong> {booking.isCancelled ? "Cancelled" : "Confirmed"}</p>
        </div>
      </div>
    </div>
  );
}
