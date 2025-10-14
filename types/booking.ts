import { Car } from "./car";
import { StoreLocation } from "./store";

export interface Booking {
  id: string;
  userName: string;
  location: StoreLocation;
  pickupDate: string;
  dropoffDate: string;
  pickupTime: string;
  dropoffTime: string;
  contactNumber: string;
  email?: string;
  car: Car;
  isCancelled? : boolean;
  totalAmount:number;

}

export interface BookingResponse {
  bookings: Booking[];
}


export interface BookingInput {
  userName: string;
  location: string;
  pickupDate: string;
  dropoffDate: string;
  pickupTime: string;
  dropoffTime: string;
  contactNumber: string;
  email?: string;
  car? : string;
}
