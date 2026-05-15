import { useParams } from 'react-router-dom';
import { useState } from 'react';
import type { IVariant } from '../../interfaces/products.interface';
import { useGetProductDetailsByIdQuery } from '../../features/api/endpoints/products.api';

const useProductDetails = () => {
  const { id } = useParams();
  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsByIdQuery(id!, {
    skip: !id,
  });

  const [selectedVariant, setSelectedVariant] = useState<IVariant>();

  const effectiveVariant = selectedVariant ?? product?.variants?.[0];

  return {
    error,
    effectiveVariant,
    isLoading,
    product,
    setSelectedVariant,
  };
};

export default useProductDetails;
