import { BookingInput, BookingResponse } from "@/types/booking";
import { CarListResponse } from "@/types/car";
import { StoreLocationResponse } from "@/types/store";
import request, { gql } from "graphql-request";

const MASTER_URL =
  "https://ap-south-1.cdn.hygraph.com/content/cmezp8fcq064v07w8jiibdgke/master";

export const getCarsList = async (): Promise<CarListResponse> => {
  const query = gql`
    query CarList {
      carLists {
        carAvg
        createdAt
        id
        name
        price
        publishedAt
        updatedAt
        carType
        image {
          url
        }
        carBrand
      }
    }
  `;

  const result = await request<CarListResponse>(MASTER_URL, query);

  return result;
};

export const getStoreLocations = async (): Promise<StoreLocationResponse> => {
  const query = gql`
    query storeLocation {
      storeLocations {
        address
        id
      }
    }
  `;

  const result = await request<StoreLocationResponse>(MASTER_URL, query);
  return result;
};

export const createBooking = async (formValue: BookingInput): Promise<BookingResponse> => {
  const mutationQuery = gql`
    mutation CreateBooking(
      $contactNumber: String!,
      $dropoffDate: String!,
      $dropoffTime: String!,
      $pickupDate: String!,
      $pickupTime: String!,
      $email: String,
      $userName: String!,
      $carId: ID!,

    ) {
      createBooking(
        data: {
          contactNumber: $contactNumber
          dropoffDate: $dropoffDate
          dropoffTime: $dropoffTime
          pickupDate: $pickupDate
          pickupTime: $pickupTime
          email: $email
          userName: $userName
          carId: { connect: { id: $carId } }
          
        }
      ) {
        id
      }
    }
  `;

  const variables = {
    contactNumber: formValue.contactNumber,
    dropoffDate: formValue.dropoffDate,
    dropoffTime: formValue.dropoffTime,
    pickupDate: formValue.pickupDate,
    pickupTime: formValue.pickupTime,
    email: formValue.email || "", 
    userName: formValue.userName,
    carId: formValue.carId,
  };

  const result = await request<BookingResponse>(MASTER_URL, mutationQuery, variables);
  return result;
};
