import { CartItem } from '../cart-item.interface';
import { CheckoutDetails } from '../checkout-details.interface';

export class OrderDto {
  userId: string;
  productList: CartItem[];
  checkoutDetails: CheckoutDetails;
}
