export interface Booking {
  id: string;
  userName: string;
  carId: string;
  location: string;
  pickupDate: string;
  dropoffDate: string;
  pickupTime: string;
  dropoffTime: string;
  contactNumber: string;
  email?: string;
}

export interface BookingResponse {
  bookingList: Booking[];
}
export interface BookingInput {
  userName: string;
  carId: string;
  location: string;
  pickupDate: string;
  dropoffDate: string;
  pickupTime: string;
  dropoffTime: string;
  contactNumber: string;
  email?: string;
}
