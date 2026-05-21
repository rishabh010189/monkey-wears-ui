export interface ICheckoutForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;

  addressLine1: string;

  city: string;
  state: string;
  pincode: string;

  paymentMethod: string;
}
