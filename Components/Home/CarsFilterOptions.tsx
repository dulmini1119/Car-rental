import { Car } from "@/types/car";
import React, { useEffect, useState } from "react";

interface CarsFilterOptionsProps {
  carsList: Car[];
  setBrand: (brand: string) => void;
  setPriceOrder: (order: "asc" | "desc") => void;
}

export default function CarsFilterOptions({ carsList, setBrand,setPriceOrder }: CarsFilterOptionsProps) {
  const [brandList, setBrandList] = useState<string[]>([]);

  useEffect(() => {
    if (carsList && carsList.length > 0) {
      filterCarList();
    }
  }, [carsList]);

  const filterCarList = () => {
    const BrandSet = new Set<string>();
    carsList.forEach((car) => {
      if (car.carBrand) BrandSet.add(car.carBrand);
    });
    setBrandList(Array.from(BrandSet));
  };



  return (
    <div className="mt-10 flex items-center justify-between mb-10">
      <div>
        <h2 className="text-[30px] font-bold">Cars Catalog</h2>
        <h2>Explore our cars you might likes</h2>
      </div>

      <div className="flex gap-5">
        <select
          defaultValue="Pick a price"
          className="select select-bordered w-full md:block max-w-xs"
          onChange={(e) => setPriceOrder(e.target.value as "asc" | "desc")}
        >
          <option disabled={true}>Price</option>
          <option value="desc">Max to Min</option>
          <option value="asc">Min to Max</option>
        </select>

        <select
          defaultValue="Pick a manufactural"
          className="select select-bordered w-full md:block max-w-xs"
          onChange={(e) => setBrand(e.target.value)}
        >
          <option disabled>Manufactural</option>
          {brandList&&brandList.map((brand: string, index: number) => (
            <option key={index} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
