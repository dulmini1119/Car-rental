// import React from "react";

// export default function SearchInput() {
//   return (
//     <div className="mt-5 px-4">
//       <h2 className="text-center text-[20px] text-gray-500 mb-6">
//         Lets Search what you need
//       </h2>

//       <div className="flex justify-center m-4">
//         <div className="flex flex-wrap bg-gray-300 p-1 px-2 gap-2 rounded-full divide-x">
//           <div className="flex items-center text-white">
//             <div className="flex items-center flex-1 px-4 py-2 md:py-3">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 stroke="currentColor"
//                 className="w-5 h-5 text-gray-400 mr-2"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
//                 />
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
//                 />
//               </svg>
//             </div>

//             <input
//               type="text"
//               placeholder="Location"
//               className="text-gray-700 outline-none bg-transparent "
//             />

//             <div className="flex items-center flex-1 px-4 py-3 md:py-3">
//               <input
//                 type="date"
//                 className=" outline-none bg-transparent text-gray-700  text-center"
//               />
//             </div>

//             <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 md:py-3 rounded-full m-2 md:m-0 transition-all duration-200">
//               Search
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import React, { useState } from "react";
import { Car } from "@/types/car";

interface SearchInputProps {
  carsOrgList: Car[];
  setCarsList: (cars: Car[]) => void;
}

export default function SearchInput({
  carsOrgList,
  setCarsList,
}: SearchInputProps) {
  const [pickupDate, setPickupDate] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");

  const handleSearch = () => {
    const filtered = [...carsOrgList];

    console.log("Selected Pickup:", pickupDate, "Dropoff:", dropoffDate);

    setCarsList(filtered);
  };

  return (
    <div className="mt-5 px-4">
      <h2 className="text-center text-[20px] text-gray-500 mb-6">
        Find Your Car
      </h2>

      <div className="flex flex-col md:flex-row justify-center gap-3 p-3 rounded-xl">
        <input
          type="date"
          value={pickupDate}
          onChange={(e) => setPickupDate(e.target.value)}
          className="input input-bordered w-full md:w-40 rounded-xl"
        />

        <input
          type="date"
          value={dropoffDate}
          onChange={(e) => setDropoffDate(e.target.value)}
          className="input input-bordered w-full md:w-40 rounded-xl"
        />

        <button
          onClick={handleSearch}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl transition-all duration-200"
        >
          Search
        </button>
      </div>
    </div>
  );
}
