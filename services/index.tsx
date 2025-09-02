import request, { gql } from "graphql-request"


export const getCarsList=async()=>{
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
  }
}
    `

    const result=await request('',query)
}