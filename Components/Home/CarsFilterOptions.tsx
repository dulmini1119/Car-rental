import React from "react";

export default function CarsFilterOptions() {
  return (
    <div className="mt-10 flex items-center justify-between">
      <div>
        <h2 className="text-[30px] font-bold">Cars Catalog</h2>
        <h2>Explore our cars you might likes</h2>
      </div>

      <div className="flex gap-5">
        <select defaultValue="Pick a price" className="select select-bordered w-full md:block max-w-xs">
          <option disabled={true}>Price</option>
          <option>Max to Min</option>
          <option>Min to Max</option>
        </select>

        <select defaultValue="Pick a manufactural" className="select select-bordered w-full md:block max-w-xs ">
          <option disabled={true}>Manufactural</option>
          <option>Honda</option>
          <option>Toyota</option>
          <option>BMW</option>
        </select>

      </div>
    </div>
  );
}
