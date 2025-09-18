"use client";
import Image from "next/image";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

interface HomepageProps{
  exploreClick: () => void;
}

export default function Homepage({exploreClick} : HomepageProps) {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-8 items-center py-12 px-6 md:px-16">
      <div className="flex flex-col justify-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-snug">
          Premium Car Rental in Your Area:{" "}
          <span className="text-blue-600">
            <Typewriter
              words={["Fast", "Easy", "Affordable"]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h1>

        <p className="text-gray-60 text-base md:text-lg">
          Book the selected car effortlessly, pay only for driving. Find your
          perfect ride now!
        </p>

        <button 
        className="mt-6 w-max px-5 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
        onClick={exploreClick}
        >
          Explore Cars
        </button>
      </div>

      <div className="relative mt-6 md:mt-0 flex justify-center md:justify-end">
        <div className="relative w-full max-w-md md:max-w-xl">
          <Image
            src="/car.avif"
            alt="Car"
            width={500}
            height={500}
            className="rounded-xl object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
