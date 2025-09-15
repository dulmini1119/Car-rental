import { Car } from '@/types/car';
import React from 'react'
import CarCard from './CarCard';

interface CarsListProps {
    carsList: Car[];
}

export default function CarsList({carsList} : CarsListProps) {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {carsList.map((car) => (
            <div key={car.id}>
                <CarCard car={car}/>
            </div>
        ))}

        
    </div>
    
  )
}
