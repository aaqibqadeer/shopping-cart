import { Schema } from 'mongoose';

export const orderSchema = new Schema({
  productList: [
    {
      productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
      },
      quantity: { type: Number, required: true },
    },
  ],
  checkoutDetails: {
    fullname: { type: String, required: true },
    country: { type: String, required: true },
    address: { type: String, required: true },
    number: { type: Number, required: true },
    paymentMethod: { type: String, required: true },
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});
