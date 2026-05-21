import { useLocation } from 'react-router-dom';
import type { IPlaceOrderResponseBody } from '../../interfaces/placeOrderRequestBody.interface';

const useOrderSuccess = () => {
  const location = useLocation();
  const response: IPlaceOrderResponseBody = location.state || {};

  return {
    response,
  };
};

export default useOrderSuccess;
