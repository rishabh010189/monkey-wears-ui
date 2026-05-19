import { useAppSelector } from '../reduxHooks';

const useHeader = () => {
  const { items } = useAppSelector((state) => state.cart);
  return { cartCount: items.length };
};

export default useHeader;
