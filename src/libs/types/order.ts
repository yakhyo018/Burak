import { ObjectId } from "mongoose";
import { OrderStatus } from "../enums/order.enum";
import { Product } from "./product";

export interface OrderItem {
  _id: any;
  itemQuantity: number;
  itemPrice: number;
  orderId: any;
  productId: any;
  createdAt: Date;
  updatedAt: Date;
}

export interface Order {
  _id: any;
  orderTotal: number;
  orderDelivery: number;
  orderStatus: OrderStatus;
  memberId: any;
  createdAt: Date;
  updatedAt: Date;
  /** from aggregations */
  orderItems: OrderItem[];
  productData: Product[];
}

export interface OrderItemInput {
  [x: string]: any;
  itemQuantity: number;
  itemPrice: number;
  productId: any;
  orderId?: any;
}

export interface OrderInquiry {
  page: number;
  limit: number;
  orderStatus: OrderStatus;
}

export interface OrderUpdateInput {
  orderId: string;
  orderStatus: OrderStatus;
}
