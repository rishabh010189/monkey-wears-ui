import type { IProduct } from './products.interface';

export interface IQuickViewOverlay {
  open: boolean;
  product: IProduct;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
