import { CartItem } from './cart-item.interface';
import { CheckoutDetails } from './checkout-details.interface';
import { Document } from 'mongoose';

export interface OrderInterface extends Document {
  _id?: string;
  checkoutDetails?: CheckoutDetails;
  productList?: CartItem[];
  userId?: string;
}
