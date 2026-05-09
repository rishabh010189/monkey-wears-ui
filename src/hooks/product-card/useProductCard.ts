import type { IProduct } from '../../interfaces/products.interface';

const useProductCard = ({ product }: { product: IProduct }) => {
  const BASE_URL = 'https://d2n41bjlvqia14.cloudfront.net'; // CloudFront/S3 base
  const item = product.variants[0];
  const posterImg = item.images[0];

  const link = `/productDetails/${product.id}`;

  return {
    BASE_URL,
    item,
    link,
    posterImg,
  };
};

export default useProductCard;
