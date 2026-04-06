export interface IProduct {
  id: string;
  name: string;
  category: string;
  type: string;
  brand: string;
  price: number;
  currency: string;
  stock: number;
  rating: number;
  sizes: string[];
  colors: string[];
  images: string[];
  description: string;
}
