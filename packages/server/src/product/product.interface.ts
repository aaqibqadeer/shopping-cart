import { Document } from 'mongoose';

export interface ProductInterface extends Document {
  _id?: string;
  title?: string;
  price?: number;
  description?: string;
  imgUrl?: string;
}
