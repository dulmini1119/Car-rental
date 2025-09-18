"use client";
import CarsFilterOptions from "@/Components/Home/CarsFilterOptions";
import CarsList from "@/Components/Home/CarsList";
import Homepage from "@/Components/Home/homepage";
import SearchInput from "@/Components/Home/SearchInput";
import ToastMsg from "@/Components/ToastMsg";
import { BookCreatedFlagContext,ToastState } from "@/context/BookCreatedFlagContext";
import { getCarsList } from "@/services";
import { Car } from "@/types/car";
import { useEffect, useRef, useState } from "react";



export default function Home() {


  const [carsList,setCarsList]=useState<Car[]>([]);
  const [carsOrgList,setCarsOrgList]=useState<Car[]>([]);
 const [toast, setToast] = useState<ToastState>({ message: "", type: "" });

  const carsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    getCarList_();
  }, [])


  const getCarList_=async()=>{
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

   const handleExploreClick = () => {
    carsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="p-5 sm:px-10 md:px-20">
      <BookCreatedFlagContext.Provider value={{toast, setToast }}>
        <Homepage exploreClick={handleExploreClick}/>

      <SearchInput carsOrgList={carsOrgList} setCarsList={setCarsList} />

      <CarsFilterOptions 
      carsList={carsOrgList}
      setBrand={(value:string) => filterCarList(value)}
      setPriceOrder={(order: "asc" | "desc") => filterPrice(order)}/>

      <div ref={carsRef} className="mt-10">
        <CarsList carsList={carsList}/>
      </div>

      {<ToastMsg />}
      </BookCreatedFlagContext.Provider>

    </div>
  );
}
