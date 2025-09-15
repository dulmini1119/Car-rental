"use client";
import CarsFilterOptions from "@/Components/Home/CarsFilterOptions";
import CarsList from "@/Components/Home/CarsList";
import Homepage from "@/Components/Home/homepage";
import SearchInput from "@/Components/Home/SearchInput";
import { getCarsList } from "@/services";
import { Car } from "@/types/car";
import { useEffect, useState } from "react";



export default function Home() {


  const [carsList,setCarsList]=useState<Car[]>([]);
  const [carsOrgList,setCarsOrgList]=useState<Car[]>([]);

  useEffect(() => {
    getCarList_();
  }, [])


  const getCarList_=async()=>{
    // const result: { carLists: Car[]}=await getCarsList()
    const result = await getCarsList();
    setCarsList(result?.carLists || [])
    setCarsOrgList(result?.carLists || [])
  }

  const filterCarList=(brand:string)=>{
    const filterList=carsOrgList.filter((item:Car) => 
    item.carBrand==brand);

    setCarsList(filterList);
  }

    const filterPrice = (priceOrder: "asc" | "desc") => {
    const sortedList = [...carsOrgList];

    if(priceOrder === "asc"){
      sortedList.sort((a,b) => a.price - b.price);
    } else if(priceOrder === "desc"){
      sortedList.sort((a,b) => b.price - a.price);
    }

    setCarsList(sortedList);
  }


  return (
    <div className="p-5 sm:px-10 md:px-20">
      <Homepage />

      <SearchInput />

      <CarsFilterOptions 
      carsList={carsOrgList}
      setBrand={(value:string) => filterCarList(value)}
      setPriceOrder={(order: "asc" | "desc") => filterPrice(order)}/>

      <CarsList carsList={carsList}/>
    </div>
  );
}
