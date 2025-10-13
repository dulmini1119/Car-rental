import { Car } from "@/types/car";
import React, { useEffect, useState } from "react";

interface CarsFilterOptionsProps {
  carsList: Car[];
  setBrand: (brand: string) => void;
  setPriceOrder: (order: "asc" | "desc") => void;
}

export default function CarsFilterOptions({
  carsList,
  setBrand,
  setPriceOrder,
}: CarsFilterOptionsProps) {
  const [brandList, setBrandList] = useState<string[]>([]);

  useEffect(() => {
    if (carsList.length > 0) {
      const uniqueBrands = Array.from(new Set(carsList.map((car) => car.carBrand).filter(Boolean)));
      setBrandList(uniqueBrands);
    }
  }, [carsList]);

  // Handler to prevent triggering filters on default option
  const handlePriceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === "Price") return; // Ignore default
    setPriceOrder(value as "asc" | "desc");
  };

  const handleBrandChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === "Manufactural") return; // Ignore default
    setBrand(value);
  };

  return (
    <div className="mt-10 flex flex-col md:flex-row items-center justify-between mb-10 gap-5">
      <div>
        <h2 className="text-[30px] font-bold">Cars Catalog</h2>
        <h2>Explore our cars you might like</h2>
      </div>

      <div className="flex gap-5 w-full md:w-auto">
        <select
          defaultValue="All"
          className="select select-bordered w-full md:w-auto max-w-xs"
          onChange={handlePriceChange}
        >
          <option value="All" disabled>
            Price
          </option>
          <option value="desc">Max to Min</option>
          <option value="asc">Min to Max</option>
        </select>

        <select
          defaultValue="Manufactural"
          className="select select-bordered w-full md:w-auto max-w-xs"
          onChange={handleBrandChange}
        >
          <option value="Manufactural" disabled>
            Manufactural
          </option>
          {brandList.map((brand, index) => (
            <option key={index} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
