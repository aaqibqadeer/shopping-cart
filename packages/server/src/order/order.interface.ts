import { CartItem } from './cart-item.interface';
import { CheckoutDetails } from './checkout-details.interface';

export interface Order {
  checkoutDetails: CheckoutDetails;
  productList: CartItem[];
  userId: string;
}
