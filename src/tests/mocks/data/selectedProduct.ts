import type { IProduct } from '../../../interfaces/products.interface';

export const selectedProduct: IProduct = {
  id: 'p2',
  name: 'Casual Cotton T-Shirt',
  category: 'men',
  type: 'clothing',
  brand: 'UrbanStyle',
  currency: 'INR',
  description:
    'Clean, classic, and impossible to mess up - this regular fit polo is your go-to for when you want to look like you tried just enough. Soft on the skin, sharp in the mirror, it works from brunches to bad decisions.',
  rating: 4.2,
  productCategory: 't-shirt',
  tags: ['polo', 't-shirt', 'v-neck', 'men', 'white'],
  gender: 'Male',
  isTrending: true,
  variants: [
    {
      vid: 'v1',
      sku: 'POLO-WHT-M',
      color: 'white',
      size: 'M',
      price: 1599,
      originalPrice: 1799,
      modelName: 'seaway',
      stock: 2,
      images: [
        'p2/v1/1772867332_3931987.avif',
        'p2/v1/1772867332_4387425.avif',
        'p2/v1/1772867332_7355632.avif',
      ],
    },
  ],
};
