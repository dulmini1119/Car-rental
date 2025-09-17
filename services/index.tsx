import { CarListResponse } from "@/types/car";
import request, { gql } from "graphql-request"


export const getCarsList=async() : Promise<CarListResponse> =>{
    const query=gql`
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
    `

    const result=await request<CarListResponse>
    ('https://ap-south-1.cdn.hygraph.com/content/cmezp8fcq064v07w8jiibdgke/master',query);

    return result;
}

export const getStoreLocations=async() =>{
  const query = gql`
 query storeLocation{
  storeLocations{
    address
  }
}
  `

  const result=await request<CarListResponse>
    ('https://ap-south-1.cdn.hygraph.com/content/cmezp8fcq064v07w8jiibdgke/master',query);

    return result;
}