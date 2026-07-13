import { ObjectId } from "mongoose";
import { OrderStatus } from "../enums/order.enum";

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
}

export interface OrderItemInput {
  [x: string]: any;
  itemQuantity: number;
  itemPrice: number;
  productId: any;
  orderId?: any;
}
