export interface Car {
  id: string;
  name: string;
  image?: { url: string } | null;
  price: number;
  carAvg: number;
  carBrand: string;
  carType: string;
}

export interface CarListResponse {
  carLists: Car[];
}

export interface CarFormProps {
  car?: Car;
}
