import { http, HttpResponse } from 'msw';
import { allProducts } from './data/allProducts';
const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const handlers = [
  // http.get('/api/products', () => {
  //   return HttpResponse.json(mockProducts);
  // }),
  http.get(`${baseUrl}search`, () => {
    const filtered = allProducts.slice(0, 3);
    return HttpResponse.json(filtered);
  }),
];
