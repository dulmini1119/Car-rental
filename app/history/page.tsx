"use client";
import React, { useEffect, useState } from "react";
import { getBookings } from "@/services/index";
import { Booking } from "@/types/booking";
import HistoryCard from "./HistoryCard";

export default function HistoryPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBookings() {
      try {
        const data = await getBookings();
        setBookings(data?.bookings || []);
      } catch (err) {
        console.error("Error fetching bookings:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchBookings();
  }, []);

  if (loading) return <p className="text-center mt-10 text-gray-400">Loading...</p>;
  if (!bookings.length) return <p className="text-center mt-10 text-gray-400">No rentals found.</p>;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {bookings.map((booking) => (
        <HistoryCard key={booking.id} booking={booking} />
      ))}
    </div>
  );
}
